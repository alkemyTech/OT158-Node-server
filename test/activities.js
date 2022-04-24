const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
chai.use(chaiHttp);

chai.should();

  describe('POST /activities' , () => {

  it('It should POST a new activities', (done) => {
    let newActivity = {
      name: "actividad",
      content: "activividad numero 1"
    }

    chai.request(server)
    .post('/activities')
    .send(newActivity)
    .end((error, res) => {
      res.should.have.status(201);
      res.should.be.a('object');
      newActivity.should.have.property('name');
      newActivity.should.have.property('content');
    done();

    });
  });
});


