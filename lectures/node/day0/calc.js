// calc.js

// DRY => dont repeat yourself
// single source of truth

// require / module.exports
// import / export => es6
// syntactic sugar


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
module.exports = {
    squaredFx: squaredFunction,
    anotherFx: anotherFunction,
    whatever: 'anything',
    numnum: 4,
    bool: false
} /// 


// console.log(squaredFunction)





// module.exports = {
//     key: value
// }