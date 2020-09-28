import express from 'express';
import db from './database/connection';

const routes = express.Router();

routes.post('/newUser', async (request, response) => {
    const {
        email,
        password
    } = request.body;

    await db('users').insert({
        email,
        password
    });

    return response.send();
});

export default routes;