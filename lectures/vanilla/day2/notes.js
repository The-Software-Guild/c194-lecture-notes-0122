// notes.js

// louse vs strict
// L => no constraints on type definitions 
// S => everything has a defined type 

// syntax
// name values & variables & expressions (camelCase), soThisiSAnExampleOfCamelCase, SCREAMING_CAMEL_CASE => constants/enviromental variables
// snake_case_this
// name directories, assets (imgs, fonts), repositories, etc. (kebab-case)

// iWillTypeThisOut    i-will-type-this-out

// anyTimeYouHaveANewWordYouUppercase
// constant value THIS_IS_A_CONSTANT

function thisIsHowWeNameThings(num1, num2) {

     return 'whatever';
};

thisIsHowWeNameThings(3, 5); // expected outcome 

// values

// primitives

// 7

// new Number = // (WE DO NOT USE NEW CONSTUCTOR SYNTAX FOR VALUES)
// 7 // this is a number literal

// new String
// 'string' // this is a string literal

// new Boolean
// true && false  // these are boolean literals

// undefined
// null


// complex

// objects [date, patterns, fxs]
// in JS group us realted code often describing in more detail a singular thing
{ } // this is an object literal
// const person = {
//      name: 'patrick',
//      location: 'BK',
//      hungry: true,
//      speak: () => {
//           console.log('My name is ' + this.name + ' and I live in ' + this.location)
//      }
// }
// method style fx invocation
// objectReciever.nameOfTheMethod()
// person.speak() // patrick BK

// fx's are reusable pieces of code that act like factories
// take in things called arguments and they return us out singular things

function exampleFx(parameter1, parameter2) {
     // this part does some stuff usually interacting with the parameters in some way
     // maybe does some more stuff
     // parameter1()
     // guess what? more stuff here

     const result = parameter1 + parameter2

     return result
}

// const exampleReult = exampleFx(exampleArrowFx, 3) // 5
// exampleFx(7, 3) // 10
// exampleFx(5, 4) // 9
// console.log(exampleReult)

// console.log(exampleFx) // the value of the fx itself used to pass the fx around (aka reuse it)
// console.log(exampleFx(3, 5)) // 8

const exampleArrowFx = (cb) => {
     // some stuff

     return cb

     const example = 6
}

// fx style
// nameOfFx()

// method style
// objectReciever.methodName()

// constructor style
// new NameOfConstructor
// new Boolean

// comments

// // serialization and deserialization of JSON
// [Object: object]

// JSON.parse()
// JSON.stringify()

// naming all JS code things camelCase EXCEPT_FOR_CONSTANTS
// kebab-case

// valuse
// primitive & complex

// use literals to declare primitive values
// 7, true, {}

// objects & functions
// objects are ways to group similar code and in general describe ONE thing in more detail

// properties => describe the thing in more detial
// key: value
// name: 'patrick'
var exampleVar2 = 4
var person = {
     name: 'patrick',
     location: 'BK',
     hungry: true,
     speak: () => {
          console.log(`My name is ${this.name} and I live in ${this.location} something else ${exampleVar2}`)
     } // annonymous function => also example of an es6 arrow function
}

// arrow functions do NOT have a lexical scoping of the this keyword
// this within an arrow function does NOT refer to what this in a named function refers to it refers to one scope step above
// to fix this we can use one of two functional programming methods
// .bind() .apply() => these methods allow you to attach a reference to anything declarativetively

// react and js are declarative
// declarative vs imperative
// declarative 
// walk out my apartment head north to atlantic ave A train
// ride A train manahttan side until penn station
// get off penn station exit NW corner
// walk .6miles east to madison ave

// ruby and rails 
// imperative
// You need to get on the a train to penn and wlak to the met its only like a half mile


// tagged temperate litterals
// enterpolate JS inline
// use backticks and a ${} paradaigm
// ${javascriptStuff}


// console.log(person) // the object itself with all containing proeprties and value

// access object properties via object dot notation
// objectReciever.propertyName

// console.log(person.name) // patrick
// console.log(person.location) //
// console.log(person.speak()) //

