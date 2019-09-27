// const add = (x, y, z) => x + y + z;
// const division = (number1, number2) => number1 / number2;
// const math = (callback, ...args) => {
//     console.log(callback(...args))
// }

// math(division, 3, 5);
// math(add, 5, 11, 15);

// setTimeout(() => math(add, 5, 11, 15), 2000);

const fs = require('fs');

fs.readFile('./text.txt', 'utf8', (error, file) => console.log(file));
console.log("po odczytaniu")

