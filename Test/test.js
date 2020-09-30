const { response } = require("express");
const { TestScheduler } = require("jest")
const request = require("supertest");
const app = require("../Server/app");
const mockPost = require('./mocks');
const mongoose = require('mongoose');



////////
test('0. Sample test should be equal', () => {
    expect(true).toBe(true)
})

describe(" Test the API requests", () => {
    var id = 0
    test("1. It should return a JSON with the designated properties",  () => {
        return request(app)  
        .get("/productID")
        .send({"productID": 1})// Sample ID
        .then(response => {
         expect(response.statusCode).toBe(200);
         response.body.forEach(review => {
             expect(review).toHaveProperty('_id')
             expect(review).toHaveProperty('updatedAt')
             expect(review).toHaveProperty('createdAt')
             expect(review).toHaveProperty('productID')
             expect(review).toHaveProperty('author')
             expect(review).toHaveProperty('title')
             expect(review).toHaveProperty('body')
             expect(review).toHaveProperty('no')
             expect(review).toHaveProperty('yes')
             expect(review).toHaveProperty('ratings')
         });
        })
    })
    test("2. It should POST a new Comment given an object with the right properties", () => {
        return request(app)
        .post('/productID')
        .send(mockPost())
        .then(response => {
            expect(response.statusCode).toBe(200);
            expect(response.text).toBe('post succesfull!!')
        })
    })
    test("3. Data should persist", () => {
        return request(app)
        .get("/productID/title")
        .send({"title": "Test title"})
        .then(response => {
            response.body.forEach(review => {
                id = review._id
                expect(review.productID).toBe(1)
                expect(review.author).toBe("Testy Testerson")
                expect(review.body).toBe("sample paragraph. efhoiwebfiweubfiweqbfqwnefqweoifnq;oeiwfbqeoinfeoiwhfejbf;iuwebfoiewbufeowufbewoubfeobfwebfoebfeouibflqieubfeiubf")
                expect(review.ratings).toEqual({
                    "Features": 4,
                    "Performance": 7,
                    "Design": 3,
                    "Value": 2
                })
            })
        })
    })
    test("4. Should patch the helpful yes or no ", () => {
        return request(app)
        .patch('/productID')
        .send({"updateValue": {
            "_id": id,
            "updateVal": "yes"
        }})
        .then(response => {
            expect(response.body.yes).toBe(1)
        })

    })
    test("5. Should delete all test inputs", () => {
        return request(app)
        .delete("/productID/title")
        .send({"title": "Test title"})
        .then(response => {
            expect(response.body.n).toBe(1)
        })
    })
});



afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.connection.close()
    done()
})