const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const greet = (name) => `Hello, ${name}!`;
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

module.exports = { getRandomNumber, greet, capitalize };