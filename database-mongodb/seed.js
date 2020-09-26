const db  = require('./index.js');
const Review = require('./Review.js');
const faker = require('faker');

const sampleReviews = [];

var randomSet = function() { 
    var getRandomInt = function(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    for (var a = 99; a >= 0; a--) {
        for( var b = 0; b < getRandomInt(15); b++) {
            var fakeReview = {};
            fakeReview.productID = a,
            fakeReview.author =  faker.name.findName(),
            fakeReview.title = faker.lorem.words(),
            fakeReview.body = faker.lorem.paragraph(),
            fakeReview.ratings = {
                Features: getRandomInt(6),
                Performance: getRandomInt(6),
                Design: getRandomInt(6),
                Value: getRandomInt(6)
            },
            fakeReview.helpful = {
                yes: getRandomInt(50),
                no: getRandomInt(50)
            }
            sampleReviews.push(fakeReview)
        }
    }
}

randomSet()


const insertSampleReviews = function() {
    Review.create(sampleReviews)
      .then(() => db.disconnect());
  };
  
  insertSampleReviews();