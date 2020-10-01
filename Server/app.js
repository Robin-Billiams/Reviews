const express = require('express')
const app = express()

const bodyParser = require('body-parser');
const Review = require('../database-mongodb/Review.js');

//MIDDLEWARE
app.use(bodyParser.json())
// if unsure how the code is working or what it requires check this gist https://gist.github.com/vargas055/3173a744411f52a68f5d8e8c61f3da3c
app.use(express.static(__dirname + '/../react-client/dist'))
//GET//
app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/productID', (req, res) => {
    var id = (req.query.productID)
    Review.find({productID: id}, (err, data) => {
        if(err) {
            console.log(err)
        }
        res.send(data)
    })
})

app.get('/productID/title', (req, res) => {
    var reviewTitle = (req.body.title)
    Review.find({title: reviewTitle}, (err, data) => {
        if(err) {
            console.log('couldnt find review with title:', reviewTitle)
        }
        res.send(data)
    })
})

app.delete('/productID/title', (req, res) => {
    var reviewTitle = (req.body.title)
    Review.deleteMany({title: reviewTitle}, (err, data) => {
        if(err) {
            console.log('couldnt find review with title:', reviewTitle)
        }
        res.send(data)
    })
})

//POST//

app.post('/productID', (req, res) => {
    var newReview = (req.body.newPost)
    Review.create(newReview)
    .then(() => {
        res.send('post succesfull!!')
    })
    .catch(err => {
        res.send("Couln't post see:",  err)
    })
})



//PATCH//
app.patch('/productID', (req, res) => {
    var updateId = (req.body.updateValue._id)
    if(req.body.updateValue.updateVal === "yes") {
        Review.findOneAndUpdate({_id: updateId}, {$inc: {yes: 1}}, {new: true}, (err, response) => {
            if (err) {
                console.log('error:', err)
                res.end()
            } else {
                res.send(response)
            }
        })
    } else {
        Review.findOneAndUpdate({_id: updateId}, {$inc: {no: 1}}, {new: true}, (err, response) => {
            if (err) {
                console.log('error:', err)
                res.end()
            } else {
                res.send(response)
            }
        })
    }   
})


module.exports = app;