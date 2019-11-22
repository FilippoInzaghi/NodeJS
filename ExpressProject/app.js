const express = require('express');

const app = express();

app.listen(3000, () =>{
    console.log("Server is listening at htttp://localhost:3000");
});

// app.get('/', (req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
//     console.log("Hello Traveler");
//     console.log(req.hostname);
//     console.log(req.ip);
//     console.log(req.originalUrl);
//     console.log(req.url);
//     console.log(req.protocol);
//     console.log(req.secure);
//     res.write("<p>Maly header</p>")
//     res.end("<h1>Witaj na stronie</h1>")
// });
// app.get('/Hi', (req, res) => {
//     console.log("Hello Traveler");
//     console.log(req.hostname);
//     console.log(req.ip);
//     console.log(req.originalUrl);
//     console.log(req.url);
//     res.end("<h1>Witaj na stronie Hi</h1>")
// });

// app.all('/', (req, res) => {
//     console.log(req.query);
//     console.log(req.get('Cookies'));
//     res.write("<p>Maly header</p>")
//     res.end("<h1>Witaj na stronie</h1>")
// })

app.get('/', (req) => {
    console.log('Spis ludzi');
});

app.get('/:id', req => {
    console.log('Szczegółowa informacja o ID 1');
});

app.post('/', req => {
    console.log('Dodawania nowej osoby')
});

app.patch('/1', req => {
    console.log('Aktualizacja osoby o ID 1');
})

app.delete('/1', req => {
    console.log('Usunięcie osoby o ID 1');
})

app.get('/hello/new-user', req => {
    console.log("Dodawanie nowego uzytkownika2");
})

app.get('/hello/:name', (req, res) => {
    console.log(req.params);
    res.end("<h1>Witaj na stronie</h1>")
})

