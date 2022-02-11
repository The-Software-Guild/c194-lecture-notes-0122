// main.js

// top of the DOM tree window object

// console.log(window)
// console.log(window.document)
// console.dir(window.document) // dir gives us an object like representation of a thing that is not an object
// console.log(window.document.body)


// parent/child relationships
// node
// root node = no parent node
// child node is of its parent
// sibling nodes share a parent
// ancestors have parents 
// who are siblings
// leaf/internal



// DOM interactions are computational
// expensive

// MVC
// unidirectional language



// events

// eventTarget.addEventListener('eventName', callbackFx)

// document.querySelector('.className')

// event handler
const onClick = (e) => {
     console.log(e)
}

const targetDiv = document.getElementById('greeting');
targetDiv.addEventListener('click', onClick)

// window.addEventListener('scroll', (e) => {
//      console.log(e)
// })












