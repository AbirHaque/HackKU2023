const express = require('express') // import express
const bodyParser = require('body-parser') // import body-parser
const { graphqlHTTP }= require('express-graphql') // import graphql to use as middleware
const { buildSchema } = require('graphql') // import the function to build our schema
const mongoose = require('mongoose') // impor the mongoose drivers
const Comprehension = require('./models/comprehension.js')
require('dotenv').config();
var {ObjectId} = require('mongodb');

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


        type comprehensionQuery {
            comprehensions: [Comprehension!]!
        }

        type comprehensionMutation {
            deleteComprehension(id: ID): String
            createComprehension(comprehensionInput: ComprehensionInput): Comprehension
        }

        schema {
            query: comprehensionQuery
            mutation: comprehensionMutation
            
        }
    `),
    rootValue: {
        comprehension: () => {

            // return all the Comprehension unfiltered using Model
            return Comprehension.find().then(comprehension => {
                return comprehension
            }).catch(err => {
                throw err
            })
        },
        createComprehension: (args) => {

            const comprehension = new Comprehension({
                title: args.comprehensionInput.title,
                text: args.comprehensionInput.text,
                description: args.comprehensionInput.description,
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

app.get('/',(req,res)=>{
    res.redirect('/home');
});
app.get('/home',(req,res)=>{
    res.send("This page is a filler welcome page (or something else)");
});
app.get('/get_all_comprehensions',(req,res)=>{
    res.send("This page has a list of all comprensions you can choose from. Not all details should be present for each comprehension here.");

});
app.post('/get_comprehension',(req,res)=>{
    res.send("This page should have be have all details of a single comprehension.");
    
});
app.post('/create_comprehension',(req,res)=>{
    res.send("This page should allow you to create a single comprehension.");
    
});

// connect to our MongoDB server.
mongoose.connect('mongodb+srv://'+process.env.DB+':'+process.env.PASS+'@cluster0.brtxmpg.mongodb.net/?retryWrites=true&w=majority'
).then(() => {

    app.listen(5000) // setup server to run on port 5000
    console.log("Mongoose connected!")

}).catch(err => {
    console.log(err)
})