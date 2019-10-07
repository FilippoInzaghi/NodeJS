const http = require('http');
const colors = require('colors');

const server = http.createServer((request, response) => {
    console.log("URL:", request.url, "\n", "METHOD:", request.method, "\n", "HEADERS:", request.headers);
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>First paragraph</h1>');
    response.end('<h1>Hello Node</h1>')
});
server.listen(5500, '127.0.0.1', () => {
    console.log("&c Information with CSS transform", 'color: orange; font-weight: bold')
    console.log("Server started");
});

console.log("Witaj".blue)