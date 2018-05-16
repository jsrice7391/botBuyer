// During the test the env variable is set to test
process.env.NODE_ENV = 'test'

const mongoose = require('mongoose')
const User = require('../models/User')
// Require the dev-dependencies
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')
const should = chai.should()
const expect = chai.expect

chai.use(chaiHttp)

describe('User', () => {
    beforeEach(done => {
        // Before each test we empty the database
        User.remove({}, err => {
            done()
        })
    })

    it('Should allow the creation of the user', done => {
        chai
            .request(server.app)
            .post("/auth/register")
            .send({
                username: "fake@aol.com",
                password: "password"
            })
            .end((err, res) => {
                expect(res).to.have.status(200)
                done()
            })
    })

    it("Should not allow the creation of a user", done => {
        chai.request(server.app)
            .post("/auth/register")
            .send({
                username: "brah",
                password: "password"
            })
            .end((err, res) => {
                expect(res).to.have.status(422);
                done();
            })
    });


});