const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema({
    author: String,
    title: String,
    body: String,
    ratings:{
        features: {
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

    helpful: {
        yes: {
            type: Number,
            default: 0
        },
        no: {
            type: Number,
            default: 0
        }
    },
    image: {
        type: String,
        default: 'no image'
    }
},
    {
        timestamps: true
    }
);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;