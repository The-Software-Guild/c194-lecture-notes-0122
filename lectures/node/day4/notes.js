// notes.js

// TEST === DOCUMENTATION !

// FPR
// Fail, Pass, Refactor

// writing tests first force you to think about problems, UI, 
// system design, state design, what your missing, velocity, data flow


// 1st - writing a single unit test describing a specific aprt of the program


// :vocab:
// unit test is a type of test that is of the smallest denomenotr (1 thing)
// ETE tests (end to end) these are full workflow tests comprising of many unit tests
// coverage 

// CI/CD pipelines DevOps
// automatic continuous integration/continuous deployment

// the structure for how we describe and write our tests:
// AAA (Arrange, Act, Assert)
// Given - some precondition
// When - some action executed by the function that you’re testing
// Then - the expected outcome

// algs

// fib
// Given the following sequence find the number at the N-th entry?
// 0, 1, 1, 2, 3, 5, 8, 13, 21

// part 1 pseudo code goes here to describe the problem
const nSequence = () => {

}

// part 2 pseudo code goes here to describe the problem

// part 3 pseudo code goes here to describe the problem

const testFib = (cb) => {
     // test cases (edge cases and maybe the original thing)
     const testCaseArray = [[], {}, 1000000000009029102910, -3, 0, '', 'SoinSoinsknaksjdndasiSoiS oiasdasd oiasd', false, undefined, null];

     // loop that loop through each edge case and print soemthign to the console
     // to validate the success and invalidate the failures
     for (let i = 0; i < testCaseArray.length; i++) {
          const result = cb(testCaseArray[i]) 
          
          if (!result) {
               console.log(`the result was ${result} and that means it failed`)
          } else {
               console.log(`the result was ${result} and that means that the Nth number is ${num}`)

          }
     }
}

testFib(nSequence)
























// Big O
// O of _____
// constant time complexity => O(1) green flat line
// O(log(n)) ... pink curling down
// O(n) ... yellow straight line linear time complexity


