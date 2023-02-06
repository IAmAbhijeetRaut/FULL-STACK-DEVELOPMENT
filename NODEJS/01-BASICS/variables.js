let name = 'John'; // this is a string and you can use single/double quotes or Backticks `` (ES6)
let score = 103; // this is a number
let bonus = 120;
let score_2 = '100'
let bonus_2 = '20';

console.log(score) // it is not mandatory to provide a semicolon at the end // OUTPUT: 103

let totalScore_1 = score + bonus; // actual addition takes place
console.log("totalScore_1 : ",totalScore_1) // 223

let totalScore_2 = score_2 + bonus_2; // concatenation occurs
console.log("totalScore_2 : ",totalScore_2); //10020

let firstName = "John";
let lastName = "Doe";
let fullName = firstName+" * "+lastName;
console.log(fullName); // OP : John * Doe
console.log(firstName +" "+ lastName); // we use " " with +  operator to add a space // OP : John Doe

//Changing the variable
//let firstName --> Redeclaring is not allowed in 'let' declared variables
firstName = "AnotherName"; // correct way of re-initializing it 
console.log("firstName : ",firstName);

//const - you cannot reassign any value to const variables
const firstName_2 = "Keanu";
//const lastName_2; // const declaration must be initialized // SyntaxError: Missing initializer in const declaration
// firstName_2 = "JohnWick"; //TypeError: Assignment to constant variable.
