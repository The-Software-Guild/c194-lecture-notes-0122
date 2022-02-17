// notes.js

// When you use React, at a single point in time you can think of the 
// render() function as creating a tree of React elements. On the next 
// state or props update, that render() function will return a different 
// tree of React elements. React then needs to figure out how to efficiently 
// update the UI to match the most recent tree.

// tomorrow, wednesday + thursday
// jsx

const element = <h1>Hello, world!</h1>;
// This funny tag syntax is neither a string nor HTML.

// It is called JSX, and it is a syntax extension to JavaScript. We recommend 
// using it with React to describe what the UI should look like. JSX may remind 
// you of a template language, but it comes with the full power of JavaScript.

// JSX produces React “elements”. 

// React embraces the fact that rendering logic is inherently coupled with other UI 
// logic: how events are handled, how the state changes over time, and how the data is prepared for display.

// Instead of artificially separating technologies by putting markup and logic in 
// separate files, React separates concerns with loosely coupled units called “components” that contain both.

// state / class components
// if props allow us to pass data through our component tree then 
// state allows us to:
// keep track of any changes internally (a component keeps track of its own state)
// ex) our card needs to keep track of its own persisting adn changing data with an object called state

// anytime you use a derived class (a class that extends itself(inherits) from a base class
// in order to access the "this" keyword you need to call super
// super() when invoked from the derived class it is actually calling and nvoking the constructor
// method of its base class giving you all of the base class configuration


// component lifecycle
// components re-render when 2 things happen:
// anytime the state changes
// anytime your props are updated or you recieve new props
// anytime a component higher in the tree re-renders it re-renders all children components

// event handling

// binding of this in the constructo

// VDOM rendering and rerendering of components (more importantly of component hieracheries)

