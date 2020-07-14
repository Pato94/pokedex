const chai = require("chai")
const chaiHttp = require("chai-http")
const app = require("./index")

// Configure chai
chai.use(chaiHttp)
chai.should()

describe("Api works", () => {
    it("returns Venusaur when pokemon/3 is requested", (done) => {
        chai.request(app)
            .get("/pokemons/3")
            .end((err, res) => {
                res.should.have.status(200)
                done()
            })
    })

    it("/register works when correct parameters sent", (done) => {
        chai.request(app)
            .post("/register")
            .send({username: "pato", password: "secret"})
            .end((err, res) => {
                res.should.have.status(201)
                done()
            })
    })

    it("/register doesn't work when username is missing", (done) => {
        chai.request(app)
            .post("/register")
            .send({password: "secret"})
            .end((err, res) => {
                res.should.have.status(400)
                done()
            })
    })

    it("/register doesn't work when password is missing", (done) => {
        chai.request(app)
            .post("/register")
            .send({username: "secret"})
            .end((err, res) => {
                res.should.have.status(400)
                done()
            })
    })
})
