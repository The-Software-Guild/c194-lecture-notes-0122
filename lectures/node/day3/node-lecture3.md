# C165 Week 1 Node Lecture 3

Learnign goals for node-day3 => A short lecture on Express Router and testing will make way for a heavy workload reinforcing concepts from yesterday while exploring socket.io and unit testing within node applications.

## Agenda

    1) Day 3 Recap
    2) Express.js
    3) Nodemon 
    4) API's
    5) Middleware
    6) URL Parameters & Queries
    7) Error Handling
    8) Postman

### 1. Day 1 Recap

-Express.js

-Nodemon

-API's

-Middleware

-URL Parameters & Queries

-Error Handling

-Postman

### 2. Express Router

A router object is an isolated instance of middleware and routes. You can think of it as a “mini-application,” capable only of performing middleware and routing functions. Every Express application has a built-in app router.

A router behaves like middleware itself, so you can use it as an argument to ```app.use()``` or as the argument to another router’s ```use()``` method.

The top-level express object has a ```Router()``` method that creates a new router object.

Once you’ve created a router object, you can add middleware and HTTP method routes (such as get, put, post, and so on) to it just like an application.

### 3. Testing

#### **Test-Driven Development (TDD)**

TDD refers to a style of programming in which three activities are tightly interwoven: coding, testing (in the form of writing **unit tests**) and design (in the form of refactoring).

It can be succinctly described by the following set of rules:

- write a **single** unit test describing an aspect of the program

- run the test, which should fail because the program lacks that feature

- write **just enough** code, the simplest possible, to make the test pass

- **refactor** the code until it conforms to the simplicity criteria

- repeat, **accumulating** unit tests over time
