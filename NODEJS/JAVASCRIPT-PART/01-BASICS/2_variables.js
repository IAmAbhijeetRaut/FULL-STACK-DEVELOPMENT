let name = 'John'; // this is a string and you can use single/double quotes or Backticks `` (ES6)
let score = 103; // this is a number
let bonus = 120; // this is a number
let score_2 = '100' // this is still a string 
let bonus_2 = '20'; // this is still a string

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
//let firstName = "AnotherName"; //  Redeclaring is not allowed in 'let' declared variables
firstName = "AnotherName"; // correct way of re-initializing it 
console.log("firstName : ",firstName);


//const - you cannot reassign any value to const variables
const firstName_2 = "Keanu";
//const lastName_2; // const declaration must be initialized // SyntaxError: Missing initializer in const declaration
// firstName_2 = "JohnWick"; //TypeError: Assignment to constant variable.
// The const keyword ensures that the variable it creates is read-only. However, it doesn’t mean that the
// actual value to which the const variable reference is immutable. 
const person = { age: 20 };
person.age = 30; // OK
console.log("Person Age : ",person.age); // 30
// so its just that you can change the value of a const variable without reassigning it in case of arrays and objects mostly
// In normal scenarios it wouldn't be possible 
let letVariable = 340;
const inspiredFromLet = letVariable;
console.log("letVariable : ", letVariable);
console.log("inspiredFromLet : ", inspiredFromLet);
// does changing letVariable change the variable inspiredFromLet
letVariable++;
console.log("After Change - letVariable : ", letVariable);
console.log("After Change - inspiredFromLet : ", inspiredFromLet);
/*  while const can prevent re-assignment of variables, it does not prevent modification of the 
properties and elements of objects and arrays declared with const. */
const obj = { name: 'John' };
obj.name = 'Jane'; // this is allowed and the value of obj.name is now 'Jane'
console.log("obj : ",obj);

const arr = [1, 2, 3];
arr[0] = 0; // this is allowed and the value of arr[0] is now 0
console.log("arr : ",arr);
//Nested objects and arrays declared with const can also be changed