// [Function: speak]
// [Object: object] JSON.parse(), JSON.stringify()


// resusable pieces of logic that do something for us in a repetable & predictable fashion
// named function decleration
function nameOfFunction(parameter1, param2, moreParams) {
     // some stuff happens

     return parameter1 + ' new stuff'
}

// invoke functions
// nameOfFunction() // fx style

// objectReciever.nameOfMethod() // method style
// // briefly showed what a method was which is a fx that enacts itself on a specific object

// var iAmJustStoringTheNewlyCreatedInstanceHere = new ConstructorFunctionExample // constructor style

// es6 version of a function
var arrowFunctionExample = () => {
     // some stuff

     return whatever
}

// more function stuff (scoping, closure, expressions)

// closure is created upon function decleration
// closure is the space created between the two initial curly brances of a function
// closure ultimately determins the scope of a function


// function scopeFx() {
//      // console.log(insideVar) // 

//      const insideScope = () => {
//           let insideVar = 'inside'
//           console.log('line 205 insideScope')
//      }

//      insideScope() // 
// } // the scope that is created between a named function's closure is called a block

// scopeFx() //

// undefined
// line 205 inside scope

// 3 types of scope
// Block scope
// Function scope
// Global scope

// variables are NOT values they point to values
// variables are created with a variable decleration
// syntax is the keyword nameOfVar

// let letExample = 'this is let example' // block scoped (fx scoped)
// const constExample = 'this is const example' // block scoped (fx scoped)

function scopeFx() {

     console.log(varExample)

}

// const varExample = 'this is a value' // global scope
// varExample = 5
// const someObect = {}
// varExample = someObect
// someObect = 5

// console.log(varExample)
// console.log(someObect)

// ECMAscript6
// es6
// syntactical sugar
// es6 is merely NEW syntax for current functionality that 
// contains slight idiosynchrasies aimed at improvement

// let & const are es6 syntactical sugar for variable declerations using the var keyword




// hoisting of those things we are going to be learning
// scoping of those things 
// var, let, const are scoped differently
// named fx, arrowfx, constuctor fx, class, announs fx or a expression are all 
// hoisted differently and present different scope








// no other types (typeof, array)
// const helloWorld = () => {

// }

// console.log(typeof(helloWorld)) // fx
// console.log(typeof(7)) //

// console.log(typeof(/(hello|goodbye)/)); // object
// console.log(typeof(new Date())); // object
// console.log(typeof(NaN)) // unintentionally missing number

// console.log(7 === 7)
// console.log(NaN === NaN)
// console.log(0 === -0)






























/* function helloWorld() {
     const someVariable = 'some more stuff' 
}; */

// console.log('example I can havsdasjdaskdnaslkdaslkd laskdkasmdlkasmdlkasldkasmldkmaslkc') 




var exampleFruit = 'banana'
exampleFruit = 'apple'

// console.log(exampleFruit) // apple

// var, let, const

// scope, hoisting, reassignment


// arrays
// our first data structure 
// arrays in JS behave the exact same as they do in all other laguage
// if objects describe us a singular thing in more detail {}
// arrays group similar things []

// transversable =. given a specific unit of mesaurement you can 
// acurately predict and move between any of the other units of measurement
// in a predictable and consistent way

// const person = {
//      name: 'patrick',
//      interests: {
//           oneThing: {},
//           secondThing: {},
//      },
//      dogs: ['fiji', 'rajah']
// }

const car1 = {
     type: 'bmw'
}

const car2 = {
     type: 'jaguar'
}

let people = []

// indexing
// indicies = specific location assigned a number value within the array
// start counting from the left at position 0
// arrays in JS are zero indexed
//            0       1   2   3      4                    5
let cars = [car1, car2, 5, false, {newProperty: 'yes'}, []]


// we access array values by indexing into the array via bvracket notation
// nameOfArray[numberOfIndicie]
// cars[0] 
// console.log(cars[0]) // car1 ===object on 352
// console.log(cars[2]) // car1 ===object on 352
// console.log(cars[3]) // car1 ===object on 352
console.log(typeof([])); // object


