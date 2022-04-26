const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http")
const server = "http://localhost:3000"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI1LCJyb2xlSWQiOjEsImlhdCI6MTY1MDkyMjIyNCwiZXhwIjoxNjUxMDA4NjI0fQ.cXzKVKxt2DXPkfy9KTjSBcuBLDH8MktEEhF1bYi2YpM"

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
  })

  describe("PUT /organization/public/:id",()=>{

    it("It should PUT a new organization data", (done)=>{
      const ongId = 1;
      const dataUpdate ={
        name: "test 85",
        image:"a.jpg",
        address:"calle Elm 113",
        phone:1123456789,
        email:"ong@gmail.com",
        welcomeText:"Welcome Text example"
      };
      chai.request(server)
        .put("/organization/public/" + ongId)
        .set("authorization",  token)
        .send(dataUpdate)
        .end((err,response)=>{
          response.should.have.status(200);
          response.body.should.be.a("object");
          response.body.should.have.property("name");
          response.body.should.have.property("image");
          response.body.should.have.property("address");
          response.body.should.have.property("phone");
          response.body.should.have.property("email");
          response.body.should.have.property("deletedAt");
          response.body.should.have.property("welcomeText");
          response.body.should.have.property("aboutUsText");
          response.body.should.have.property("facebookUrl");
          response.body.should.have.property("linkedinUrl");
          response.body.should.have.property("instagramUrl");
          response.body.should.have.property("createdAt");
          response.body.should.have.property("updatedAt");
          done()
        })



    });

    it("It should NOT PUT a new organization data", (done)=>{
      const ongId = 1;
      const dataUpdate ={
        name: 1,
      };
      chai.request(server)
        .put("/organization/public/" + ongId)
        .set("authorization",  token)
        .send(dataUpdate)
        .end((err,response)=>{
          response.should.have.status(400);
          response.body.should.be.a("object");
          response.should.have.property("ok", false)
          done()
        })



    });

    it("It should NOT PUT a new organization data without token authorization", (done)=>{
      const ongId = 1;
      const dataUpdate ={
        name: "Ong test",
      };
      chai.request(server)
        .put("/organization/public/" + ongId)
        .send(dataUpdate)
        .end((err,response)=>{
          response.should.have.status(401);
          response.body.should.be.a("object");
          response.body.should.have.property("auth").eq(false)
          response.body.should.have.property("message").eq("No token provided")
          done()
        })
    })

  })
})
