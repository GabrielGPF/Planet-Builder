import express from 'express';
import routes from './routes';
// import { PlanetProps, UserProps } from './types';

const app = express();

app.use(express.json());

app.use(routes);

// app.get('/', (request, response) => {
//     console.log("Hello - /");
//     return response.send("Planet-Builder");
// });

// app.post('/newUser', (request, response) => {
//     console.log(request.body);

//     try {
//         if(request.body as UserProps){
//             return response.send("sucesso");
//         }
//     } catch (e) {
//         return response.send("fracasso");
//     }
// });

// app.post('/planets', (request, response) => {
//     console.log("Hello - /planets");
//     const planets: PlanetProps[] = [
//         {
//             name: "Saturn",
//             galaxy: "Milky Way",
//             color: "yellowish-brown",
//             size: 36.184,
//             age: 4.503,
//             temperature: -178,
//         }
//     ]

//     return response.send(planets);
// });

app.listen(3333);