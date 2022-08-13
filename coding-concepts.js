// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Echo 2022"
// console.log(cohort.split(""))

// a) Your answer: This will return ["E", "c", "h", "o", " ", "2", "0", "2", "2"]
// b) Verify and explain: ['E', 'c', 'h', 'o', ' ', '2', '0', '2', '2']

//The indexes in the array were split up with the .split method and the original array was returned. 


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: This will return "undefined" because line 22 is missing reuturn to the left of `Hello, ${name}!`
// b) Verify and explain: "undefined" was retuned because the function was not invoked utilizing return. When I reran the code with return `Hello, Learn Student!` it worked correctly.


// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map(number => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: This will return [8,10,12,14,16]
// b) Verify and explain: [8,10,12,14,16] was returned becasue .map iterated over the array and multiplied each number by 2 and returned the new array. 
// .map is a higher order function that lets you quickly iterate over an array


// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter(number => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: This will return [11,13,15]
// b) Verify and explain: [11,13,15] was returned because the array was filtered to return modulo 2 strict inequality to 0 and return a filtered array of only odd numbers. 
//.filter is a higher order function that will shorten an array and return the values that meet the condition. An empty array would return if the conditons were not met. 


// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: This will return "Javascript"
// b) Verify and explain: "Javascript" was returned because key value pair languages and "Javascript" were called on using .languages[0] in the console.log. "Javascript" is the "0" index of languages. 


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Echo",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: This will return "George" "Echo" 2022
// b) Verify and explain: Learn {student: 'George', cohort: 'Echo', year: 2022} was returned. When you pass a parameter to a class this will return a new object from the class.
//Classes are blueprints for objects. Classes are functions. Class functions contain both data and behavior. 
