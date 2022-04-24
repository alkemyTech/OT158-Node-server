const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const expect = require('chai').expect;
chai.use(chaiHttp);
const { Created } = require('../utils/status');

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
    .end((error, response) => {
      response.should.have.status(201);
      newActivity.should.have.property('id');
      newActivity.should.have.property('name');
      newActivity.should.have.property('content');
    done();

    });
  });
});


