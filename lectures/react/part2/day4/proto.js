// proto.js

// The super keyword is used to call corresponding methods of super class. 
// This is one advantage over prototype-based inheritance.

// ex1) Setting up Prototypical Relationships
// let user = { 			//create the user object
//      showAccess: true 	//create and set showAccess property of user
// };

// let premiumUser = {		//repeat of the above for this object
//      ads: false
// };

// there is no current __proto__
// so by using object dot notation I am saying set the __proto__'s value to that of 
// user || if __proto__ does not exist than create it and set it ewual to that of user
//                    = the prototype (the more general thing)
// premiumUser.__proto__ = user;	//user is the prototype of premiumUser

// console.log(premiumUser.showAccess);	// true


// internal function programming
// const someFx = (cb) => {
//      const newObj = {
//           key: 'values'
//      }

//      // do somestuff

//      cb(newObj)

//      // do more stuff

//      const newFx = () => {
//           newObj.hasOwnProperty('key') // true
//           newObj.key = 'new value'
//      }
// }

// Pokemon.callPokemon = function() {

// }


// // ex2) Inheriting Methods
// let user = {
//      email: "educative@gmail.com", //create and set email property
//      IDnumber: "#12345",		//create and set the Idnumber property
//      showAccess: true,

//      set accountInfo(value) {	//Setter method to change values of email and ID
//           [this.email, this.IDnumber] = value.split(" ");
//      },

//      // defined method in the prototype
//      get accountInfo() {
//           return `${this.email} ${this.IDnumber}`;
//      }
// };

// let premiumUser = {
//      __proto__: user,
//      ads: false
// };

// calls the inherited getter method
// console.log(premiumUser.accountInfo); // "educative@gmail.com #12345"

// premiumUser.accountInfo = "blogreader2020@hotmail.com #54321"; // calls the inherited setter method

// console.log(premiumUser.accountInfo); // "blogreader2020@hotmail.com #54321"
// // //ID and Email values are now different for each object
// console.log(user.accountInfo);	     // "educative@gmail.com #12345"


// https://www.w3schools.com/js/js_object_accessors.asp
// ex3) Three-Tier Inheritance and Scalability
let user = {
     email: "missing email", 	//fillers to reveal errors in inheritance at print
     IDnumber: "missing ID number",
     showAccess: true,

     set accountInfo(value) {
          [this.email, this.IDnumber] = value.split(" ");
     },

     get accountInfo() {
          return `${this.email} ${this.IDnumber}`;
     }
};

let premiumUser = {
     __proto__: user,
     ads: false
};

let familyPremium = {		//our new third tier of membership
     __proto__: premiumUser,	// in an inheritance chain with prior two objects
     multipleDevices: true
};

let me = { 			//an object for an individual user, me in this case
     __proto__: familyPremium, 	//inheritance to decide class
     email: "mymail@outlook.com",	//setting property values exclusive to this object
     IDnumber: "#67899"
};

console.log(me.multipleDevices); // true
console.log(me.accountInfo); 	// mymail@outlook.com #67899

// Least specific to most: 
// not all user accounts are premium accounts, 
// not all premium accounts are family premium accounts.
// all familyP accounts are preium accounts => user accounts

// __proto__
// [Object: object]



