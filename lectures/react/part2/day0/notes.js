// notes.js

// constructor functions and classes get hoisted differently 

// general
// react setup and conventions
// most working files live in the src
// public (build, public facing configurations)

// organization === do NOT want deeply nested things

// naming 
// components get capatilized in both declerations and file name


// React.js
// allows you to make complex UI for each state of your applciation
// rendering just the right compoents when your data changes

// react uses somethign called the virtual DOM 

// declarative & component-based
// component is the smallest unit of a reusable piece of a react application

// because react does not use a templating engine and instead uses
// JS that mena syou pass and mvoe data and information through the application
// instead of the DOM

// components are resuable building blocks of our apps
// they get rendered onto the screen at certain times
// they actually live in 3 differnt states
// first state (legos just sitting in a big box all together) 
// => they are in our components folder just existing

// second state (lego being placed and set into position) 
// => they are rendered to the screen (aka show to user)

// third state (lego being removed from its postion and put back into the box with all the others)
// => remove or unrender from the screen (aka remove from view of user)

// they exist but arent shown -> then they are shwon -> then they exist but arent shown


// import/export is es6 syntacitcal sugar for require/module.exports

// virtual DOM / reconcilliation
// keeps track of all component rendering/unrendering (mounting/unmounting)
// , state changes, and data updates and then batch updating changes to the DOM
// minimizes vanilla DOM interactions


// react components we are goign to treat like regualr old JS function
// because js has 1st class functions you can do all 3 of those things to react components

// there is actually only a singular rule of react:
// you must treat all react components like pure functions

// pure function is a function that:
// 1. never try to augment or interact with its inputs (parameter/argument) => props
// 2. must be predicatble (given the same inputs it should return the same output)

// a singular suggestion:
// a singular file should contain a singular component or at the very least only export a singular component
