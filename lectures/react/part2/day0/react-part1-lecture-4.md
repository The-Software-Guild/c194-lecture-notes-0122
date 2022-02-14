# C194 Week 3 React Lecture 0

Learnign goals for react week2 day 0 => 

## Agenda

    1) React Week 1 Day 4 Recap
    2) Introduction to React.js
    3) Events Revisted for React    

### 1. React Week 1 Day 4 Recap

- Vanilla DOM Tree
- Constructor Functions & Classes
- Event Handling

### 2. Introduction to React.js

REACT DEV TOOLS -> has everyone installed it? If not lets do that now

React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code **more predictable** and easier to debug.

React is component-based, meaning you can build **encapsulated** components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

- Setup

CRA and how everything is connected with ReactDom.render()

- Components

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

    2 types:

    1. Functional
    2. Class

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

- Props

When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.

**Props are Read-Only**

Whether you declare a component as a function or a class, it must never modify its own props.

    Functions are called “pure” because they do not attempt to change their inputs, and always return the same result for the same inputs.

React is pretty flexible but it has a single strict rule:

_**All React components must act like pure functions with respect to their props.**_

#### **State**

State is similar to props, but it is private and fully controlled by the component.

In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().

    Internal state alows for true encapsulation and reusability.

#### **Do Not Modify State Directly**

- Instead, use setState()

- The only place where you can assign this.state is the constructor.

- State Updates May Be Asynchronous

*React may batch multiple setState() calls into a single update for performance. Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.

#### **A Simple Component**

React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.

#### **A Stateful Component**

In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().

In order to gain access to state or a components lifecycle method we must convert our functional component into a class. (you should always be writing components functional, until you need state or a lifecycle method and then convert it)

_example.see_assets_

#### **This**

You have to be careful about the meaning of _this_ in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.

This is not React-specific behavior; it is a part of how functions work in JavaScript. Generally, **if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method.**

If calling bind annoys you, there are two ways you can get around this. If you are using the experimental public class fields syntax, you can use class fields to correctly bind callbacks.

```Javascript
class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```

*This syntax is enabled by default in Create React App.

If you aren’t using class fields syntax, you can use an arrow function in the callback:

```Javascript
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}
```

The problem with this syntax is that a different callback is created each time the LoggingButton renders. In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering. We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem.

**_show binding of this in constructor_**

### 3. Event Handling

#### **In React**

Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:

- React events are named using camelCase, rather than lowercase.

- With JSX you pass a function as the event handler, rather than a string.

- You cannot return false to prevent default behavior in React. You must call preventDefault explicitly

- You generally don’t need to call addEventListener to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered.

- When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class.
