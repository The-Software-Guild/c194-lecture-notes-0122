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

// call back fx
const callbackFunctionExample = (printThis) => {
     console.log(printThis)
}

// higher order function
const HOFEx = (cb, thingToPrint, anotherThing) => {
     // console.log(thingToPrint) // banana
     // console.log(anotherThing) // 3
     // console.log(cb) // [Function: callbackFunctionExample]

     // console.log(fourthParam)

     thingToPrint = 'apple'

     // cb(thingToPrint) // takes in argument called printThis
}

const printExample = 'banana'

let fourthParam

console.log(fourthParam)

HOFEx(callbackFunctionExample, printExample, 3) // banana, 3, [Function: callbackFunctionExample], apple


// HTTP Req/Res cycle



// In computing, a stateless protocol is a communications protocol in which no session information is retained by the receiver, usually a server. 
// Relevant session data is sent to the receiver by the client in such a way that every packet of information transferred can be understood in isolation, 
// without context information from previous packets in the session. This property of stateless protocols makes them ideal in high volume applications, 
// increasing performance by removing server load caused by retention of session information.












// serialization
// JSON.stringify()

// // de-s
// JSON.parse()















// CRUD vs http verbs vs express methods that map directly to our HTTP 

// Create  ------>  POST       -> .post

// Read    ------>   GET       -> .get

// Update   ------>  PUT       -> .put

// Delete   ------>  DELETE    -> .delete

// REST



// resource operation = route path + HTTTP method




// endpoint = url + route path

// https://www.nike.com/w/air-force-1-5sj3y?vst=Air%20Force%201





















