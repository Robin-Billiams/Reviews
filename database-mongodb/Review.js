const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema({
    productID: Number,
    author: String,
    title: String,
    body: String,
    ratings:{
        Features: {
            type: Number,
            default: 0
        },
        Performance: {
            type: Number,
            default: 0
        },
        Design: {
            type: Number,
            default: 0
        },
        Value: {
            type: Number,
            default: 0
        }
    },

    yes: {
        type: Number,
        default: 0
    },
    no: {
        type: Number,
        default: 0
    }
    
},
    {
        timestamps: true
    }
);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;