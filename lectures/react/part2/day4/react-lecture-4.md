# C165 Week 2 React Lecture 4

Learnign goals for react day 4 => Today we make room for the second assessment by finish of a few key react concepts including the reasoning for hooks. We also cover the third pillar of OOP, inheritance in JS. Object.is('ready', ready);

## Agenda

    1) Lifecycle Methods
    2) Hooks
    3) Consuming API’s with Axios
    4) The React Context API
    5) Prototypal Inheritance
    6) Equivalence in JS 

### 1. Lifecycle Methods

In applications with many components, it’s very important to free up resources taken by the components when they are destroyed.

We can declare special methods on the component class to run some code when a component mounts and unmounts.

These methods are called _“lifecycle methods”_.

The ```componentDidMount()``` method runs after the component output has been rendered to the DOM. While ```componentWillUnmount()``` should be used for cleanup of things as the component unmounts.

#### **Using State Correctly**

There are three things you should know about ```setState()```.

1. **Do not modify state directly**, instead use ```setState()```. The only place where you can assign this.state is the constructor.

2. **State updates may be asynchronous.** React may batch multiple setState() calls into a single update for performance. Because ```this.props``` and ```this.state``` may be updated asynchronously, you should not rely on their values for calculating the next state.

3. **State updates are merged**
When you call ```setState()```, React merges the object you provide into the current state.

#### **The Data Flows Down**

Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn’t care whether it is defined as a function or a class.

This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.

A component may choose to pass its state down as props to its child components:

```javascript
<FormattedDate date={this.state.date} />
```

This is commonly called a _“top-down”_ or _“unidirectional”_ data flow. Any state is always owned by some specific component, and any data or UI derived from that state can only affect components “below” them in the tree.

If you imagine a component tree as a waterfall of props, each component’s state is like an additional water source that joins it at an arbitrary point but also flows down.

### 2. Hooks

[Hooks are a new addition in React 16.8](https://www.youtube.com/watch?v=dpw9EHDh2bM). They let you use state and other React features without writing a class.

**No Breaking Changes**

Before we continue, note that Hooks are:

- **Completely opt-in.** You can try Hooks in a few components without rewriting any existing code. But you don’t have to learn or use Hooks right now if you don’t want to.

- **100% backwards-compatible.** Hooks don’t contain any breaking changes.

- **Available now.** Hooks are now available with the release of v16.8.0.

- **There are no plans to remove classes from React.** You can read more about the gradual adoption strategy for Hooks in the bottom section of this page.

**Hooks don’t replace your knowledge of React concepts.** Instead, Hooks provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle — hooks also offer a new powerful way to combine them.

#### **Motivation**

Hooks solve a wide variety of seemingly unconnected problems in React that we’ve encountered over five years of writing and maintaining tens of thousands of components. Whether you’re learning React, use it daily, or even prefer a different library with a similar component model, you might recognize some of these problems.

##### **It’s hard to reuse stateful logic between components**

React doesn’t offer a way to “attach” reusable behavior to a component (for example, connecting it to a store). If you’ve worked with React for a while, you may be familiar with patterns like render props and higher-order components that try to solve this. But these patterns require you to restructure your components when you use them, which can be cumbersome and make code harder to follow. If you look at a typical React application in React DevTools, you will likely find a “wrapper hell” of components surrounded by layers of providers, consumers, higher-order components, render props, and other abstractions. While we could filter them out in DevTools, this points to a deeper underlying problem: React needs a better primitive for sharing stateful logic.

With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. **Hooks allow you to reuse stateful logic without changing your component hierarchy.** This makes it easy to share Hooks among many components or with the community.

##### **Complex components become hard to understand**

We’ve often had to maintain components that started out simple but grew into an unmanageable mess of stateful logic and side effects. Each lifecycle method often contains a mix of unrelated logic. For example, components might perform some data fetching in ```componentDidMount``` and ```componentDidUpdate```. However, the same ```componentDidMount``` method might also contain some unrelated logic that sets up event listeners, with cleanup performed in ```componentWillUnmount```. Mutually related code that changes together gets split apart, but completely unrelated code ends up combined in a single method. This makes it too easy to introduce bugs and inconsistencies.

In many cases it’s not possible to break these components into smaller ones because the stateful logic is all over the place. It’s also difficult to test them. This is one of the reasons many people prefer to combine React with a separate state management library. However, that often introduces too much abstraction, requires you to jump between different files, and makes reusing components more difficult.

To solve this, **Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data)**, rather than forcing a split based on lifecycle methods. You may also opt into managing the component’s local state with a reducer to make it more predictable.

