// notes.js

// JS call stack
// synchnously from the top down
// LIFO (Last In First Out)
// single-threaded

function add(a, b) {
     return a + b
}

function average(a, b) {
     return (a + b) / 2
}

let x = average(10, 20)
// console.log(x)

// Node.js
// Non-blocking I/O async

// synch => happening one after another immedietly than async is 
// things happening and completing on their own time schedules not 
// worrying about the other thing

// callbacks
// a function that is passed into another function as an argument

// 4th polymorphism in JS is really hard to do because if you do it correctly then you actually sacrifice encapsulation

// This design pattern is a reminence of the functional deisgn patterns of js
// currying 
// everythgin is in a function

// call back fx
const printSomethingFx = (printThis) => {
     console.log(printThis)
}

// higher order function
const createPrintSuiteFx = (cb, thingToPrint, anotherThing) => {
     // console.log(thingToPrint) // banana
     // console.log(anotherThing) // 3
     // console.log(cb) // [Function: callbackFunctionExample]

     // console.log(fourthParam)

     thingToPrint = 'apple'

     cb(thingToPrint) // takes in argument called printThis
}

const printExample = 'banana'

let fourthParam

console.log(fourthParam)

HOFEx(printSomethingFx, printExample, 3) // banana, 3, [Function: callbackFunctionExample], apple


// HTTP Req/Res cycle






