const { add, substract } = require('./math');
console.log(add(5, 3));
console.log(substract(5, 3));

// const capitalize = require('./utility');
// console.log(capitalize('hello'));

const library = require('./library');
library.func1();
library.func2();

const { getRandomNumber, greet, capitalize} = require('./utilities');
console.log(getRandomNumber(1, 100));
console.log(greet('Alice'));
console.log(capitalize('hello'));