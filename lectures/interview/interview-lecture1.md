# C194 Week 6 Interview Prep 

Learnign goals => We begin our review of javascript by exploring a few different ways to call functions that expose themselves to more advanced functional programming design paradaigms.

## Agenda

    1) Interview Prep 101
    2) "this" refresher
    2) bind()
    3) call() & apply()
    4) Currying

### 1. interview Prep 101

- Online Presence
- Pacing
- Tracking & Feedback
- Preperation
- Self Awareness
- Tracking & Feedback
- Professionalism
- intention

### 2. **"this" refresher**

Throughout our exploration of Object Oriented JS we learned that in JS, everything is an object. _Because everything is an object_, we came to understand that we could set and access additional properties to functions.

Setting properties to a function and additional methods via the prototype is super awesome … but how do we access them?!??!

We were introduced to the `this` keyword. We learned that every function gets this property automatically. If we were to create a mental model of our function execution context it would look something like this:

![js-this-fx-execution-context](https://i.ibb.co/QNBHbP7/this-fx-execution-context.png)

It took us a little while to get comfortable with the `this` keyword, but once we did we began to realize how useful it is. `this` is used inside a function, and will always refer to a single object — **the object that invokes (calls) the function where “this” is used**.

But life isn’t perfect. Sometimes, we lose our `this` reference. When that happens, we end up using confusing hacks to save our reference to `this`.

### 3. bind()

Up until now we have treated functions as objects that are composed of a name (optional, can also be an anonymous function) and the code it executes when it is invoked. But that isn’t the entire truth. A function actually looks closer to the following image:

![js-this-fx-execution-context](https://i.ibb.co/j8zCQw5/call-apply-bind.png)

    The bind() method creates a new function that, when called, has its this keyword set to the provided value with a given sequence of arguments preceding any provided when the new function is called.

```javascript
function.bind(thisArg[, arg1[, arg2[, ...]]])
```

### 4. call() & apply()

The `call()` method calls a function with a given `this` value and arguments provided individually.

```javascript
function.call(thisArg, arg1, arg2, ...)
```

What that means, is that we can call any function, and explicitly specify what `this` should reference within the calling function.

    call() is really similar to the bind() method

This can definitely save us from writing hacky code
.
The main differences between bind() and call() is that the call() method:

- Accepts additional parameters as well

- Executes the function it was called upon right away.

- The `call()` method does not make a copy of the function it is being called on.

`call()` and `apply()` serve the exact same purpose. The only difference between how they work is that `call()` expects all parameters to be passed in individually, whereas `apply()` expects an array of all of our parameters.

```javascript
function.apply(thisArg, [argsArray])
```

### 5. Currying

Currying is not native to the JS language. It refers to the transformation of a function between callable executions. JavaScript implementations usually both keep the function callable normally and return the partial if the arguments count is not enough. **Currying allows us to easily get partials.**

ex) `f(a, b, c)` into callable as `f(a)(b)(c)`

    Currying doesn’t call a function. It just transforms it.

#### **Caveats**

- **Fixed-length functions only.** The currying requires the function to have a fixed number of arguments. A function that uses rest parameters, such as `f(...args)`, can’t be curried this way.

- **A little more than currying.** By definition, currying should convert `sum(a, b, c)` into `sum(a)(b)(c)`. But most implementations of currying in JavaScript are advanced, as described: they also keep the function callable in the multi-argument variant.
