const express = require('express');
const morgan = require('morgan');

const exampleRouter = require('./routes/exampleRouter');

// initilization
const app = express();

// configuration constants
const PORT = process.env.PORT || 5000;

// application level middleware
app.use(morgan('dev'));
app.use(express.json());

// routes
// /users/users
app.use('/', exampleRouter);

// error handling
const errorHandler = (err, req, res, next) => {
     if (res.headersSent) {
          return next(err)
     }
     res.status(500)
     res.render('error', { error: err })
}

// server startup logic
app.listen(PORT, () => {
     console.log(`c194 server sandbox listening on port: ${PORT}`)
})

module.exports = app;