// notes.js

// equality

// Object.is(a, b) // tells if a and b are the same value
// console.log(Object.is(true, false)) // 
// console.log(Object.is(2, 2)) // 
// console.log(Object.is({}, {})) // 

// By this point, you might be worried about objects. 
// You might have heard that equality doesn’t work with objects, 
// or that it compares “references”.
// pass by reference value model

let dwarves = 7;
let continents = '7';
let worldWonders = 3 + 4;

// console.log(Object.is(dwarves, worldWonders)); 
// console.log(dwarves === worldWonders); // 

// console.log({} === {}) // 
// console.log(3 === 3); // 
// console.log(NaN === NaN); // 
// console.log(Object.is(NaN, NaN)); // 
// console.log(Object.is(-0, 0)); // 
// console.log(-0 === 0); // 


let banana = {};
let cherry = banana;
let chocolate = cherry;
cherry = {};

// console.log(Object.is(banana, cherry)); // 
// console.log(Object.is(cherry, chocolate)); //  
// console.log(Object.is(chocolate, banana)); // 




// loose
// console.log([[]] == ''); // ?
// console.log(true == [1]); // ?
// console.log(false == [0]); // ?







