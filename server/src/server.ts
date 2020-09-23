import express from 'express';

const app = express();

app.get('/', (request, response) => {
    console.log("Hello - /");
    return response.send("Planet-Builder");
});

app.get('/users', (request, response) => {
    console.log("Hello - /users");
    const users = [
        {
            name: "batatinha@gmail.com",
            password: "1234",
        }
    ]

    return response.send(users);
});

app.get('/planets', (request, response) => {
    console.log("Hello - /planets");
    const planets = [
        {
            name: "Saturn",
            galaxy: "Milky Way",
            size: "36.184 mi",
            color: "yellowish-brown",
            age: "4,503 × 10^9",
            temperature: "-178",
        }
    ]

    return response.send(planets);
});

app.listen(3333);