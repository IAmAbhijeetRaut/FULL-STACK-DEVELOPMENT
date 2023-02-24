// == (equality operator) checks for value

// === (identity operator)  checks type & value as well - 
// ===  is a binary operator that compares two values for strict equality without performing type coercion. 

// Section-1
let var_1 = 11;
let var_2 = 11;
let var_3 = 24.89;

console.log(`var_1 == var_2 : ${var_1 == var_2}`); // true
console.log(`var_1 == var_3 : ${var_1 == var_3}`); // false
console.log(`var_2 == var_3 : ${var_2 == var_3}`); // false

console.log(`var_1 === var_2 : ${var_1 === var_2}`); // true
console.log(`var_1 === var_3 : ${var_1 === var_3}`); // false
console.log(`var_2 === var_3 : ${var_2 === var_3}`); // false
console.log();

// Section-2
let var_4 = "Hello";
let var_5 = "Hello";
let var_6 = "heLLO";

console.log(`var_4 == var_5 : ${var_4 == var_5}`); // true
console.log(`var_4 == var_6 : ${var_4 == var_6}`); // false
console.log(`var_5 == var_6 : ${var_5 == var_6}`); // false

console.log(`var_4 === var_5 : ${var_4 === var_5}`); // true
console.log(`var_4 === var_6 : ${var_4 === var_6}`); // false
console.log(`var_5 === var_6 : ${var_5 === var_6}`); // false
console.log();

// Section-3
let obj_1 = {};
let obj_2 = {};
let obj_3 = { "name": "Raphael", age:55};
let obj_4 = { "name": "Raphael", age:55};
let obj_5 = { "name": "Ryan", age:65};
let obj_6 = { "name": "Rango"};
let obj_7 = obj_3;

console.log(`obj_1 == obj_2 : ${obj_1 == obj_2}`); // false
console.log(`obj_3 == obj_4 : ${obj_3 == obj_4}`); // false
console.log(`obj_4 == obj_5 : ${obj_4 == obj_5}`); // false
console.log(`obj_5 == obj_6 : ${obj_5 == obj_6}`); // false
console.log(`obj_3 == obj_7 : ${obj_3 == obj_7}`); // true


console.log(`obj_1 === obj_2 : ${obj_1 === obj_2}`); // false
console.log(`obj_1 === obj_3 : ${obj_1 === obj_3}`); // false
console.log(`obj_2 === obj_3 : ${obj_2 === obj_3}`); // false
console.log(`obj_3 === obj_4 : ${obj_3 === obj_4}`); // false
console.log(`obj_3 === obj_5 : ${obj_3 === obj_5}`); // false
console.log(`obj_3 === obj_6 : ${obj_3 === obj_6}`); // false
console.log(`obj_3 === obj_7 : ${obj_3 === obj_7}`); // true
console.log(`obj_4 === obj_5 : ${obj_4 === obj_5}`); // false
console.log(`obj_4 === obj_6 : ${obj_4 === obj_6}`); // false
console.log(`obj_5 === obj_6 : ${obj_5 === obj_6}`); // false
console.log();

// Section-4
let undef_1;
let undef_2;

console.log(`undef_1 == undef_2 : ${undef_1 == undef_2}`); // true

console.log(`undef_1 === undef_2 : ${undef_1 === undef_2}`); // true
console.log();


// Section-5
let nullVar_1 = null;
let nullVar_2 = null;

console.log(`nullVar_1 == nullVar_2 : ${nullVar_1 == nullVar_2}`); // true

console.log(`nullVar_1 === nullVar_2 : ${nullVar_1 === nullVar_2}`); // true
console.log();

// Comparisons between different sections
console.log(`var_1 === obj_1 : ${var_1 === obj_1}`); // false
console.log(`var_1 === obj_3 : ${var_1 === obj_3}`); // false
console.log(`obj_1 === obj_2 : ${obj_1 === obj_2}`); // false
console.log(`obj_3 === obj_4 : ${obj_3 === obj_4}`); // false
console.log(`obj_4 === obj_5 : ${obj_4 === obj_5}`); // false
console.log(`undef_2 === nullVar_1 : ${undef_2 === nullVar_1}`); // false
console.log(`obj_6 === nullVar_1 : ${obj_6 === nullVar_1}`); // false
console.log(`var_4 === obj_3.name : ${var_4 === obj_3.name}`); // false
console.log(`obj_2 === undef_1 : ${obj_2 === undef_1}`); // false


//Note  : 
// 1 - the === checks the type as well as the value or to be more precise it checks if the value is same and 
// checks whether the data is pointing to the same memory location or same object in the memory location
//2 - the === and the == check i.e. in case of both the operators returns 'true' if both the sides 
// are undefined/null and even in the case where one side is undef and other side is null
//3 - the == operator checks only for values