##### **Classes confuse both people and machines**

In addition to making code reuse and code organization more difficult, we’ve found that classes can be a large barrier to learning React. You have to understand how ```this``` works in JavaScript, which is very different from how it works in most languages. You have to remember to bind the event handlers. Without unstable syntax proposals, the code is very verbose. People can understand props, state, and top-down data flow perfectly well but still struggle with classes. The distinction between function and class components in React and when to use each one leads to disagreements even between experienced React developers.

Additionally, React has been out for about five years, and we want to make sure it stays relevant in the next five years. As Svelte, Angular, Glimmer, and others show, ahead-of-time compilation of components has a lot of future potential. Especially if it’s not limited to templates. Recently, we’ve been experimenting with component folding using Prepack, and we’ve seen promising early results. However, we found that class components can encourage unintentional patterns that make these optimizations fall back to a slower path. Classes present issues for today’s tools, too. For example, classes don’t minify very well, and they make hot reloading flaky and unreliable. We want to present an API that makes it more likely for code to stay on the optimizable path.

To solve these problems, **Hooks let you use more of React’s features without classes**. Conceptually, React components have always been closer to functions. Hooks embrace functions, but without sacrificing the practical spirit of React. Hooks provide access to imperative escape hatches and don’t require you to learn complex functional or reactive programming techniques.

### 3. Consuming API’s with Axios

