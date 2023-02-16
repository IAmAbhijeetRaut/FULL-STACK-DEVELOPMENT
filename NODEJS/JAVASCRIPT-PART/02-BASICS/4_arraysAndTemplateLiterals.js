// datatype - Array
// JavaScript arrays are resizable and can contain a mix of different data types.
// JavaScript array-copy operations create shallow copies. 


//create an array 
// type1 -> let scores = new Array(); 
// type2 -> let scores = Array(10); // array with initial size defined, you can omit the new operator
// type3 -> let scores = new Array(1, 2, 3); // create an array with three numbers 1,2 3
// type4 -> let arrayName = [element1, element2, element3, ...]; //Most preferred way 

const superHeroes = ['Iron Man', 'Spiderman', 'Capt. America'];
const items = [
    { name: "Bike", price: 100 },
    { name: "TV", price: 200 },
    { name: "Album", price: 300 },
    { name: "Book", price: 400 },
    { name: "Phone", price: 500 },
    { name: "Laptop", price: 600 },
    { name: "Computer", price: 200 },
    { name: "Watch", price: 300 },
    { name: "Smartphone", price: 100 },
  ]; //  this is an array of objects

//Accessing array elements
console.log(superHeroes); 
console.log(superHeroes[0]); // print first element
console.log(superHeroes[superHeroes.length-1]); // print last element
console.log(superHeroes[superHeroes.length]); // undefined

//Adding element to an array
superHeroes.push("Batman"); // add at last position
superHeroes[7] = "Doctor Strange"; // add at specific position
superHeroes.unshift('Black Adam'); // add at first position
console.log("After all add operations ",superHeroes);

//Removing element from the array
let lastElement = superHeroes.pop(); // Remove last element and return the element
let firstElement = superHeroes.shift() // Remove element from first position 
superHeroes.splice(2,1); // 2 -> indicates we want to start deleting from 3rd element and 1 -> is the total elements to be deleted from that index
// In above method first argument is exclusive means deletion will start from 3rd element
console.log("After all remove operations ",superHeroes)


//Array elements are object properties in the same way that toString is a property
console.log(Object.keys(superHeroes));

//Iterating Arrays
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//3 different ways to iterate over an array
//Way-1 : Using traditional for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//Way-2 : Advanced For Loop or For-of Loop
for (const value of arr) {
  console.log(value);
}
//Way-3 : Array.forEach()
arr.forEach(function(element) {
  console.log(element);
});


//Sparse Arrays
const a = Array(5); // [ <5 empty items> ]

// Consecutive commas in array literal:
const b = [1, 2, , , 5]; // [ 1, 2, <2 empty items>, 5 ]

// Directly setting a slot with index greater than array.length:
const c = [1, 2];
c[4] = 5; // [ 1, 2, <2 empty items>, 5 ]

// Elongating an array by directly setting .length:
const d = [1, 2];
d.length = 5; // [ 1, 2, <3 empty items> ]

// Deleting an element:
const e = [1, 2, 3, 4, 5];
delete e[2]; // [ 1, 2, <1 empty item>, 4, 5 ]

// In some operations, empty slots behave as if they are filled with undefined.
const arr_3 = [1, 2, , , 5]; // Create a sparse array

// Indexed access
console.log(arr_3[2]); // undefined

// For...of
for (const i of arr_3) {
  console.log(i);
}
// Logs: 1 2 undefined undefined 5

// Spreading
const another = [...arr_3]; // "another" is [ 1, 2, undefined, undefined, 5 ]


// Template Literals : 
//1 - Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings,
//string interpolation with embedded expressions, and special constructs called tagged templates. 
//2 - Template literals do not print undefined variables or the undefined keyword, resulting in an 
//empty space instead.
//3 - Template literals are a feature introduced in ECMAScript 6 (ES6), so older browsers may 
//not support them.

// Syntax
// `string text`

// `string text line 1
//  string text line 2`

// `string text ${expression} string text`

// tagFunction`string text ${expression} string text`

//if you need to escape a dollar sign or backtick or whatever then just use backslash before it.

let variable_1 = "Hello";
let variable_2 = `${variable_1}`; // Template literal -> `${variable_1}`
console.log(`variable_1 = ${variable_1}`); // Template literal -> `variable_1 = ${variable_1}`
console.log(`variable_2 = ${variable_2}`); // Template literal -> `variable_2 = ${variable_2}`
console.log(`variable_1 = ${variable_1}
             variable_2 = ${variable_2}`); //new line and spaces will be considered

//Tagged Templates : 
// Tags allow you to parse template literals with a function. The first argument of a tag function contains an array of string values.
// The remaining arguments are related to the expressions.

const person = "Mike";
const age = 28;

function myTag(strings, personExp, ageExp) {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "
  const str2 = strings[2]; // "."

  const ageStr = ageExp > 99 ? "centenarian" : "youngster";

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person} is a ${age}.`; 
// In above template literal : 'That', 'is', 'a' are the elements of string array passed to tag function
// In above template literal : ${person} and ${age} are the other 2 arguments i.e. personExp & ageExp respectively

console.log(output);
// That Mike is a youngster.
