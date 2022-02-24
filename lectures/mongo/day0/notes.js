// notes.js

// resource is a singular thing from the DB (in NR like mongo it will be a document)
// collection is a group of similar resources
// transaction singular logical unit of retrival ()
// two main governance (BASE vs ACID)

// users => collection
// user => resource

// to-do's => collection
// to-do => resource (represented by a singular document)


// MongoDB (non-relational) Basic
// BASE (non-relational)-basic vs ACID (relational)-rigid
// basically available 
// soft-state 
// eventually consistent


// Atomicity => either the transaction as awhole is excuted or fails (all or nothing)
// Consistincy => all of your data must confine to all constraints (triggers, cascades)
// Isolation => concurency (controlling things independently)
// Durability => all changes made to DB are permanent once a singualr transaction is complete

// MongoDB => unstructured data 
// Mongoose (ODM)
// models => add structure to our data 

const schema = new mongoose.Schema({
     name: 'string',
     admin: 'boolean'
});
const User = mongoose.model('User', schema);

































// blog posts => post
// users => user
// collection (to-do's for a user) is a group of similar resources (a singular to-d0) 
// and a resource is a singular piece of data 