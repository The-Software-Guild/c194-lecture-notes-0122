// node-streams-fs-events

// due Wednesday February 2nd @ 10:00am est via the following github classroom link: https://classroom.github.com/a/_xackrwF

// please create a seperate branch for each section of each assignment moving forward
// when you come to me or anyone else for help you should have pushed your most recent changes 

// workflow is ONLY for when you are workign by yourself
// so example is: I am have been workign ona  new feature branch called new-feature-1 (section-1-core-modules)
// finished working on sectino one I now need to merge my local section 1 changes into my main branch in two steps
// 1 merge it to local main then push that to remote main while checking for changes along the way

// git checkout main
// git pull (pulls down any other changes that have acrued since you started working) in our context this is not really important
// git merge --no-ff <name-of-branch> (git merge --no-ff section-1-core-modules)
// go through merge process (:wq)
// open a PR from the remote side (from github website)


// 1. core modules exercise
// create a new directory USING NODE called node-core-modules
// using at least the node core module fs create a .txt file and write the following in it, 'hello world this is my first file!'
// use a callback to output to the console that the file creation succeeded
// now read the entire contents of the file. Remeber first you will need to create and store the path to the file.
// rename the working directory USING NODE to node-event-module


// 2. event module exercise
// Create an event emitter instance and register a couple of callbacks. test by emitting the created event and checking that all of the callbacks are invoked
// register the event to be fired only one time usine once
// get the listener count 
// unregister the event
// get the raw listener count .... what is the expected output here? Is it what you expected?


// 3. express.js exercise
// Create an application with following features:

// Application will make a call to the following API endpoint (http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees) using Request Object.
// Once the data is available, the employee list along with the details should be visible to the User on the client side front end wed page.
// The employee details would contain:
//     - Name
//     - Id
//     - CreatedAt


