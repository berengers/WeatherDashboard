const request = require('supertest');
const app = require('../app'); // our Node application


describe('Login', () => {
 it('succeeds with correct credentials', async () => {
   const demoUser = { email: 'tom@gmail.com' }
   const response = await post(`/api/city`)
     .expect(200);

     console.log('response ---->', response)
    // expect(res.body.user.email).toBe(demoUser.email);
  })
})
// a helper function to make a POST request

function post(url, body){
  const httpRequest = request(app).get(url);
  httpRequest.send(body);
  httpRequest.set('x-authenticate', 'tom_token')
  httpRequest.set('Accept', 'application/json')
  httpRequest.set('Origin', 'http://localhost:4000')
  return httpRequest;
}