const db  = require('./index.js');
const Review = require('./Review.js');

const smapleReviews =[
    {
        productID: 00,
        author: "Juan",
        title: "The Worst tv",
        body: "I hated that this freaking tv does not have a colorblind mode, how incosiderate can they be. ",
        ratings: {
            Features: 2,
            Performance: 4,
            Design: 3,
            Value: 5,
        },
        helpful: {
            yes: 15,
            no: 16
        },
        image: 'no image'  
    }   
]




const insertSampleBlogs = function() {
    Review.create(smapleReviews)
      .then(() => db.disconnect());
  };
  
  insertSampleBlogs();