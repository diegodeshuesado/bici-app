const request = require('supertest');
const app = require('../server'); // Asegúrate de que la ruta sea correcta

describe('GET /', () => {
    it('should return 200 OK', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Conexión exitosa');
    });
});