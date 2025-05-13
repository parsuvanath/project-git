const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('responds with Hello from CI/CD Node.js App!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello from CI/CD Node.js App!');
  });
});

