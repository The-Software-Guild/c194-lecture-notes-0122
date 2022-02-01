// notes.js

// JS runtime environment that executes JS code outside the browser

// one-way-fx's

// deterministic fx's 
// all fx's in js are deterministic
// JS has 1st class functions meanign we treat them just like variable:

// 1) pass fx's as arguments ot other fx's
// 2) fx's can be stored as values 
// 3) they give us a predictable output given a similar message (input)

// react components => pure functions but they also exhibit charecteristics of 1st class functions
// it must NOT try to interact or agument its inputs (props) => you can never trust or should never count on props as a means to set state or create new data

const someFx = () => {

}


// a singular file should export a singular component


const printIfTrue = (test) => {
     
     if (test) {
          console.log(true)
     } else {
          console.log(false)
     }
}

printIfTrue(!true) // false
printIfTrue(!false) // true

// module => reusable building block 

// 2. core modules

// 3. File based (internal)
// created by us with the purpose of absctracting and encapsulating reusable logic



// Object Oriented Programming (OOP)
// Model for how code should be written

// 4 pillars of object oriented programming:
// Abstraction - the removal and grouping together of shared logic
// Encapsulation - internalization of logic to a singular construct
//   => all logic for a specific construct(objects) is held within itself
//      and ONLY what is needed to be shared is exposed to a user

// Inheritance
// Polymorphisim


// const notesCalcFxs = require('./calc');

// console.log(notesCalcFxs.bool) 















