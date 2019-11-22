const http = require('http');
const fs = require('fs');
const path = require('path')

const port = process.env.PORT || 3000;

const users = [
    {name: "Adam", id: 1},
    {name: "Ewa", id: 2},
    {name: "Kain", id: 3},
    {name: "Abel", id: 4},
]

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    switch(req.url){
        case '/':
            fs.readFile(path.join(__dirname, "index.html"), 'utf-8', (err, file) => {
                if (err) res.end("<h1>Nie udało się wczytać pliku</h1>")
                else res.end(file)
            })
            break;
        case '/users':
            fs.readFile(path.join(__dirname, "users.html"), 'utf-8', (err, file) => {
                if (err) res.end("<h1>Nie udało się wczytać pliku</h1>")
                else res.end(file)
            })
            break;
        case '/api/users':
            res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
            const usersJSON = JSON.stringify(users);
            res.end(usersJSON);
            break;  
        case '/code.js':
            res.writeHead(200, {'Content-Type': 'application/javascript; charset=utf-8'});
            fs.readFile(path.join(__dirname, "code.js"), 'utf-8', (err, file) => {
                if (err) res.end("<h1>Nie udało się wczytać pliku</h1>")
                else res.end(file)
            })
            break;  
        default: 
            res.end("<h1>Strona nie istnieje</h1>")              
    }

});

server.listen(port, '127.0.0.1', () => {
    console.log(`Nasz server nasłuchuje na porcie ${port}`)
})