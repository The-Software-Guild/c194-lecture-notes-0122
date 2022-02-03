// notes.js

// In computing, a stateless protocol is a communications protocol in which 
// no session information is retained by the receiver, usually a server. 
// Relevant session data is sent to the receiver by the client in such a 
// way that every packet of information transferred can be understood in isolation, 
// without context information from previous packets in the session. This property 
// of stateless protocols makes them ideal in high volume applications, 
// increasing performance by removing server load caused by retention of session information.


// state 
// changing composition at the current time

// 3 ways to add state (persisting data)
// JS based (both objects we have access to in JS natively and you can read and write to them with built in methods)
// LS is a array like object meanign it stores things in key value pairs yet has a length
// session storage/local storage
// localStorage.set()

// also an object like thing that you can read and write from and are persisted
// difference they are intentionally small (usually less than a few bytes)
// and purposefully expireable 

// cookies
// BI logic (stealing custer data, analytics)

// External (secure)
// Database 

// Overfetching RESTfull design N+1

// middleware
// middleware is code that enacts itself on EVRYTHING through a specific dataflow [loggers]

// every middleware function in express must do either:
// end the current req/res cycle
// or call next()

// API's
// CRUD vs http verbs vs express methods that map directly to our HTTP 

// Create  ------>  POST       -> .post

// Read    ------>   GET       -> .get

// Update   ------>  PUT       -> .put

// Delete   ------>  DELETE    -> .delete

// REST

// resource operation = route path + HTTTP method

// endpoint = base url + route path
// https://www.nike.com/w/air-force-1-5sj3y
// http://www.amazon.com/images


// http://www.amazon.com/images/:wildcard
// http://www.amazon.com/images?


// status codes

// [Object: object]
// serialization
// JSON.stringify()

// de-s
// JSON.parse()


// URL parameters



// Query parameters




// active endpoint
// localhost:5000/home

// tryign to get a single user from the Users collection
// GET ONE using url parameters (also for put's, and deletes)
// a wildcard is a word prepended with a colon and acts merely as a placeholde
// wildcards really crate us a key:value pair
// the key is the :wildcard written in the route handler
// value is the thing in the endpoing
//       routePathAlreadyWas/:wildcard



// localhost:5000/queryExample?exampleProperty1=value1
// QUERY


