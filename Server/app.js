const express = require('express')
const app = express()
const port = 3001
const Reviews = require('../database-mongodb/Review.js');

//GET//
app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/productID/', (req, res) => {
    var id = (req.body.id)
    Reviews.find({}, (err, data) => {
        if(err) {
            console.log(err)
        }
        console.log(data)
    })
    
    res.send('hello')
})

//POST//



//PATCH//



//OTHERS
app.listen(port, () => {
    console.log(`Reviews module server listening on http://localhost:${port}`)
})