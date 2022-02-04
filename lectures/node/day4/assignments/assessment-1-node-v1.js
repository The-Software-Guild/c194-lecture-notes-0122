// assessment #1 - Node.js

// You must complete all 3 sections by the beginning of class Monday  
// February 7th @ 10:00am est. Handed in via github classroom: https://classroom.github.com/a/dAhreoTD
// Please schedule a code review via the following links immediately:
// Navdeep, https://calendly.com/kaur-navdeep0179
// Patrick, https://calendly.com/patrick-morgan-bkny/c194-assessment-1-node

// Section One: JS
// Part A: 5-random-7
// If you have a function that generates random number between 1 to 5 
// how could u generate a random number from 1 to 7 inclusively by using 
// the afformentioned function?
// ex) given fx: 
const random5 = () => {
  return 1 + Math.random() * 4;
}

// Part B: reverse-a-string
// Given any string, write a function that returns the string in reverse.
// ex) 
const initialString = 'hello' // 'olleh'


// Section Two: DOM, HTML, CSS
// Part A: event-werkbook
// Clone the following repository and complete all the exercises using vanilla 
// JS only: https://github.com/The-Software-Guild/event-werkbook-dom

// Section Three: Node.js, Express.js, React.js
// Part A: thunbergs-recycling-corp
// You have just started working at an early-stage high-growth startup that has been tasked with a global recycling initiative. 
// Your job as a junior developer is to create an application wherein you can track your local team's efforts.

// Overall Project Objectives:
// Develop a Backend server with functioning endpoints able to CRUD the recycling items upon intake.
// Parameterize the server by allowing for GET ONE and querying routes
// Make use of Express Router, error handling, and status codes

// Since we haven't started connecting to MongoDB quite yet, you can just save your items in an recycledItems 
// array in your server code. Keep in mind that since it isn't being persisted anywhere, anytime you make a change 
// to your server code and restart the server, you'll lose all the current changes.

// A recycled item object should have the following properties:

// Name
// Description
// Recyclable (boolean)
// Quantity (number)
// Price Per Unit (number)
// ID (a unique identifier. Use the uuid package to generate unique ids. - npm install uuid and check the docs to see how to use it. 
// It's as simple as requiring the package and running uuid.v4())
// Since there isn't a front-end setup yet, you'll just use Postman to interact with the server and update the data.

// Follow TDD while designing and writing your API
// use both Mocha and Chait to test the routes you will make

// Create GET & POST routes
// Since we don't have a good way to tell the server which item we want to PUT and DELETE yet, we'll start out just by writing the GET and POST endpoints.

// Using Express, create an API  /itemsIntake router
// Write a GET endpoint that gets all recycled items from the array and sends them to the client.
// Write a POST endpoint that adds a new item object to the array of recycledItems.
// **Remember, you'll have to play the part of the database and add an id property to the incoming item before saving it to the array of items. 
// This way you'll be able to easily look it up by its id property in order to update and delete it later.

// Since you have now learned about req.params, add endpoints on the /itemsIntake router that allow you to:

// DELETE an item from the recycledItems array, and
// PUT (update) an existing item
// You'll need to pass the uuid you added when POSTing new items as a URL Parameter to the endpoint in order to have a reference to the object you want to update or delete.

// Lastly, take a screenshot demonstrating the complete routing functionality of this server application via Postman

// Part B: react-refactor
// Refactor the event werkbook from Section 2 Part A into a multi-page react application in which a single exercie is displayed per each page.

// Outcome:
// The application (Section 3 Part B) must be fully styled and responsive (using a combination of css-grid, css flexbox, and media queries .... NOT bootstrap)

// PLEASE KEEP TRACK OF, AND ESTIMATE HOW LONG THE ASSESSMENT TOOK YOU TO COMPLETE THIS TIME. 
// THIS IS PURELY FOR ME AND TO BETTER PACE THE FUTURE ASSIGNMENTS AND OVERALL COURSE PACING

// how-to:
// https://www.take-a-screenshot.org/