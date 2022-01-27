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
{} // this is an object literal
const person = {
     name: 'patrick',
     location: 'BK',
     hungry: true,
     speak: () => {
          console.log('My name is ' + this.name + ' and I live in ' + this.location)
     }
}
// method style fx invocation
// objectReciever.nameOfTheMethod()
person.speak() // patrick BK

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

// No Other Types

/* function helloWorld() {
     const someVariable = 'some more stuff' 
}; */

// console.log('example I can havsdasjdaskdnaslkdaslkd laskdkasmdlkasmdlkasldkasmldkmaslkc') 

// console.log(typeof(helloWorld)) // fx
// console.log([]) // 

// console.log(typeof(7)) //

// console.log(typeof([])); // object
// console.log(typeof(NaN)) // number
// console.log(typeof(new Date())); // object
// console.log(typeof(false)) // boolean
// console.log(typeof(/(hello|goodbye)/)); //



var exampleFruit = 'banana'
exampleFruit = 'apple'

// console.log(exampleFruit) // apple

// var, let, const

// scope, hoisting, reassignment






