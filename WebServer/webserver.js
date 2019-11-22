const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    if (req.url === '/'){
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end('<h1>Strona główna</h1>')
    }
   else if(req.url === '/images'){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end('<h1>To jest strona z obrazkami</h1>')
   } else{
    res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
    res.end('<h1>Error 404, podana strona nie istnieje</h1>')
   }

});

server.listen(port, '127.0.0.1', () => {
    console.log(`Nasz server nasłuchuje na porcie ${port}`)
})