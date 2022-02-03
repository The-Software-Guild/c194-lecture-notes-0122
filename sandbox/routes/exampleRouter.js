// exampleRouter.js
const express = require('express');
const { v4: uuidv4 } = require('uuid');

const exampleRouter = express.Router();

// simulate DB stuff we do not know
const users = [
     {
          name: 'patrick',
          hungry: true,
          _id: uuidv4()
     }, {
          name: 'fiji',
          hungry: true,
          _id: uuidv4()
     }, {
          name: 'casey',
          hungry: false,
          _id: uuidv4()
     }
];

// GET ALL
exampleRouter
     .get('/users', (req, res, next) => {

          res.status(200).send(users)
     }) // GET ALL
     .get('/users/:userByName', (req, res, next) => {
          const targettedUserName = req.params.userByName
          const targettedUserResource = users.find(arr => arr.name === targettedUserName)
     
          res.status(200).send(targettedUserResource)
     }) // GET ONE
     .get('/queryExample', (req, res, next) => {
          console.log(req.query)
     
          const soemVar = req.query.exampleProperty1
     
          res.status(200).send(soemVar) // value1
     }) // GET QUERY
     .delete('/remove/:removeById', (req, res, next) => {
          const targettedUserId = req.params.removeById
          const isMatchedByID = (element) => element._id === targettedUserId;
          const targettedUserResourceIndex = users.findIndex(isMatchedByID)
          const deltedUser = users.splice(targettedUserResourceIndex)
     
          // async code goes on here
          fs.readFile('./nameOfFile', (err) => {
               if (err) {
                    next(err) // pass errors to express
               } else {
                    res.status(200).send(`User sucessfully deleted: ${JSON.stringify(deltedUser)}`);
               }
          })
     }) // DELETE

module.exports = exampleRouter;