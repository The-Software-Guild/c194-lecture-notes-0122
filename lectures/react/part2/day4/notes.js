// notes.js

// equality


// Object.is(a, b) // tells if a and b are the same value
// console.log(Object.is(true, false)) // false
// console.log(Object.is(2, 2)) // true
// console.log(Object.is({}, {})) // false 
// console.log(Object.is([], [])) // false

// By this point, you might be worried about objects. 
// You might have heard that equality doesn’t work with objects, 
// or that it compares “references”.
// pass by reference value model

let dwarves = 7;
let continents = '7';
let worldWonders = 3 + 4;

// console.log(Object.is(dwarves, worldWonders)); // true
// console.log(dwarves === worldWonders); // true

// console.log({} === {}) // false
// console.log(3 === 3); // true
// console.log(NaN === NaN); // false
// console.log(Object.is(NaN, NaN)); // true
// console.log(Object.is(-0, 0)); // false
// console.log(-0 === 0); // true


let banana = {};
let cherry = banana;
let chocolate = cherry;
cherry = {};

// console.log(Object.is(banana, cherry)); // false 
// console.log(Object.is(cherry, chocolate)); //  false
// console.log(Object.is(chocolate, banana)); // true



// loose
// console.log([[]] == ''); // true
// console.log(true == [1]); // true
// console.log(false == [0]); // true
