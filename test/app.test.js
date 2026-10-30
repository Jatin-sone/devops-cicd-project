const request = require('supertest');
const app = require('../app');

describe('Backend API Tests', () => {

    test('Home API should work', async () => {
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200);
        expect(response.text).toContain('DevOps CI/CD');
    });

    test('Health API should work', async () => {
        const response = await request(app).get('/health');

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('healthy');
    });

});