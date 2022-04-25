const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http")
const server = "http://localhost:3000"
chai.should()
chai.use(chaiHttp);

describe("Task ONG", ()=>{

  describe("Get /organization/public", ()=>{

    it("It should GET organization data", (done)=>{
      chai.request(server)
        .get("/organization/public")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          response.body.should.have.property("organization");
          done();
        })
    })

    it("It should NOT GET organization data", (done)=>{
      chai.request(server)
        .get("/organization")
        .end((err, response) => {
          response.should.have.status(404);
        done();
        })
    })


    

  })
})
