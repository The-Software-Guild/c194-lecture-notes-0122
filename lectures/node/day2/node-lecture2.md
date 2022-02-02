# C194 Week 1 Node Lecture 2

Learnign goals for node-day2 => Dive deeper into Express.js while being introduced to the postman GUI — an invaluable tool for any modern wed developer.

## Agenda

    1) Day 1 Recap
    2) Express.js
    3) Nodemon 
    4) API's
    5) Middleware
    6) URL Parameters & Queries
    7) Error Handling
    8) Postman

### 1. Day 1 Recap

- Initializing Node.js Projects

- Callbacks, Closures, & the Node Event Loop

- Call Stack's & Execution Context

- The HTTP Req/Res Cycle

- Array Indexing & .gitignore & Serialization

### 2. Express.js

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

### 3. Nodemon

*check* *check* .... *check — 1 2*

### 4. API's

An application programming interface is a computing interface that defines interactions between multiple software intermediaries. It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc. Below are a few of the most common conventions:

#### SOAP

**SOAP** (Simple Object Access Protocol) is a standards-based web services access protocol that has been around for a long time. Originally developed by Microsoft, SOAP isn’t as simple as the acronym would suggest. It uses XML and structure to expose their own arbitrary set of operations.

#### REST

Instead of using XML to make a request, **REST** (usually) relies on a simple URL. In some situations you must provide additional information, but most web services using REST rely exclusively on using the URL approach. REST can use four different HTTP 1.1 verbs (GET, POST, PUT, and DELETE) to perform tasks.

Unlike SOAP, REST doesn’t have to use XML to provide the response. You can find REST-based web services that output the data in Command Separated Value (CSV), JavaScript Object Notation (JSON) and Really Simple Syndication (RSS). The point is you can obtain the output you need, in a form that’s easy to parse within the language you’re using for your application.

The guidlines for a "RESTful" api:

1) client-server seperation

2) statelessness

3) uniform interface

4) cacheable

5) layered system

6) code on demand

#### N+1

[REST API N+1 Problem](https://restfulapi.net/rest-api-n-1-problem/)

### 5. Middleware

Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

_see assets_

### 6. URL Parameters & Queries

[Anatomy of a URL](https://doepud.co.uk/blog/anatomy-of-a-url)

#### **Parts of a URL**

- Base: http://www.amazon.com
- Endpoint: http://www.amazon.com/images
- Parameter: http://www.amazon.com/images/1skcasnjasndjsn

*see assets*

    accessible via req.params & req.query in key:value formatted objects

In the above example **1skcasnjasndjsn** is the parameter and the value of our key:value pair.

URL parameters are used to create a "GET ONE" route and would look like this with **movieId** being the key and inserted via a wildcard syntax(colon before), somethign we should be familiar with from react router match params.

```Javascript
movieRouter.get(":movieId", (req, res) => {
    //some stuff
})
```

#### **Query String (typically used to filter results)**

- Begins with the "?"
- Built of key:value pairs
- Multiple queries seperated with the "&"

Here is an example of a URL with query strings attached:

    https://stackabuse.com/?page=2&limit=3

    The query parameters are the actual key-value pairs like page and limit with values of 2 and 3, respectively.

Your query parameters can be retrieved from the query object on the request object sent to your route (req.query). It is in the form of an object in which you can directly access the query parameters you care about. In this case Express handles all of the URL parsing for you and exposes the retrieved parameters as this object.

### 7. Error Handling

Error Handling refers to how Express catches and processes errors that occur both synchronously and asynchronously. Express comes with a default error handler so you don’t need to write your own to get started.

It’s important to ensure that Express catches all errors that occur while running route handlers and middleware.

Errors that occur in synchronous code inside route handlers and middleware require no extra work. If synchronous code throws an error, then Express will catch and process it. For example:

    app.get('/', function (req, res) {
        throw new Error('BROKEN') // Express will catch this on its own.
    })

For errors returned from asynchronous functions invoked by route handlers and middleware, you must pass them to the next() function, where Express will catch and process them. For example:

    app.get('/', function (req, res, next) {
        fs.readFile('/file-does-not-exist', function (err, data) {
        if (err) {
            next(err) // Pass errors to Express.
        } else {
            res.send(data)
        }
        })
    })

### 8. Postman
