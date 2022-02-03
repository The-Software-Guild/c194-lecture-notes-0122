const express = require('express');
const app = express(); // alliasing by storing the value of the newly created express server into a variable called app

const morgan = require('morgan') // express.js logger (give us mroe detailed information on all req/res)

// configuration constants
const PORT = process.env.PORT || 5000;

// application level middleware
app.use(morgan('dev')) // middleware is code that enacts itself on EVRYTHING through a specific dataflow [loggers]

// routes

// CRUD          HTTP        EXPRESS
// CREATE        POST        .post()
// READ          GET         .get()     
// UPDATE        PUT         .put()  
// DELETE        DELET       .delete()

// GET ALL
app.get('/home', (req, res, next) => {
     // do this stuff when a get req is made to the route path '/'
    
     res.send('Hello World')
})

// error handling


// server startup logic
app.listen(PORT, () => {
     console.log(`c194 server sandbox listening on port: ${PORT}`)
})