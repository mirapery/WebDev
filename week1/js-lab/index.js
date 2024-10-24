// Assigning a function to a variable

const add = function(a, b) {
    return a + b;
};

console.log(add(3, 5));

// Passing a function as an argument

const calculate = function(operation, a, b) {
    return operation(a, b);
};

const multiply = function(x, y) {
    return x * y;
};

console.log(calculate(multiply, 4, 6));

// Returning a function from another function

const powerOf = function(exponent) {
    return function(base) {
        return Math.pow(base, exponent);
    };
};

const square = powerOf(2);
const cube = powerOf(3);

console.log(square(5));
console.log(cube(3));

// Storing functions in arrays

const operations = [
    function(a, b) { return a + b; }, 
    function(a, b) { return a - b; }, 
    function(a, b) { return a * b; }
];

console.log(operations[0](5, 3));
console.log(operations[1](8, 4));

// Object properties as functions

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

// Arrow functions: basic syntax

const functionName = (parameters) => {
    // function body
    return result;
};

// Simple arrow function

const greet = name => {
    return `Hello, ${name}!`;
};

console.log(greet("Alice"));

// Arrow function with one parameter

const sqr = (num) => num * num;

console.log(sqr(5));

// Arrow function with no parameters

const getRandomNumber = () => Math.random();

console.log(getRandomNumber());

// Arrow function with multiple statements

const calculateSum = (a, b) => {
    const sum = a + b;
    return sum;
};

console.log(calculateSum(3, 7));

// Variables

// let
// - only available withing the block {} it is declared
// - hoisted, not initialized (can't access before declaration)
// - variable name cannot be re-used in the same scope

// const
// - block-scoped just like let
// - hoisted, not initialized
// - variable or name cannot be re-used


// ASSIGNMENT: restructure the following instances of code to work correclty

// 1.

let values = [10, 20, 30];

for(let i = 0; i < values.length; i++){
    console.log(values[i]);
}

// 2.

let lastLogin = '1/1/1970';

console.log(welcome('Charlie', 'Munger'));

function welcome(first, last) {
  return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
};