const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

app.listen(3000, () =>{
    console.log("Server is listening at htttp://localhost:3000");
});

app.use(express.json());

// app.use(express.static(
//     path.join(__dirname, 'static')
// ))

app.use(cookieParser())

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

// app.get('/', (req) => {
//     console.log('Spis ludzi');
// });

// app.get('/:id', req => {
//     console.log('Szczegółowa informacja o ID 1');
// });

// app.post('/', req => {
//     console.log('Dodawania nowej osoby')
// });

// app.patch('/1', req => {
//     console.log('Aktualizacja osoby o ID 1');
// })

// app.delete('/1', req => {
//     console.log('Usunięcie osoby o ID 1');
// })

// app.get('/hello/new-user', req => {
//     console.log("Dodawanie nowego uzytkownika2");
// })

// app.get('/hello/:name', (req, res) => {
//     console.log(req.params);
//     res.send('Hello on my Website!'.split(' '))
// })

// app.get('/', (req, res) => {
//     res.send('<a href="/go_back">Google</a>')
// })

// app.get('/go_back', (req, res) => {
//     res.redirect('https://google.com', 302)
//     // res.end('Jakiś napis')
// })

app.get('/', (req, res) => {



    // res.sendFile('index2.html', {
    //     root: path.join(__dirname, 'static')
    // })

    const {visitorName, visitorSurname} = req.cookies;

    if (visitorName){
        res.send(`Witaj ${visitorName}`)
    } else {
        res.send('Czy my się znamy???')
    }

    console.log(req.cookies);

    // res.send('Strona główna')
});

app.get('/logo', (req, res) => {
    const fileName = '3.png';
    res.sendFile(fileName, {
        root: path.join(__dirname, 'static'),
        lastModified: true,
        dotfiles: 'ignore'
    })
})

app.get('/download', (req, res) => {

    const fileName = path.join(__dirname, 'static/3.png')

    // res.attachment(path.join(__dirname, 'static/3.png'));
    res.download(fileName, 'Nowa nazwa pliku do ściągnięcia.png')
    // res.end()
})

app.get('/hi/:name/:surname', (req, res) => {

    const  {name, surname} = req.params;
    console.log(req.params);

    const date = new Date();

    date.setDate(date.getDate() + 7)


    res.cookie('visitorName', name, {'expires' : date, 'httpOnly': true});
    res.cookie('visitorSurname', surname);

    res.send(`Zapisano imię ${name} oraz nazwisko ${surname}`)
})

app.get('/logout', (req, res) => {
    res.clearCookie('visitorName');
    // res.redirect('/')

    res.send('Logged out');
})

app.post('/hello', (req, res) => {
    const {name, surname} = req.body;
    res.send(`Witaj, ${name} ${surname}`)
})