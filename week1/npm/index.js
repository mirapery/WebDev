const _ = require('lodash');

const numbers = [33, 47, 55, 78];

_.each(numbers, function(number, i){
    console.log(number);
});