[Axios](https://www.npmjs.com/package/axios) is a JavaScript library that helps us make AJAX calls to APIs.

We will being using to make requests for data in the form of JSON.

#### **AJAX**

AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

Asynchronously means that it's happening at the same time as your app is loading or doing other tasks.

The steps an AJAX call makes are the following:

1. An event occurs in a web page (the page is loaded, a button is clicked)

2. An XMLHttpRequest object is created by JavaScript

3. The XMLHttpRequest object sends a request to a web server

4. The server processes the request

5. The server sends a response back to the web page

6. The response is read by JavaScript

7. Proper action (like page update) is performed by JavaScript

Previously, there was a lot of code required to make these requests. Many library's created solutions to preform the common functions needed. jQuery had a ```.get()``` method, and a ```.ajax()``` method. We will learn how to use Axios and Axios's methods. Axios's whole job is to help us with these calls. It is what we will use in React. Angular has a $http service that does this same thing. If jQuery and Angular both have their own, why doesn't React?

In the creators words, _"In general we resist adding features that can be implemented in userland. We don't want to bloat your apps with useless library code."_

### 4. The React Context API

[Context](https://reactjs.org/docs/context.html)

### 5. Prototypal Inheritance

Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes.

    Prototype-based programming uses generalized objects, which can then be cloned and extended. Using fruit as an example, a "fruit" object would represent the properties and functionality of fruit in general. A "banana" object would be cloned from the "fruit" object and general properties specific to bananas would be appended. Each individual "banana" object would be cloned from the generic "banana" object. Compare to the class-based paradigm, where a "fruit" class would be extended by a "banana" class.

Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.

All JavaScript objects inherit properties and methods from a prototype:

- ```Date``` objects inherit from ```Date.prototype```.
- ```Array``` objects inherit from ```Array.prototype```.
- ```Player``` objects inherit from ```Player.prototype```.

The ```Object.prototype``` is on top of the prototype inheritance chain. ​ Date objects, Array objects, and Player objects all inherit from ```Object.prototype```.

    Let’s walk through an example of prototypical inheritance you’re likely familiar with from grade school: all squares are rectangles, but not all rectangles are squares. If we think of this as a JS program, we could say that the rectangle is a prototype to the square: the square inherits all properties of a rectangle (i.e. four-sides and closed), while also adding a new feature (i.e. all sides are the same length).

    We could not, however, construct this same concept using the square as a prototype, because there are properties of a square that do not apply to rectangles (i.e. all sides are the same length).

    We can see how prototypal inheritance works on the basis of specifying categories within a group from least specific to most – from rectangle to square. In code, this concept can sometimes be lost in the syntax. If you find this happens, speak the relations between objects and listen to where you draw distinctions. If you hear, “all ___ are , but…not all ___ are”, that is where a new prototypical relationship should be added.

The JavaScript ```prototype``` property allows you to add new properties/methods to an existing prototype. A prototype is an object from which other objects inherit properties. Every object has a prototype by default. Since prototypes are themselves objects, every prototype has a prototype as well.

#### **Advantages:**

No matter how many objects you create, functions are loaded only once into memory.
It allows you to override functions if required.
When we put something on the prototype, every instance of the object shares the same code for the method. They are all using the same function instance.

```javascript
function Pokemon(pokemonName, pokemonType, pokemonAttackList){
	this.name = pokemonName;
	this.type = pokemonType;
	this.attackList = pokemonAttackList;
}

var Arcanine = new Pokemon("Arcanine", "Fire", ["Ember", "Bite", "FlameThrower"]);
var Pikachu = new Pokemon("Pikachu", "Electric", ["Tail Whip", "ThunderBolt", "Agility"]);
var Blastoise = new Pokemon("Blastoise", "Water", ["Water Gun", "Hydro Cannon", "Hyper Beam"]);


Pokemon.prototype.callPokemon = function(){
	console.log(`I choose you, ${this.name}!`);
};

Pokemon.prototype.attack = function(attack_number){
	console.log(`${this.name}! use ${this.attackList[attack_number]}.`);
};

Pikachu.callPokemon();
Arcanine.callPokemon();
Blastoise.callPokemon();

Pikachu.attack(1);
Arcanine.attack(2);
Blastoise.attack(2);
```

Output

    I choose you, Pikachu!
    I choose you, Arcanine!
    I choose you, Blastoise!
    Pikachu! use ThunderBolt.
    Arcanine! use FlameThrower.
    Blastoise! use Hyper Beam.

Using prototypes is much more efficient. In the above example, the methods are placed on the prototype since we typically want all instances to use the same method. However, the properties are placed on the instance itself because we usually don't want all instances to share the same properties.

#### **Disadvantages:**

- **Inheritance cannot flow in circles as this will create an error.**

- **Objects cannot inherit from multiple prototypes.** As we saw above, they can inherit multiple object’s properties through a chain, however another object linked as a prototype explicitly will cause an error. This is the case even if the additional prototype is within the same chain.

- **Prototypical relationships can only be made to objects.** This is because the ```__proto__``` function works as a forwarder, directing the program where to find the value it is looking for. As the program either knows where to look or it doesn’t, the function can be only either ```null``` or an object. All other types will be discarded.

#### **```__proto__``` property**

In Javascript, every object has its own hidden, internal property, ```[[Prototype]]```. We can access that ```[[Prototype]]``` using the ```__proto__``` property. This calls the program to mark the template object as a hidden type. JavaScript objects must be linked to this prototype object. Now, an object’s properties can be accessed by the inheritor object.

Let’s take a look at the syntax for accessing and setting the ```[[Prototype]]``` property of an object.

```javascript
//using __proto__ to access and set the [[Prototype]] of "anObject"
anObject.__proto__ = someotherObject
```

#### **hasOwnProperty**
Using hasOwnProperty, we can test if an object contains a certain prototype property; the method will return true or false depending. This will help you clarify if an object has its own property or if it is inheriting instead. Take a look at the syntax below:

```javascript
obj.hasOwnProperty(prop)
```

#### **The Prototype Chain**

Prototypal inheritance uses the concept of **prototype chaining**. Let’s explore that concept. Every object created contains ```[[Prototype]]```, which points either to another object or null. Envision an object C with a ```[[Prototype]]``` property that points to object B. Object B’s ```[[Prototype]]```property points to prototype object A. This continues onward, forming a kind of chain called the prototype chain.

This concept is used when searching our code. When we need to find a property in an object, it is first searched for in the object, and if not found, it is searched for on that object’s prototype, and so on. Thus, the entire prototype chain is traversed until the property is found or ```null``` is reached.

### 3. Equality of Values

In JavaScript, there are several kinds of equality.

- Strict Equality: ```a === b``` (triple equals).

- Loose Equality: ```a == b``` (double equals).

- Same Value Equality: ```Object.is(a, b)```.

#### **Same Value Equality: ```Object.is(a, b)```**

In JavaScript, ```Object.is(a, b)``` tells us if a and b are the same value:

```console.log(Object.is(2, 2)); // true```

```console.log(Object.is({}, {})); // false```

This is called **Same Value Equality**.
What does “same value” mean, exactly. You might already know this intuitively, but let’s verify your understanding.

```javascript
let dwarves = 7;
let continents = '7';
let worldWonders = 3 + 4;
```

Now try to answer these questions using the code above:

```javascript
console.log(Object.is(dwarves, continents)); // ?
console.log(Object.is(continents, worldWonders)); // ?
console.log(Object.is(worldWonders, dwarves)); // ?
```

- ```Object.is(dwarves, continents)``` is false because dwarves and continents point at different values.

- ```Object.is(continents, worldWonders)``` is false because continents and worldWonders point at different values.

- ```Object.is(worldWonders, dwarves)``` is true because worldWonders and dwarves point at the same value.

#### **Strict Equality: a === b**

So what’s the difference between ```Object.is``` and ```===```?

In almost all cases, the same intuition works for **Strict Value Equaliy** too. For example, ```2 === 2``` is **true** because 2 always “summons” the same value.

Conversely, ```{} === {}``` is **false** because each ```{}``` creates a different value.

However, there are two rare cases where the behavior of ```===``` is different.

Consider the cases below as exceptions to the rule — just like you had to memorize the irregular verbs when you were learning English. Both of these unusual cases involve “special numbers” that we discussed in the past:

1. ```NaN === NaN``` is **false**, although they are the same value.

2. ```-0 === 0``` and ```0 === -0``` are **true**, although they are different values.

```NaN``` is a special number that shows up when we do invalid math like ```0 / 0```.

You probably won’t do this intentionally, but it can happen when you work with incorrect data in the first place, or if your calculation contains a mistake.

Remember that ```NaN === NaN``` is always false:

```javascript
console.log(width === height); // false
```

However, NaN is the same value as NaN:

```javascript
console.log(Object.is(width, height)); // true
```

**Second Special Case: -0**

In regular math, there is no such concept as “minus zero”, but it exists in floating point math for practical reasons. Here’s an interesting fact about it.

Both ```0 === -0``` and ```-0 === 0``` are always true.

In practice, I haven’t run into a case where this matters in my entire career.

    Imagine negotiating business deals at a masked carnival. You might talk to two people, and not realize that you really talked to the same person twice. Or you might think you talked to one person but those were two different people!

    If you don’t have a clear mental model of equality in JavaScript, every day is like a carnival – and not in a good way. You’re never quite sure if you’re dealing with the same value, or with two different values. As a result, you’ll often make mistakes — like changing a value you didn’t intend to change.

#### **Loose Equality**

"**_Loose Equality (double equals) is the bogeyman of JavaScript._**" - Dan Abramov

The rules of Loose Equality (also called “abstract equality”) are arcane and confusing. They are widely acknowledged as an early bad design decision. Many coding standards prohibit the use of == and != in code altogether.

Although I don't take strong opinions on what features you should or shouldn’t use, we’re not going to cover Loose Equality for now. It’s uncommon in modern codebases, and its rules don’t play a larger role in the language — or in our mental model. If you are curious, check out how it works, but don’t feel pressured to memorize it.
