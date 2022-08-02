const express = require('express');
const initialFakeDb = require('../database/fakedb');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    try {
        return res.status(200).send({ message: 'Hello World!' });
    } catch (error) {
        return res.status(400).send({ error: error });
    }
});

app.post('/create_user', (req, res) => {
    try {
        const { email, password, name, phone, birth_date } = req.body;
        if (email == null || password == null || name == null)
            return res.status(400).send({ error: "Insuficient data" });

        const { users } = initialFakeDb;
        const current_user = {
            id: (Object.keys(users).length),
            email: email,
            name: name,
            password: password,
            phone: phone ? phone : null,
            birth_date: birth_date ? birth_date : null,
            status: 1
        };

        users.push(current_user);

        return res.status(200).send({ user: users });
    }
    catch (error) {
        return res.status(400).send({ error: error });
    }
});

app.get('/user', (req, res) => {
    try {
        const { users } = initialFakeDb;
        return res.status(200).send({ user: users });
    }
    catch (error) {
        return res.status(400).send({ error: error });
    }
});

app.post('/create_address', (req, res) => {
    try {
        const { country, state, city, address, complement } = req.body;
        if (country == null || state == null || city == null || address == null)
            return res.status(400).send({ error: "Insuficient data" });

        const adresses = initialFakeDb.address;
        const current_address = {
            id: (Object.keys(adresses).length),
            country: country,
            state: state,
            city: city,
            address: address,
            complement: complement ? complement : null,
        };
        adresses.push(current_address);
        return res.status(200).send({ address: adresses });
    }
    catch (error) {
        return res.status(400).send({ error: error });
    }
});

app.get('/address', (req, res) => {
    try {
        const { address } = initialFakeDb;
        return res.status(200).send({ address: address });
    }
    catch (error) {
        return res.status(400).send({ error: error });
    }
});

module.exports = app;