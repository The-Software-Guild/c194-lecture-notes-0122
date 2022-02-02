// thing finder.js

// For this assignment, you will create a server with a GET route that is able 
// to return data including filtering results based on URL query parameters.

// create an items array of objects to simulate fake data. each item object should contain 
// 5 properties of at least 1 number and one boolean type along with unique identification data
// to mimic our future real data coming from our databases. Use the UID package for this (https://github.com/uuidjs/uuid)
// id properties syntax always contain an underscore before to mimic MongoDB convention (ex: _id)

//example items array:

// const array = [
//      {
//           property1: 'value 1',
//           property2: 'value 2',
//           property3: 3,
//           property4: false,
//           _id: uuidv4(),
//      },
//      {},
//      {},
//      ...
// ]

// Choose a thing/noun of any kind, then write an express server with a GET route that sends back an array of that thing.

// Your GET endpoint should be able to check for any query parameters that may have been passed into the url of the request 
// and filter the results based on those query parameters. For example, let's say I chose "fruit" as my noun. A GET request to 
// http:localhost:8000/fruit would return an array with all fruits on my server. However, a GET request to
// http://localhost:8000/fruit?type=banana should filter out any fruits in the array that don't have a type of banana and return 
// an array to me  with only the objects with a type of banana.

// For the purposes of this exercise, you can write your server code with the assumption that there is only one query parameter 
// option available. So in the above example, I can write my server's GET route to only filter if req.query.type isn't undefined.

// Also create a GET ONE route using route parameters. So if I want to return a specific avocado that I bought from mr lemon
// and not the one I bought from wegmans.
