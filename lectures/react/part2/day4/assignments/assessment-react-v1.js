// assessment #2 - React.js

// You must complete both sections by Tuesday February 22nd 
// Handed in via github classroom: https://classroom.github.com/a/b-xMqDJA
// Please book your code review with Navdeep via the following link: https://calendly.com/kaur-navdeep0179/c194-assessment-2 

// Section One: Prototypes & Equivalence in JS
// Refresh: https://www.youtube.com/watch?v=2rkEbcptR64
// Part A: Equivalence
// Write a function called strictEquals(a, b) that returns the same value as a === b. 
// Your implementation must not use the === or !== operators.
// Use a testing suite to showcase your solution.

function strictEquals(a, b) {
  // are not allowed to use === or !==

  return   // a === b
}

// Part B: Prototypal Inheritance
// You are given a function, Square, that takes four parameters, A, B, C, and D, denoting the length of the square's edges.
// Using prototype properties, add a method to Square named isSquare that prints true if a Square object has equal edges and false if they are unequal.
// Use a testing suite to showcase your solution.

//a,b,c,d
[1,2,3,4]

function Square(A, B, C, D) {
  this.A = A;
  this.B = B;
  this.C = C;
  this.D = D;
}

// example test code
function processData(input) {
  let sq1 = new Square(input[0], input[1], input[2], input[3]);
  sq1.isSquare();

  console.log(Object.getPrototypeOf(sq1));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  _input = _input.split(' ').map(num => Number(num));
  processData(_input);
});


// Section Two: React.js
// Part A: everythings-a-to-do-list
// Purpose: Create a server using Express in Node, that serves up any data of your choice, 
// and create a frontend application in React to interact with the server.

// Follow TDD and test all routes using mocha/chai (BONUS: Use Jest & Enzyme to test some React components)

// Getting Started

// Step 1: Data - create an array of static data (fake database), hard coded in your server. 
// Each object in the array must include at least:

// 2 strings
// 1 boolean
// 1 array
// 1 number
// An ID - unique identifier. Use the uuid package to generate unique IDs.

// Step 2: Endpoints - Backend using Express - Create a server with the following functionality:

// Create a GET endpoint that returns all objects from the array and sends them to the client.
// Create a POST endpoint that adds a new object to the array.
// Create a PUT endpoint that can update an object in the array.
// Create a DELETE endpoint that can delete an object in the array.
// Create a GET ONE endpoint that returns one object from the dataset. req.param & :wildcardSyntax
// Create an endpoint that will query the dataset and return object(s) from it the based on certain criteria. 
// Example. Your dataset includes football players and the team they play for. Create a route that will return all players that play for a specific team.

// Step 3: Status codes & Error Handling - Backend

// Create a global error handler in server.js file.
// Include at least one of each of the following status codes in all of your routes:
// 200
// 201
// 500

// Step 4: Frontend using Axios - Build a client-side React interface to function with your backend server, 
// including the following CRUD operations:

// Create (POST) a new object(s) to the dataset you created in Step 1.
// Read (GET) a list of all the objects in the dataset.
// Update (PUT) an object(s) in the dataset.
// Delete (DELETE) an object(s) from the dataset.
// GET ONE
// Querying endpoint (i.e. a search bar that lets you filter through the list of _________)

// Step 5: The frontend React app must be fully styled and responsive.

// Outcome:
// Your final web application should have the following:

// Web application (interact in browser)
// The web app should list the items in the dataset (the initial ones created in Step 1), then update, 
// in real time (does not require refreshing the browser), to list any modifications made, such as Add, Delete, Edit items.

// A form to Add items
// An option (ex. button) to Delete items
// An option (ex. button) to Edit items
// When a User presses the Edit/delete button, additional options to Submit the Edit and/or Cancel the Edit should be available to the User

// Postman interaction
// All backend endpoints created are functional:
// GET ALL
// GET One
// GET query selection (Step 2. f. above)
// POST
// PUT
// DELETE
// Each of status codes (at least 3) created are functional and display when the endpoint they are associated with is called in Postman.   

// reminders:
// We should be following TDD and all code written here on out should be fully tested up to unit tests depth
// All further code should be 100% fully es6. Not a mix match of some var declerations and some let/const, ...etc
// From here on out, all assessments must be 'fully styled and responsive' and described earlier — using a combination of media queries, css flexbox & grid
// Make sure all of your code is 'PR & code review ready' per the shared resources in slack, please reach out if you need more detail on what I am looking for
// In your PR's you can include any relevant media (screenshots, gifs, etc)

// how-to:
// https://www.take-a-screenshot.org/