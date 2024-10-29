// VARIABLES

let age = 25;
let year = 2019;

console.log(age, year);

age = 30;
console.log(age);

const points = 100;



// DATA TYPES
// - number
// - string
// - boolean
// - null
// - undefined
// - object
// - symbol
// variable can hold any data type


// strings
console.log('hello, world');
let email = 'mario@email.com';

// string concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';
let fullName = firstName + ' ' + lastName;

// getting characters
console.log(fullName[0]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
let index = email.indexOf('@');

result = email.lastIndexOf('n');
result = email.slice(0, 10);
result = email.substring(0, 10);
result = email.replace('m', 'w');
result = email.replace('n', 'w');


// numbers
let radius = 10;
const pi = 3.14;

// math operators (+ - * / ** %)
console.log(10 / 2);
result = radius % 3;
result = pi * radius**2;

// order of operations 
// sulut, korotus , jako, kerto, yhteen, vähennys
result = 5 * (10-3)**2;

// shorthand notations
let likes = 10;
likes = likes + 1;
likes++;
likes--;
likes += 10;

// NaN - not a number
console.log(5 / 'hello');

// concatenate numbers
result = 'the blog has ' + likes + ' likes';


// template strings
const title = 'Best reads of 2019';
const author = 'Mario';
likes = 30;

// concatenation way
result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';

// template string way / template literal
result = `The blog called ${title} by ${author} has ${likes} likes`;

// creating html templates
let htlm = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`;


// arrays
let ninjas = ['shaun', 'ryu', 'chun-li'];
ninjas[1] = 'ken';
console.log(ninjas[1]);

let random = ['shaun', 'crystal', 30 , 20];

// array methods
console.log(ninjas.length);
result = ninjas.join(',');
result = ninjas.indexOf('chun-li');
result = ninjas.concat(['ken', 'crystal']);
result = ninjas.push('michael');    // adds 1, returns the length
result = ninjas.pop();  // remove last value and return that value


// Null, Undefined
let newAge;
newAge = null;
console.log(age, age + 3, `the age is ${age}`);


// booleans & comparisons
console.log(true, false, 'true', 'false');

// methods can return booleans
result = email.includes('@');
result = ninjas.includes('luigi');

// comparison operators
age = 25;

console.log(age == 25);
console.log(age != 25);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);
console.log(age >= 25);

let name = 'shaun';

console.log(name == 'shaun');
console.log(name == 'Shaun');
console.log(name > 'crystal');  //aakkosjärjestys - myöhempi isompi
console.log(name > 'Shaun');    // lowercase is greater

// loose comparison (different types can still be equal)
console.log(age == 25);
console.log(age == '25');
console.log(age != 25);
console.log(age != '25');

// strict comparison (differenet types cannot be equal)
console.log(age === 25);
console.log(age === '25');
console.log(age !== 25);
console.log(age !== '25');


// type conversion
let score = '100';
console.log(score + 1); //1001

score = Number(score);
console.log(score + 1); //101

result = Number('hello');
result = String(50);

result = Boolean(100);      // positibe numner True
result = Boolean(0);        // minus true, 0 false

result = Boolean('0');      // string always true, empty string false

console.log(result, typeof result);


// functions

// function declaration
// - hoisted to the top of the file, can be called before declaration
function greet() {
    console.log('hello');
}

// function expression
// - hoisting does not work
const speak = function() {
    console.log('good day');
};

// call the function
greet();
greet();

speak();

// arguments and parameters
const call = function(name = 'default name') {
    console.log(`hey ${name}`);
};

call('mario');      // argument
call();

// returning values
const calcArea = function(radius) {
    return 3.14 * radius**2;
};

const area = calcArea(5);
console.log(area);


// regular function
const calcArea2 = function(radius) {
    return 3.14 * radius**2;
};

// arrow function
const calcArea3 = (radius) => {
    return 3.14 * radius**2;
};

// shorter arrow function
const calcArea4 = radius => 3.14 * radius**2;

const area2 = calcArea3(5);


// practise arrow functions

const bill = function(products, tax) {
    let total = 0;
    for(let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
}

const bill2 = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([10, 15, 30], 0.2));


// functions vs methods
const newName = 'shaun';

// functions
const greet4 = () => 'hello';
let resultOne = greet();

// methods
let resultTwo = newName.toUpperCase();


// callbacks & foreach

const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
};

myFunc(function(value) {
    // do something
    console.log(value);
});

// myFunc(value => {
//     // do something
//     console.log(value);
// });


let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`)
};

// people.forEach(function(person) {
//     console.log(person)
// });

people.forEach(logPerson);



// get a reference to the 'ul'
const ul = document.querySelector('.people');
const people2 = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
let html = ``;

people2.forEach(function(person) {
    // create html template
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;




// OBJECTS

// object literals

// const blogs = [
//     {title: 'title1', likes: 30},
//     {title: 'title2', likes: 50}
// ];

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@email.net',
    location: 'berlin',
    blogs: [
        {title: 'title1', likes: 30},
        {title: 'title2', likes: 50}
    ],
    login: function() {
        console.log('the user logged in')
    },
    logout: function() {
        console.log('the user logged out');
    },
    logBlogs() {
        //console.log(this.blogs);
        console.log('this user has written following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};

// console.log(user);
// console.log(user.name);

// user.age = 35;
// console.log(user.age);

// const key = 'location';

// console.log(user[key]);
// user['name'] = 'chun-li';
// console.log(user['name']);

// console.log(typeof user);

// const name6 = 'mario';
// name6.toUpperCase();

user.login();
user.logout();
user.logBlogs();


// math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const newArea = 7.7;
console.log(Math.round(newArea));
console.log(Math.floor(newArea));
console.log(Math.ceil(newArea));
console.log(Math.trunc(newArea));

// random numbers

const randomNumber = Math.random();
console.log(randomNumber);
console.log(Math.round(randomNumber));
console.log(Math.round(randomNumber * 100));



// primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values

const userOne = { name: 'ryu', age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 40;
console.log(userOne, userTwo);