# C194 Week 1 Node Lecture 4

Learnign goals for node-day4 => Today we make room for our first assessment by going over a process called TDD while being introduced to algorithms, specifically how we categorize them via BigO notation.

## Agenda

    1) Day 3 Recap
    2) Testing
    3) Data Structures
    4) Algorithm Solving Proccess 
    5) What to Study and How
    6) Time & Space Complexity - BigO Notation
    7) Recursion **Push 2 Interview-Prep
    8) Assessment #1

### 1. Day 3 Recap

-URL Parameters & Queries

-Express Router

-Error Handling

### 2. Testing

#### **Test-Driven Development (TDD)**

TDD refers to a style of programming in which three activities are tightly interwoven: coding, testing (in the form of writing **unit tests**) and design (in the form of refactoring).

It can be succinctly described by the following set of rules:

- write a **single** unit test describing an aspect of the program

- run the test, which should fail because the program lacks that feature

- write **just enough** code, the simplest possible, to make the test pass

- **refactor** the code until it conforms to the simplicity criteria

- repeat, **accumulating** unit tests over time

### 3. Data Structures

[visulaizations](https://visualgo.net/en)

- search & linked lists
- stacks
- quueues
- trees
- sets
- search tries
- graphs
- hash tables
- arrays

### 4. Algorithm Solving Proccess

1. Think. Analyze the problem silently and then verbalize your thoughts once they are collected. Feel free to take personal notes. Personally, there is nothing more uncomfrotbale then someone just jumping head first into a problem, that tends to show you have an itchy trigger finger and you don't thin through things.

2. Identify the problem. Always be explicit and verbal. Make use of whatever medium you have to write the problem down (think comments in your code at the top of your working file).

3. Hypothesize edge cases and jot them down too. Even if it will be timed and you may think you will not get to them. Talkign and thinking about them now shows foresight and deep/advanced problem solving. This can also reshape your initial approacha nd is a great time to bounce ideas off your interviewees. They more than likely will be more than willing to chat about edge cases and you can really pull information from them to guide your process while simultaneously "break the ice".

4. Devlop and implement your solution.

5. Analyze your results in the terms of time and space complexity but also relations and importance.

### 5. What to Study and How

[leetcode](https://leetcode.com/)

[interviews school](https://interviews.school/)

### 6. Time & Space Complexity - BigO Notation

When we consider the complexity of an algorithm, we shouldn’t really care about the exact number of operations that are performed; instead, **we should care about how the number of operations relates to the problem size.**

In computer programming, as in other aspects of life, there are different ways of solving a problem. These different ways may imply different times, computational power, or any other metric you choose, so we need to compare the efficiency of different approaches to pick up the right one.

Think about it: if the problem size doubles, does the number of operations stay the same? Do they double? Do they increase in some other way? To answer these questions, we need to measure the time complexity of algorithms.

**Time complexity represents the number of times a statement is executed.** The time complexity of an algorithm is NOT the actual time required to execute a particular code, since that depends on other factors like programming language, operating software, processing power, etc. The idea behind time complexity is that it can measure only the execution time of the algorithm in a way that depends only on the algorithm itself and its input.

To express the time complexity of an algorithm, we use something called the “Big O notation”. **The Big O notation is a language we use to describe the time complexity of an algorithm.** It’s how we compare the efficiency of different approaches to a problem, and helps us to make decisions.

**Big O notation expresses the run time of an algorithm in terms of how quickly it grows relative to the input (this input is called “n”).** This way, if we say for example that the run time of an algorithm grows “on the order of the size of the input”, we would state that as “O(n)”. If we say that the run time of an algorithm grows “on the order of the square of the size of the input”, we would express it as “O(n²)”. But what does that mean exactly?

The key to understanding time complexity is understanding the rates at which things can grow. The rate in question here is time taken per input size. There are different types of time complexities, so let’s check the most basic ones.

#### **Constant Time Complexity: O(1)**

When time complexity is constant (notated as “O(1)”), the size of the input (n) doesn’t matter. Algorithms with Constant Time Complexity take a constant amount of time to run, independently of the size of n. They don’t change their run-time in response to the input data, which makes them the fastest algorithms out there.

     To remain constant, these algorithms shouldn’t contain loops, recursions or calls to any other non-constant time function. For constant time algorithms, run-time doesn’t increase: the order of magnitude is always 1.

#### **Linear Time Complexity: O(n)**

When time complexity grows in direct proportion to the size of the input, you are facing Linear Time Complexity, or O(n). Algorithms with this time complexity will process the input (n) in “n” number of operations. This means that as the input grows, the algorithm takes proportionally longer to complete.

     Linear running time algorithms are very common, and they relate to the fact that the algorithm visits every element from the input.

#### **Logarithmic Time Complexity: O(log n)**

Algorithms with this complexity make computation amazingly fast. An algorithm is said to run in logarithmic time if its time execution is proportional to the logarithm of the input size. This means that instead of increasing the time it takes to perform each subsequent step, the time is decreased at a magnitude that is inversely proportional to the input “n”.

     Logarithmic time algorithms (O(log n)) are the second quickest ones after constant time algorithms (O(1)).

What’s the secret of it? These type of algorithms never have to go through all of the input, since they usually work by discarding large chunks of unexamined input with each step. This time complexity is generally associated with algorithms that divide problems in half every time, which is a concept known as “Divide and Conquer”. Divide and Conquer algorithms solve problems using the following steps:

- They divide the given problem into sub-problems of the same type.

- They recursively solve these sub-problems.

- They appropriately combine the sub-answers to answer the given problem.

#### **Quadratic Time Complexity: O(n²)**

In this type of algorithms, the time it takes to run grows directly proportional to the square of the size of the input (like linear, but squared).

In most scenarios and particularly for large data sets, algorithms with quadratic time complexities take a lot of time to execute and should be avoided.

     Nested For Loops run on quadratic time, because you’re running a linear operation within another linear operation, or n*n which equals n².

If you face these types of algorithms, you’ll either need a lot of resources and time, or you’ll need to come up with a better algorithm.

#### **Exponential Time Complexity: O(2^n)**

In exponential time algorithms, the growth rate doubles with each addition to the input (n), often iterating through all subsets of the input elements. Any time an input unit increases by 1, it causes you to double the number of operations performed. This doesn’t sound good, right?

Algorithms with this time complexity are usually used in situations where you don’t know that much about the best solution, and you have to try every possible combination or permutation on the data

Exponential time complexity is usually seen in Brute-Force algorithms. These algorithms blindly iterate an entire domain of possible solutions in search of one or more solutions which satisfy a condition. They try to find the correct solution by simply trying every possible solution until they happen to find the correct one. This is obviously a not optimal way of performing a task, since it will affect the time complexity. Brute-Force algorithms are used in cryptography as attacking methods to defeat password protection by trying random stings until they find the correct password that unlocks the system.

As in quadratic time complexity, you should avoid algorithms with exponential running times since they don’t scale well.

_*see-assets_

### 7. Recursion

[visualization](https://quanticdev.com/algorithms/primitives/recursion-visualization/)

     "To first understand recursion you must first understand recursion"

Recursion is a method of program design where you break apart a problem into smaller repeatable subtasks. The program will complete each subtask later combined to achieve a solution.

The primary feature that defines recursion is that a recursive function calls itself, either directly or indirectly during execution. The call usually comes at the end of another operation using the passed data, a practice called **tail recursion**. This results in a looping structure that repeats the operation until an exit condition is met.

Each pass through this loop brings the program closer to its desired state or solution, which is known as the **base case**. Once this base case is reached, the method will no longer loop back into its recursive step. Instead, the program will end.

#### **Base Case**

The base case (or base condition) is the state where the program’s solution has been reached. An achievable base case is essential to avoid an infinite loop. Recursive methods are built with two paths: the method first checks if the base state has been reached, if yes, the method ends and returns the current data, if not the method instead goes the other path and executes the recursive case, altering the input and calling the method again.

     I like to think of and test/implement my base case first so as to "always" break out of the recurssive loop. Then we can handle the tail section.

#### **Call Stack**

The call stack is an integrated, hidden data structure within all modern programing languages. By storing active subroutines in a stack structure, the program is able to execute subroutines in the order they were received.

Each recursive call in a program causes a nesting effect in the call stack, adding more subroutines that must be finished before the stack is empty.

Broadly speaking, the larger the call stack, the more memory and time that is needed for the program to run (more on this later!).

     Recursive solutions are sensitive to errors. A recursive solution can easily have either an unreachable base case or with a recursive step which does not correctly progress toward the base case. Both of these errors cause a stack overflow error, meaning that the recursive call resulted in an infinite loop and was therefore terminated.

#### **Tail Recursion**

Tail recursion is when the recursive call for the next cycle is the final statement in a method.

Tail end recursion is considered good practice whenever possible because it is easier to follow from a reader’s perspective and it can be optimized by modern compilers.

Compilers can recognize that a tail ended method has completed all the operations within that call. Since all the work is complete, the program doesn’t need to store the instance of that call, known as the call frame.

Modern compilers automatically recognize this and therefore perform tail call elimination, which eliminates all completed methods from the call stack.

Compiler’s use tail call elimination to simplify program execution and free up memory. The program stores the currently executed call frame.

Though right now we’ve only mentioned direct recursive calls, there are actually three ways to implement a recursive call – Direct, Indirect, and Anonymous.

#### **Types of recursion**

- Structural vs. Generative

- Direct, Indirect, and Anonymous Recursion

### 8. Assessment #1

    ./assignments/assessment-1-node-v1.js
