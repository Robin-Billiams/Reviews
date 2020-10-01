const db  = require('./index.js');
const Review = require('./Review.js');
const faker = require('faker');

const sampleReviews = [];

let randomSet = function() { 
    let getRandomInt = function(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    for (let a = 99; a >= 0; a--) {
        for( let b = 0; b < getRandomInt(15); b++) {
            let fakeReview = {};
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
            fakeReview.yes = getRandomInt(50),
            fakeReview.no = getRandomInt(50)
            
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