const { TestScheduler } = require("jest")
const request = require("supertest");
const app = require("../Server/app");

test('Sample test should be equal', () => {
    expect(true).toBe(true)
})

