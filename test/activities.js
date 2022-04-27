const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI1LCJyb2xlSWQiOjEsImlhdCI6MTY1MDkyMjIyNCwiZXhwIjoxNjUxMDA4NjI0fQ.cXzKVKxt2DXPkfy9KTjSBcuBLDH8MktEEhF1bYi2YpM"

chai.use(chaiHttp);
chai.should();

describe('Test ONG Somos', () => {
  describe('POST /activities', () => {
    it('It should POST a new activities', (done) => {
      const newActivity = {
        name: 'actividad',
        content: 'activividad numero 1',
        image: 'imagen1.jpg'
      };

      chai
        .request(server)
        .post('/activities')
        .set('authorization', token)
        .send(newActivity)
        .end((error, res) => {
          res.should.have.status(201);
          res.should.be.a('object');
          newActivity.should.have.property('name');
          newActivity.should.have.property('content');
          newActivity.should.have.property('image');
          done();
        });
    });

    it('It should NOT POST a new activitie', (done) => {
      const newActivity = {
        name: 1
      };
      chai
        .request(server)
        .post('/activities')
        .set('authorization', token)
        .send(newActivity)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.should.have.property('ok', false);
          done();
        });
    });

    it('It should NOT POST a new activitie without token authorization', (done) => {
      const newActivity = {
        name: 1
      };
      chai
        .request(server)
        .post('/activities')
        .set('authorization', token)
        .send(newActivity)
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          res.body.should.have.property('auth').eq(false);
          res.body.should.have
            .property('message')
            .eq('No token provided');
          done();
        });
    });
  });

  describe('PUT /activities/:id', () => {
    it('It should PUT a new activities', (done) => {
      const activitiId = 1;
      const newActivity = {
        name: 'actividad actualizada',
        content: 'activividad numero 2',
        image: 'imagen1.jpg'
      };

      chai
        .request(server)
        .put('/activities' + activitiId)
        .set('authorization', token)
        .send(newActivity)
        .end((error, res) => {
          res.should.have.status(201);
          res.should.be.a('object');
          newActivity.should.have.property('name');
          newActivity.should.have.property('content');
          newActivity.should.have.property('image');
          done();
        });
    });

    it('It should NOT PUT a new activitie', (done) => {
      const activitiId = 1;
      const newActivity = {
        name: 2
      };
      chai
        .request(server)
        .put('/activities' + activitiId)
        .set('authorization', token)
        .send(newActivity)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.should.have.property('ok', false);
          done();
        });
    });

    it('It should NOT PUT a new activities without token authorization', (done) => {
      const activitiId = 1;
      const newActivity = {
        name: 'Activitie test'
      };
      chai
        .request(server)
        .put('/activities' + activitiId)
        .send(newActivity)
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          res.body.should.have.property('auth').eq(false);
          res.body.should.have
            .property('message')
            .eq('No token provided');
          done();
        });
    });

    it('It should NOT PUT a new activitie if the ID does not exist', (done) => {
      const activitiId = 2;
      const newActivity = {
        name: 'Activitie test'
      };
      chai
        .request(server)
        .put('/activities' + activitiId)
        .set('authorization', token)
        .send(newActivity)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});


