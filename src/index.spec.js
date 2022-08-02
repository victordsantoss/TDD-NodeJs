const app = require('./routes/server');
const request = require('supertest');

describe('Sample test', () => {
    it('Should get main route', async () => {
        const res = await request(app).get('/');
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('message');
    });

    it('should create a user', async () => {
        const res = await request(app)
            .post('/create_user')
            .send({
                name: "name test",
                email: "email@test.com",
                password: "12345"
            });
        expect(res.status).toBe(200);
        expect(res.body.user[1]).toStrictEqual({
            id: 1,
            name: "name test",
            email: "email@test.com",
            password: "12345",
            "phone": null,
            "birth_date": null,
            "status": 1
        });
    });

    it('should create a address', async () => {
        const res = await request(app)
            .post('/create_address')
            .send({
                "country": "Brasil",
                "state": "DF",
                "city": "Brasília",
                "address": "SBN Q 1 - Asa Norte, Brasília - DF",
            });
        expect(res.status).toBe(200);
        expect(res.body.address[1]).toStrictEqual({
            "id": 1,
            "country": "Brasil",
            "state": "DF",
            "city": "Brasília",
            "address": "SBN Q 1 - Asa Norte, Brasília - DF",
            "complement": null
        });
    });

    it('should get a user', async () => {
        const res = await request(app).get('/user');
        expect(res.status).toBe(200);
        expect(res.body.user[0]).toStrictEqual({
            "id": 0,
            "name": "Victor Samuel dos Santos Lucas",
            "email": "victor@gmail.com",
            "phone": "+5561900000000",
            "birth_date": "08-08-1999",
            "status": 1
        });
    });

    it('should get a address', async () => {
        const res = await request(app).get('/address');
        expect(res.status).toBe(200);
        expect(res.body.address[0]).toStrictEqual({
            "id": 0,
            "country": "Brasil",
            "state": "DF",
            "city": "Brasília",
            "address": "SBN Q 1 - Asa Norte, Brasília - DF",
            "complement": null
        });
    });
});

