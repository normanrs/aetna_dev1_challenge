const app = require('../../server')
const supertest = require('supertest')

describe('Service location integration tests', () => {

    afterEach(async () => {
        await app.close();
    });

    test("GET /local returns data", async () => {
        const response = await supertest(app).get('/local/80003');
        expect(response.status).toEqual(200);
        expect(response.body).toHaveProperty('city');
    });

    test("GET /local returns ", async () => {
        process.env.openWeatherKey = ''
        const response = await supertest(app).get('/local/80003');
        expect(response.status).toEqual(401);
    });

});
