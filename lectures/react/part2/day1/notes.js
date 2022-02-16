// notes.js

// today, tuesday 15th
// ReactDOM.render()

// SPA
// Single Page Applications

// components (class vs functional)
// props are attributes of components that allow us to
// transfer data from one component to another 
// parent to child, this is done where the component 
// is rendered and passed down through our hierarchy

// the below problem is called prop-drilling
// In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. 
// Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

// can ONLY render a singular node (child)
// the workaround for this is often to wrap children in a div
// this leads to a problem called wrapper hell
// the fix for this is to use react fragments (React.Fragment -or- <> </>)
// it allows for groupings of children without the unecesary addition of an extra DOM node (aka a div wrapper)

// props

// object destructuring (pull out property values and instantly assign them to local variables within a specific scope)
// rest parameters (spread operator)

// not descturing these from props object
// actually destructuring them from the props.restParameterExampleProp object
// {nestedObjectName: {nameOfPropToBeDestructured, nameOfPropToBeDestructured2}}

// afternoon assignment === react dvd library