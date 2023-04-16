const express = require('express') // import express
const bodyParser = require('body-parser') // import body-parser
const { graphqlHTTP }= require('express-graphql') // import graphql to use as middleware
const { buildSchema } = require('graphql') // import the function to build our schema
const mongoose = require('mongoose') // impor the mongoose drivers
const Comprehension = require('./models/comprehension.js')
require('dotenv').config();
var {ObjectId} = require('mongodb');
var request = require('request');
var axios = require('axios');

const app = express() // create express server

app.use(bodyParser.json()) // use body-parser middleware to parse incoming json

app.use('/graphql', graphqlHTTP({ // set up our graphql endpoint with the express-graphql middleware
    // build a graphql schema
    schema: buildSchema(`

        type Comprehension {
            _id: ID!
            title: String!
            text: String!
            key_phrases: [String!]
            scraped_data: [String!]
            date: String
        }

        input ComprehensionInput {
            title: String!
            text: String!
            key_phrases: [String!]
            scraped_data: [String!]
            date: String
        }
        type Query {
            comprehension(_id: String): Comprehension
            comprehensions:[Comprehension]
          }

        type Mutation {
            deleteComprehension(id: ID): String
            createComprehension(comprehensionInput: ComprehensionInput): Comprehension
            updateComprehension(id: ID, comprehensionInput:ComprehensionInput): String
        }

        schema {
            query: Query
            mutation: Mutation
            
        }
    `),
    rootValue: {
        comprehension: async function(args) {
            return await Comprehension.findById(id=new ObjectId(args._id))
        },
        comprehensions:(args)=>{
            return Comprehension.find({})
        },
        createComprehension: async (args) => {

            tmp_body=null;

            await axios.get('https://keyword.abirhaque.repl.co/get_wiki_keywords?text='+args.comprehensionInput.text+'&num_phrases=5').then(
                (response) => {
                    tmp_body=response.data;
                },
                (error) => {
                    console.log(error);
                }
            );
            

            
            key_phrases=tmp_body.final_phrases;
            scraped_data=JSON.stringify(tmp_body.scraped_data);
            const comprehension = new Comprehension({
                title: args.comprehensionInput.title,
                text: args.comprehensionInput.text,
                key_phrases: key_phrases,
                scraped_data: scraped_data,
                date: new Date()
            })


            // save new Comprehension using model which will save in MongoDB
            return comprehension.save().then(result => {
                console.log(result)
                return result
            }).catch(err => {
                console.log(err)
                throw err
            })
        },
        updateComprehension: async function (args) {
            try{
                tmp_body=null;

                await axios.get('https://keyword.abirhaque.repl.co/get_wiki_keywords?text='+args.comprehensionInput.text+'&num_phrases=5').then(
                    (response) => {
                        tmp_body=response.data;
                    },
                    (error) => {
                        console.log(error);
                    }
                );

                key_phrases=tmp_body.final_phrases;
                scraped_data=JSON.stringify(tmp_body.scraped_data);
                await Comprehension.updateOne(
                    { "_id" : new ObjectId(args.id) },
                    {
                        "title": args.comprehensionInput.title,
                        "text": args.comprehensionInput.text,
                        "key_phrases": key_phrases,
                        "scraped_data":scraped_data,
                        "date": new Date()
                    }
                )
                return "Success";
            }
            catch(e){
                return "Fail";
            }
        },
        deleteComprehension: async function (args) {
            try{
                await Comprehension.deleteOne({ "_id" : new ObjectId(args.id) });
                return "Success";
            }
            catch(e){
                return "Fail";
            }
        }
    }, // an object with resolver functions
    graphiql: true // enable the graphiql interface to test our queries
}))

app.get('/start',(req,res)=>{
    res.send("This page is asks for a PDF/CV/areas of knowledge");
});
app.get('/home',(req,res)=>{
    res.send("This page is the dashboard");
});

// connect to our MongoDB server.
mongoose.connect('mongodb+srv://'+process.env.DB+':'+process.env.PASS+'@cluster0.brtxmpg.mongodb.net/?retryWrites=true&w=majority'
).then(() => {

    app.listen(5000) // setup server to run on port 5000
    console.log("Mongoose connected!")

}).catch(err => {
    console.log(err)
})