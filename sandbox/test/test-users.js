// test-users.js
const chai = require('chai');
const chaiHttp = require('chai-http'); // allows you to make http req and recieve responses from your test code

const server = require('../server');

const should = chai.should();

chai.use(chaiHttp);

// Test the /GET Users route
describe('/GET users', () => {
     it('it should GET all the users', (done) => {
          chai.request(server)
               .get('/users')
               .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    
                    done();
               });
     });
});




