// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

    const num1 = 15
    //Expeceted output: "15 is divisible by three"
    const num2 = 0
    //Expected output: "0 is divisible by three"
    const num3 = -7
    //Expected output: "-7 is not divisible by three"

    describe("divisibleByThree", (num) => {
        it("takes a number as an argument and decides if the number is evenly divisible by three", () => {
        const num1 = 15
        //Expeceted output: "15 is divisible by three"
        const num2 = 0
        //Expected output: "0 is divisible by three"
        const num3 = -7
        //Expected output: "-7 is not divisible by three"
    expect(divisibleByThree(num1)).toEqual("15 is divisible by three")
    expect(divisibleByThree(num2)).toEqual("0 is divisible by three")
    expect(divisibleByThree(num3)).toEqual("-7 is not divisible by three")

})
})

//ReferenceError: divisibleByThree is not defined


// b) Create the function that makes the test pass.

//PseudoCode:
// Declare a function named divisibleByThree
// Set the parameter to num
// Use modulo to evaluate if each number is divisble by three
// Return "15 is divisible by three", "0 is divisible by three" and "-7 is not divisible by three"

 const divisibleByThree = (num) => {
    if(num % 3 === 0) {
        return `${num} is divisible by three`
    } else (num % 3 !== 0)
    return `${num} is not divisible by three`
 }

//Tests:   divisibleByThree

// ✓ takes a number as an argument and decides if the number is evenly divisible by three (2 ms)

//   Tests:       1 passed, 1 total



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe("upperCase" , () => {
    it("takes in an array of words and returns an array with all the words capitalized", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
     // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
     const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]  
    expect(upperCase(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]) 
    expect(upperCase(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]) 
    })
})

// ReferenceError: upperCase is not defined

// b) Create the function that makes the test pass.

//PsuedoCode
//Declare a function called upperCase
//Set the parameter to the array
// Utilize .map to iterate over the words and utilize .toUpperCase to capitalize the first letter and using .charAt(0) to located the first letter

const upperCase = (arrayOfRandomWords) => {
    return arrayOfRandomWords.map(noun => {
    return noun.charAt(0).toUpperCase() + noun.substring(1).toLowerCase()
    })
}

// Tests:       upperCase

// ✓ takes in an array of words and returns an array with all the words capitalized (1 ms)

//   2 passed, 2 total



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe("indexVowel", () => {
    it("takes in a string and logs the index of the first vowel", () => {
        const vowelTester1 = "learn"
        // Expected output: 1
        const vowelTester2 = "academy"
        // Expected output: 0
        const vowelTester3 = "challenges"
        // Expected output: 2  
        expect(indexVowel(vowelTester1)).toEqual(1)
        expect(indexVowel(vowelTester2)).toEqual(0)
        expect(indexVowel(vowelTester3)).toEqual(2)
    })
})

// ReferenceError: indexVowel is not defined

// b) Create the function that makes the test pass.

//PsuedoCode:
//Declare a function called indexVowel
//Set parameter to stringOfIndexVowel
//Utilize index of to find the vowel and index of the first vowel
//Iterate to check each character in the string
//Utilize conditional statements to compare each vowel
//Return the index

const indexVowel = (stringOfIndexVowel) => {
    for(let i=0; i<stringOfIndexVowel.length; i++) {
        let indexOfFirstVowel = stringOfIndexVowel[i]
        if(indexOfFirstVowel === "a" || indexOfFirstVowel === "e" || indexOfFirstVowel === "i" || indexOfFirstVowel === "o" || indexOfFirstVowel === "u")
        return i
    }
}

//Tests:        indexVowel

// ✓ takes in a string and logs the index of the first vowel

// 3 passed, 3 total