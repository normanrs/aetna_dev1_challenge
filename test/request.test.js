const app = require('../server')
const supertest = require('supertest')

afterEach(async () => {
    await app.close();
});

test("GET /local", async () => {
    const response = await supertest(app).get('/local/80003');
    expect(response.status).toEqual(200);
});

