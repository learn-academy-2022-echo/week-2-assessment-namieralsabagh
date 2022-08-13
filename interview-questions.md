# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?  

Your answer: Paramenters are variables or placeholders and arguments are passed into the function with parenthesis. For example:

const num = 87
cost addThree = (number) {
    return number + 3
}
console.log(addThree(num))

In this example, const num = 87 is the argument that will be passed into the function when it is invoked. The parameter (number) is simply the placeholder.

Researched answer: Arguments are the values that are being passed into the function. Functions can have parameters in place of arguments unless it is a higher order function that has already been defined. If the arguments are not defined, when invoked it will return "undefined"

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The built in method .map takes an array and returns a new array with the requested values. 

Researched answer: The built in method .map is a higher order function that has three predefined parameters, value, index and array. This creates a new array by iterating over the array and returning the requested defined values. For example;

const array = [3, 7, 12, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [6, 14, 24, 32]

In this example we take an array, iterate over it with .map and multiply each number by two returning a new array. 

3. What is the difference between map and filter? 

Your answer: The higher order functions .map and .array are different because .map iterates over the array and returns a new array and .flter iterates over the array and returns a shorter array. 

Researched answer: Filter will remove unwanted elements that don't return truthy using a set of specifications and return a new array that is shorter. Map will modify every element in the array and return a new array with the new values that have been modified. 

4. What is the DOM?

Your answer: The DOM stands for Document Object Model and uses the tree method. I recognize the acronym but I am still learning what else it means and I can look up more information in my syllabus and google. 

Researched answer: The DOM or Document Object Model is a programming interface that represents the document. The tree branches in the DOM are nodes and each node contains an object. This method allows for programmatic tree access and can change the content, style and structure of a web document. 

5. What is React? Why would you use it? 

Your answer: React is a javascript library that was created by Meta.  I would use React to develop a web page or mobile application. React allows me to view the page or application on my local server and see how what I am building would look and perform. 

Researched answer: React is an open-sourced, front-end javascript library that is free and used for building UI. It can be used to develop a mobile, single page or server-renderd application. React was created and is maintained by Meta. 

6. STRETCH: What is hoisting in JavaScript?

Your answer: I recognize the word but I do not recall the definition. I will do some research and check my syllabus and google to find the answer. 

Researched answer: Hoisting is moving the declaration of functions, classes and variables to the top of the scope before executing the code.  

An example of this is;

dogName("Gigi");

function dogName(name) {
    console.log("My dog's name is ${name}");
}

A not hoisted example would be;

function dogName(name) {
    console.log("My dog's name is ${name}");
    }

    dogName("Gigi");

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: User Stories are a description of a specific feature of an application, viewed from the perspective of one of the users. 

2. Spread operator: A spread operator is the new addition to the set of javascript. It makes shallow copies of objects in javascript and makes the code concise and makes it more readable. 

3. React props: React props are arguments passed into components of React. These props are passed via HTML. 

4. Conditional rendering: Conditional rendering are created distinctive components that encapsulate needed behavior, similar to conditions in javascript. Examples of this are;

function UserReturns(props) {
  return <h1>Welcome back Echo Cohort!</h1>;
}

function NewUserGreeting(props) {
  return <h1>Please sign up.</h1>;
}


5. DOM events: DOM events are signals that can be triggered by user interactions or also by the browser. These signals are saying something has or is occuring. 
