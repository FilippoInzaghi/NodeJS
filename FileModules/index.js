const fs = require("fs");
// fs.access('./imiona.txt', fs.constants.W_OK, err => {
//     console.log(err);
// });

// try {
//     fs.renameSync('./names.txt', 'imiona.txt');
//     console.log("Success")
// } catch (err){
//     console.log(err)
// };

// fs.readFile('imiona.txt', 'utf8', (err, data) => {
//     if (err) return console.log("Nie udało się odczytać");
//     fs.writeFile('imiona2.txt', data, (err) => {
//         err ? console.log(err) : console.log("Succeded")
//     })
//  });


const names = "Jan, Jerzy";
fs.appendFile("imiona2.txt", names, err => {
  err ? console.log(err) : console.log("Succeded");
});
