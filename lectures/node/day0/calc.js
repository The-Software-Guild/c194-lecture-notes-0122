// calc.js

// modularization => abstraction + encapsulation

// DRY => dont repeat yourself
// single source of truth

// internal file based node modulariation syntax
// require / module.exports

// import / export => es6
// syntactic sugar


// let, const are es6 syntacicatical sugar of variable declerations
// import/export es6 syntactical sugar of reqire/module.exports

function squaredFunction(num) {
    return num * num;
};

function anotherFunction() {
    let someVar = 'hello'
    someVar = 'some other thing'
    
    return someVar;
};


// module.exports = {
//     nameOfFunction: actualFuncion
// }

let someVariable = 'test123'

module.exports = {
    squaredFunction: squaredFunction,
    anotherFx: anotherFunction,
    whatever: 'anything',
    num: 4,
    bool: false,
    anotherProperty: someVariable
} /// 


// console.log(squaredFunction)





// module.exports = {
//     key: value
// }