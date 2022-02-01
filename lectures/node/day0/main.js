// main.js
const calcFxs = require('./calc').bool; // JS has first class functions

// inheritence
// prototypal inheritence
calcFxs.bool = true 


console.log(calcFxs) // entire object that I exported from my module.exports in the calc.js
console.log(calcFxs.bool) // true
console.log(calcFxs.squaredFunction) //  the entire function itself denoted with [Function: nameOfFunction]
console.log(calcFxs.squaredFx(3)) // 9








// node nameOfFile => hey node execute this file b/c it has JS in it and my computer cant do it







