// const url = 'http://numbersapi.com/2011/math?json';
// const fetch = require('node-fetch');

// // console.log(process.argv);

// // const year = process.argv[2] || 'random';

// // fetch(`http://numbersapi.com/${year}/year?json`)
// // .then(response => response.json())
// // .then(data => console.log(data.text))
// // .catch(err => console.log("Error", err))

// let type = ["year", "math", "trivia"][Math.floor(Math.random() * 3)];
// let number = Math.floor(Math.random() * 2020)
// const arg = process.argv[2];
// if (arg) {
//     const equalSign = arg.search('=');
//     if(equalSign === -1) return console.log("Nie wpisałeś liczby, do fetchowania weźmiemy defaultowe liczby");
//     number = arg.slice(equalSign+1);
//     if(arg.indexOf("--year") === 0){
//         type = "year";
//     } else if(arg.indexOf("--math")  === 0){
//         type = "math";
//     } else if(arg.indexOf("--trivia")  === 0){
//         type = "trivia";
//     };
// }

// if(isNaN(Number(number))){
//     number = Math.floor(Math.random() * 2020)
// }

// fetch(`http://numbersapi.com/${number}/${type}?json`)
// .then(resp => resp.json())
// .then(data => console.log(data.text))
// .catch(err => console.log(err))

// console.log("Szukamy imformacji o " + type, number)

//Zadanie 3 - NBP API - Request Method

const request = require("request");
const fs = require('fs');

const validCodes = ["usd", "eur", "gbp", "chf"];

const code = process.argv[2];

const isValid = Boolean(validCodes.find(currency => currency === code));

console.log(isValid);

const url = `http://api.nbp.pl/api/exchangerates/rates/a/${code}/?format=json`;

console.log(url);

request(url, { json: true }, (err, res, body) => {
    if (err){
        return console.log("Błąd: ", err);
    }
    console.log(res.statusCode);
    if (res.statusCode !== 200){
        return console.log("Check URL");
    }
    const message = `Avarage price of ${body.currency} on the day ${body.rates[0].effectiveDate} equals ${body.rates[0].mid} PLN`;

    fs.appendFile('currencies.txt', message + '\n', (err) => {
        console.log("Data added to the file");
    })

    console.log(message);
});
