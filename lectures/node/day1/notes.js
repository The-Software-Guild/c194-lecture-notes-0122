// notes.js

// callback fx's

const cb = (num1cb, num2cb) => {
     console.log(num1cb + num2cb)
} // a fx that is passed into another function as an argument but not constrained to that paradiam

// cb(3, 4) // 7

const higherOrderFunction = (callback, num1, num2) => {
     // parameters act as local variables within a givin block scope
     // const something = 'whatever'
     // console.log(arguments[1]) // the keyword arguments is an array like object that contains all arguments passed in to the fx invocation

     callback(num1, num2)
} // output to the console two numbers added together



higherOrderFunction(cb, 2, 3, true, 8, 'string') // 5

// arguments in JS are arbitrary meaning... 

// a block of code is the area created by the curly braces within a function expression

// arrow fx's do NOT have their own lesxical scope and therefore the keyword this does NOT refer to the fx itself when used inside of an arrow fxs block

// the term scope refers to the availability fo variables 
// local, global, block/function scoped

// var, let, const => hoisting, reasignments, scoping
// var - global
// let, const - specific to the declaration location 

function closureExample() {
     console.log(name)
     
     function insideFx() {
          var name = 'patrick'
          console.log('inside')
     }

     insideFx()
}

closureExample() // 

// hoisting => is when certain variable or fx declerations are brought to the top of their current scope and written into memory there

// js single threaded LIFO => store and youa re using the cashier to checkout

// 3, 2, 1

// Node non-blocking i/o async

// authentication
// server => a bunch of code whose job is to handle req and illicit res
// api -> is the rules for hanlding the req/res



// In computing, a stateless protocol is a communications protocol in which no session information is retained by the receiver, usually a server. 
// Relevant session data is sent to the receiver by the client in such a way that every packet of information transferred can be understood in isolation, 
// without context information from previous packets in the session. This property of stateless protocols makes them ideal in high volume applications, 
// increasing performance by removing server load caused by retention of session information.



// state of the union 
// state of a molecul
// state of a react class 



// current changes of the applciation
// statefull => it contains and knows about its own changes {persisting}
// stateless => does NOT know about its changes and does NOT keep track of any changes or anythign at all really


// 3 ways we can add state to a application === persist data 

//1
// cookies -> js/browser based
// localStorage/sessionStorage -> js/browser based


//2
// database -> external


// cookies are incredible small usually under 4kb
// can expire 

localStorage.

localStorage.setItem('key', 'value')
localStorage.removeItem('key')
const exampleStorage = localStorage.getItem()



// req <-> res HTTTP cycle 

// ****** streams are special node objects whichw e treat EXACTLY like js objects we are used to 

// req, res = {
//     body ={},
//     header ={},
//     payload ={}
// }

// const jsObjWeKnow = {
//     property: 'value',
//     anotherProp: function() {}
// }

// JSON 
// const jsonObj = {
//     "property": "value",
//     "anotherProperty": 'some value'
// } // must use double quotes for string named properties

// we can send req and repsonses as strings but if we need more complex data types like objects or arrays 
// we must wrap them in a JSON obj

// JSON.stringify()
// JSON.parse()



// crud vs http verbs vs express methods that map directly to our HTTP 

// create  ------>  POST       -> .post

// read    ------>   GET       -> .get

// update   ------>  PUT       -> .put

// delete   ------>  DELETE    -> .delete

// REST



// resource operation = route path + HTTTP method

