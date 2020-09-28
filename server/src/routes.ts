import express from 'express';
import db from './database/connection';
import { PlanetProps, UserProps } from './types';

const routes = express.Router();

routes.get('/login', async (request, response) => {
    try{
        const user: UserProps = request.body;

        const userDB = await db('users')
            .where(user)
            .select('*');

        return response.status(200).send(userDB);
    } catch(e){
        return response.status(400).send(e);
    }
});

routes.get('/planets', async (request, response) => {
    try{
        const planets = await db('planets')
            .select('id', 'name', 'galaxy', 'color')
            .where({ active: true });

        return response.status(200).send(planets);
    } catch(e){
        return response.status(400).send(e);
    }
});

routes.get('/planet', async (request, response) => {
    try{
        const { id } = request.body;

        const planet = await db('planets')
            .where({ id })
            .select('*');

        if(planet.length > 0){
            return response.status(200).send(planet[0]);
        } else {
            return response.status(400).send();
        }
    } catch(e){
        return response.status(400).send(e);
    }
});

routes.post('/newUser', async (request, response) => {
    try{
        const requestUser: UserProps = request.body;

        const dbUser = await db('users')
            .insert(requestUser);

        return response.status(200).send(dbUser);
    } catch(e){
        return response.status(400).send(e);
    }
});

routes.post('/newPlanet', async (request, response) => {
    try{
        const requestPlanet: PlanetProps = request.body;

        const dbPlanet = await db('planets')
            .insert(requestPlanet);

        return response.status(200).send(dbPlanet);
    } catch(e){
        return response.status(400).send(e);
    }
});

routes.put('/deletePlanet', async (request, response) => {
    try{
        const { id } = request.body;

        await db('planets').where({ id })
            .update({ active: false });

        return response.status(200).send();
    } catch(e){
        return response.status(400).send(e);
    }
});

export default routes;