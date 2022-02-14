# C194 Week 2 React Lecture 4

Learnign goals for react week day 4 => Today we leave the introductory part of the course behind us and begin React, one of the most popular and powerfull front end javascript frameworks. We first touch on a few vanilla JS concepts to prepare us. Where ever we make it to today will be our starting point for Monday.

## Agenda

    1) Vanilla DOM Tree
    2) Constructor Functions & Classes
    3) Event Handling   

### 1. Vanilla DOM Tree

#### **The Document Object**

*_main.js_

#### **Intro To The DOM**

The DOM (Document Object Model) is a object that represents the HTML and CSS of a web page. The DOM allows us to use JavaScript to interface with what the user sees.

There are a few ways to select elements from the DOM.

    document.getElementById()

    document.getElementsByClassName()

    document.querySelector()

Notice the "s" on elements in getElementsByClassName. **Any DOM method with the plural elements will return an array.** You are able to loop over each element, or select an individual element with bracket notation.

    document.createElement() takes a string of the tag name you want to create. It then returns the element.

The most common way to append this to the DOM is to first select the parent, and call it's .appendChild.

You may be asking why we wouldn't just write this in our HTML.

JavaScript helps us dynamically render our apps. We'll be using JavaScript to get us dynamic data, and then change how the webpage looks depending.

If a user wanted to take things from a list, or add to a list, we would use JavaScript to control that.

Much of your DOM manipulation will happen after the user does something. To make the user able to change what they see, you'll need to learn to use [event listeners](https://coursework.vschool.io/event-listeners/)

### 2. Constructor Functions & Classes

Sometimes we need a "blueprint" for creating many objects of the same "type".

The way to create an "object type", is to use an object constructor function.

Objects of the same type are created by calling the constructor function with the new keyword:

```javascript
const myFather = new Person("John", "Doe", 50, "blue");

const myMother = new Person("Sally", "Rally", 48, "green");
```

#### **The this Keyword**

In JavaScript, the thing called _**this**_ is the object that "owns" the code.

The value of _**this**_, when used in an object, is the object itself.

In a constructor function _**this**_ does not have a value. It is a substitute for the new object. The value of _**this**_ will become the new object when a new object is created.

#### **Built-in JavaScript Constructors**

#### **Classes**

Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.

One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class ("Rectangle" here).

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

An important difference between function declarations and class declarations is that **function declarations are hoisted and class declarations are not**. You first need to declare your class and then access it

#### **Strict Mode**

The body of a class is executed in strict mode, i.e., code written here is subject to stricter syntax for increased performance, some otherwise silent errors will be thrown, and certain keywords are reserved for future versions of ECMAScript.

##### **constructor()**

The constructor method is a special method of a class for creating and initializing an object of that class.

    A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.

If you don't provide your own constructor, then a default constructor will be supplied for you. If your class is a base class, the default constructor is empty:

```Javascript
constructor()
```

If your class is a derived class, the default constructor calls the parent constructor, passing along any arguments that were provided:

```Javascript
constructor(...args) {
    super(...args)
}
```

- args for us are what we use to pass information between components ... aka props!

There can be only one special method with the name "constructor" in a class. Having more than one occurrence of a constructor method in a class will throw a SyntaxError error.

    A constructor can use the super keyword to call the constructor of the super class.

#### **Static Methods & Properties**

The static keyword defines a static method or property for a class. Static members (properties and methods) are called without instantiating their class and cannot be called through a class instance. Static methods are often used to create utility functions for an application, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

### 3. Event Handling

#### **Vanilla**

[Events](https://www.w3schools.com/js/js_htmldom_events.asp)

[Event Bubbling & Propogation](https://frontend.turing.edu/lessons/module-1/js-event-bubbling-and-delegation.html?ads_cmpid=6451354298&ads_adid=76255849919&ads_matchtype=&ads_network=g&ads_creative=517671727591&utm_term=&ads_targetid=dsa-19959388920&utm_campaign=&utm_source=adwords&utm_medium=ppc&ttv=2&gclid=Cj0KCQiA2NaNBhDvARIsAEw55hieoAUdHrTB1xeeLjD-Rvux_Q_bTvW1P_CjVQC5fqlDYXiOq4VqauIaAnwVEALw_wcB)

[addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
