// todo express


// In this project you will create an Express Server that manages a ToDo List 
// with endpoints to interact with the List.


// Create a simple Express Server that manages a list of todos (which at this point will just 
// be held in an array on the server, since we haven't gotten to including databases yet).
// please use the uuid package to simulate _id 's as in the last assignments. https://github.com/uuidjs/uuid


// Create endpoints that:

// allows new todo items to be posted to the array,
// When posting a new todo, you must generate a unique id for that todo (consider using the uuid npm package),
// returns the entire list of todos,
// allows the user to update a todo by its _id,
// allows the user to delete a todo by its _id, and
// allows the user to retrieve a single todo by its _id.
// add RESTful status codes to all req including the upcoming error handler

// BONUS: add a default error handler and sucessful handle and test your errors

// DOUBLE_bonus: create a frontend client portal to connect and perform these CRUD opperations (hint: check out the 
// axios npm package for making HTTP request from a node based frontend application)

// TRIPPLE_bonus: refactor the frontend to React.js
