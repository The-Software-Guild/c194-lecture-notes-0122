// // notes.js 

// // DOM
// // Document Object Model
// // A visual representation of the HTML of a webpage 
// // organized in a tree like data structure consisting of 
// // parent/child relationships, meanign we can transverse it


// // HTMLcollections
// // nodelists

// // const c = {
// //      name: 'patrick',
// //      hungry: true
// // }

// // person.newProperty = 'new value'

// // constructor functions 
// // last type of function we need to learn
// // allow us to make objects progamtically

// // function Person(nameParam, hungryParam) {
// //      this.name = nameParam; // object dot notation to assign new properties to an object that has not been created yet
// //      this.hungry = hungryParam;
// // } // think about how we can programatically add properties and methods to this constructor so that all instances fo it aka teacher,s tudent, all new people created reflect the new properties and values

// // const student = new Person('dmitri', false); // this is a specific instance of the instantiated parent constructor function Person

// // // console.log(teacher.name)
// // // const that = this;

// // teacher.newProperty = 'new value'
// // console.log(teacher)
// // console.log(student)

// // new instantiations
// // instatiating 

// // console.log(this)

// // const someFx = () => {
// //      console.log(this)
// // }
// // someFx()

// // function namedFx() {

// //      const someFx = () => {
// //           console.log(this)
// //      }
// //      console.log(this)
// // }
// // namedFx()

// function Person(nameParam, hungryParam) {
//      this.name = nameParam; // object dot notation to assign new properties to an object that has not been created yet
//      this.hungry = hungryParam;
//      this.speak = () => {
//           console.log(`hello my name is ${this.name}`)
//      }
// }
// const teacher = new Person('patrick', true); // 3rd type of function invocation
// // const student = new Person('abdul', true); 
// // teacher.speak() // hello my name is patrick
// // student.speak()
// // classes 
// // are just es6 syntactical sugar of constructor functions

// // base class
// class ClassPerson {
//      constructor(nameParam, hungryParam) {
//           this.name = nameParam;
//           this.hungry = hungryParam;
//      } // special method used for creating and initializing an object of that class
//      // the value of this below or outside of the constructor has a specific value where in the constructor above it is merely a placeholder for the newly created objects 

//      // privatized emthods whicha re mthods unique to this clas
//      privateMethodIDontWantDerivedClassToUse() {
//           // everything here will only be available to the instantiated ClassPerson Objects
//      }

//      // global methods or methods available to all base classes
//      speak() {
//           // do anythign in here
//           console.log(4+4)
//           // console.log(this) // [class ClassPerson]
//           // console.log(`hello my name is ${this.name}`) // ClassPerson.name
//      }
// }

// const teacher = new ClassPerson('patrick', true); // 3rd type of function invocation
// // console.log(teacher.speak()) // teacher.speak is not function
// // console.log(ClassPerson)
// console.log(ClassPerson.speak())

// // derived class
// // derived class is used to create a new class with some shared attributes to a parent 
// //but with further unique configuration and encapsulation
// class Students extends ClassPerson {
//      constructor(...args){
//           super(...args)
//           // the students unique intiialization
//      } // this constructor in a derived class will call upon instantiation the parent classes constructor

//      // unique methods that are only applicable to students that go hear
// }

// const student1 = new Students('damir', false);
// student1.speak()

// const exampleObject = {
//      name: 'patrick',
//      speak: () => {
//           console.log(`hello my name is ${this.name}`)
//      }
// }
// exampleObject.speak()



