const express = require('express')
const app = express() // aliasing
const morgan = require('morgan')

// constants
const PORT = 5000;


// application level middleware
app.use(express.json())
app.use(morgan('dev'))

// routes


// GET ALL


// error handling


// server startup logic
app.listen(PORT, () => {
     console.log(`Example app listening at http://localhost:${PORT}`)
})