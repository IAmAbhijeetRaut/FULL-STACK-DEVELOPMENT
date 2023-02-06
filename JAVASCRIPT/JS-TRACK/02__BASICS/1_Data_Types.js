var fullName = "Abhijeet Raut";
//how to name variables 
//fullName
//full-name
//full_name
//FullName


//Javascript Primitive datatypes



//Number ----------
let numberVariable_1 = 232;
console.log(numberVariable_1);
//JavaScript uses the number type to represent both integer and floating-point numbers.
let price = 10.03;
let discount = 0.098;
console.log("Price : ",price," Discount : ",discount);
// Note that JavaScript automatically converts a floating-point 
// number into an integer number if the number appears to be a whole number.
// The reason is that Javascript always wants to use less memory since a floating-point 
// value uses twice as much memory as an integer value.
let floatToIntegerVariable = 200.00; // finally it's evaluated as a whole number
//NaN - NaN stands for Not a Number. It is a special numeric value that indicates an invalid number.
console.log('a'/34);
//any operation with NaN returns NaN
console.log(NaN / 2);
//The NaN does not equal any value, including itself.
console.log(NaN == NaN); // false



//boolean ----------
// true and false is in lowercase
let booleanVariable_1 = true;
let booleanVariable_2 = false;
console.log(booleanVariable_1);
console.log(booleanVariable_2);
// To convert a value of another data type into a boolean value, you use the Boolean() function.
console.log(Boolean('Hi'));// true
console.log(Boolean(''));  // false

console.log(Boolean(20));  // true
console.log(Boolean(Infinity));  // true
console.log(Boolean(0));  // false

console.log(Boolean({foo: 100}));  // true on non-empty object
console.log(Boolean(null));// false



//string ----------

let stringVariable_1 = "Hello"; // double quotes
let stringVariable_2 = 'Hello'; // single quotes
let stringVariable_3 = `Hello`; // Backticks
console.log(stringVariable_1);
console.log(stringVariable_2);
console.log(stringVariable_3);
//Javascript strings are immutable - see below example
let str_1 = 'JavaScript';
let str_2 = str_1;
str_1 = str_1 + ' String';
console.log("After concatenation value of str_2 is : ",str_2);
// In this above example:
// First, declare the str variable and initialize it to a string of 'JavaScript'.
// Second, use the + operator to combine 'JavaScript' with ' String' to make its value as 'Javascript String'.
// Behind the scene, the JavaScript engine creates a new string that holds the new string 'JavaScript String' and destroys the original strings 'JavaScript' and ' String'.

//undefined ----------
let counter;
console.log(counter);
console.log(typeof counter);
console.log(typeof undeclaredVariable); // typeof operator used on undeclared variable



//null ----------
let obj_1 = null;
console.log(obj_1);
//known bug in javascript A proposal to fix this was proposed but rejected. 
//The reason was the that fix would break a lot of existing sites.
console.log(typeof obj_1); 
//JavaScript defines that null is equal to undefined 
console.log(null==undefined); // true



//symbol


