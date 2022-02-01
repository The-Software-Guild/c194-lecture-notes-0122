# C165 Week 1 Node Lecture 1

Learnign goals for week 1 day 1 => As we ramp up the pace we take a deep dive into the idiosyncrasies of Node that make it so powerful and popular. Next we introduce your first and possibly most important data flow in modern full stack web development, the HTTP req/res cycle. We end with a brief introduction to Express.js, a backend javascript framework that allows us to write server code in javascript.

## Agenda

    1) Day 0 Recap
    2) Callbacks, Closures, & the Node Event Loop
    3) Call Stack's & Execution Context
    4) The HTTP Req/Res Cycle
    5) Express.js

### 1. Day 0 Recap

- Problem Solving Process

- How To Ask a "Good" Question

- Vanilla JS Refresh

- Node.js => Node Patterns and Modularization

### 2. Callbacks, Closure, & The Node Event Loop

#### **Callbacks**

-Higher-Order Function

A function that takes another function as an argument, or returns a function as its return value.

-Callback Function

    A function that is passed to another function as an argument which is then run (called back)inside that function, often asynchronously.

#### **Closure**

Check out [this](https://gist.github.com/jp-signum/286e0d618936661b9638ef0eec58f755) gist for more onclusures within JS.

#### **The Node Event Loop**

The node event loop enables Node’s non-blocking asynchronous I/O model,which is the key to Node’s ability to scale under load. This is accomplished even though Javascript is single-threaded.

It accomplishes this by handing off expensive I/O operations to the multi-threaded system kernel to complete without blocking Node's single threaded operations.

Then the kernel lets Node know when an operation is completed, and Node uses callbacks and the event loop to pick up where it left off

_**Six phases of the node event loop**_

    1) Timer*
    2) Pending Callbacks
    3) Idle, Prepare
    4) Poll*
    5) Check*
    6) Close Callbacks

*Typically only the Timer, Poll, and Check phases will be relevant to a Node developer – the rest are handled by Node in the background.

****Timer phase**: Handles callbacks from setTimeout() and setInterval()

****Poll phase**: Processes I/O callbacks in a queue, waits for more callbacks  

****Check phase**: Handles callbacks from setImmediate() which are run as soon as poll phase's callbacks queue is empty

#### Node Callback Pattern & Error Callback Convention

*see images folder*

More on cb's, closure, and the node event loop.

[I/O-bound vs CPU-bound in Node.js](https://bytearcher.com/articles/io-vs-cpu-bound/)

[NodeJS - The Node.js Event Loop](https://nodejs.org/fa/docs/guides/event-loop-timers-and-nexttick/)

[IBM Developer - Learn Node.js - The Event Loop](https://developer.ibm.com/tutorials/learn-nodejs-the-event-loop/)

[Codeburst.io - What the Heck is a Callback?](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)

[MDN - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

[Closure & Lexical Scope](https://dev.to/stephencweiss/closure-lexical-scope-12f4)

### 3. Call Stack's & Execution Context

### 4. The HTTP Req/Res Cycle

A HTTP req/res cycle is considered stateless .... what does that mean?

By what means can we add "state" to this cycle ??

### 5. Express.js

req, res, and next are called [streams](https://medium.com/developers-arena/streams-piping-and-their-error-handling-in-nodejs-c3fd818530b6), which are special node objects.

http verbs => express routing methods
CRUD vs HTTP

    1)
    2)
    3)
    4)

Each method takes a path and a callback function – Express calls it a "handler", more or less what Node docs call a "request handler." It handles the request that comes in via that particular HTTP verb.

resource operation = ______ + ______ ?

*query strings are not part of the route path.

*resource operation does not equal endpoint!
