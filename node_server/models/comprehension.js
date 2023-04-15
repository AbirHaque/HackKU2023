const mongoose = require('mongoose') // import mongoose

const Schema = mongoose.Schema

// Create the Schema for Mongoose that corresponds to that type we set in GraphQL
const comprehension = new Schema({

    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    key_phrases: {
        type: [String],
        required: true
    },
    scraped_data: {
        type: [String],
        required: true
    },
    date: {
        type: Date,
        required: true
    }

})

module.exports = mongoose.model('Comprehension', comprehension) // create and export the model