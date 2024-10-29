// ACTIVITY: Refactoring regular functions to arrow functions

// 1

function sayHello() {
    return "Hello, world!";
}

const sayHello = () => "Hello, world!";

// 2

function double(x) {
    return x * 2;
}

const double = x => x * 2;

// 3

function add(x, y) {
    return x + y;
}

const add = (x, y) => x + y;

// 4

const person = {
    name: "Alice",
    sayHi: function() {
        return "Hi, " + this.name + "!";
    }
};

const person2 = {
    name: "Alice",
    sayHi: () => "Hi, " + this.name + "!"
};

// 5

const numbers = [1, 2, 3, 4, 5];
const doubled = [];

/*numbers.forEach(function(num) {
    doubled.push(num * 2);
});*/

numbers.forEach(num => doubled.push(num * 2));