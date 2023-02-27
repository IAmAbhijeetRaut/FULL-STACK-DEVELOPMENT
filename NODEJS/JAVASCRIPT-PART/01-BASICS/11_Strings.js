// JavaScript strings are primitive values. Also, strings are immutable.
// To create literal strings, you use either single quotes (') or double quotes (")
let str_1 = 'Hi';
let greeting = "Hello";

// ES6 introduced template literals that allow you to define a string backtick (`) characters:
let name = `John`;

// Also, you can place the variables and expressions inside a template literal.
// JavaScript will replace the variables with their value in the string.
// This is called string interpolation.
let name_2 = 'John';
let message = `Hi, I'm ${name_2}.`;

console.log(message);
// Output: Hi, I'm John.

// To escape special characters, you use the backslash \ character.
let str_2 = 'I\'m a string!';

// The length property returns the length of a string:
let str_3 = "Good Morning!";
console.log(str_3.length); // 13

// Accessing characters
let str_4 = "Hello";
console.log(str_4[0]); // "H"
console.log(str_4[str_4.length - 1]); // "o"

// Concatenating strings via + operator
let name_3 = 'John';
let str_5 = 'Hello ' + name_3;
console.log(str_5); // "Hello John"

// If you want to assemble a string piece by piece, you can use the += operator:
let className = 'btn';
className += ' btn-primary'
className += ' none';
console.log(className);
// Output: btn btn-primary none

// Converting values to string
let n = 10;
let str_6 = String(n);
let nn = 10.1;
let str_7 = nn.toString();

// The toString() method doesn’t work for undefined and null.
let str_8 = String(undefined);
let str_9 = String(null);

// When you convert a string to a boolean, you cannot convert it back.
let status = false;
let str_10 = status.toString(); // "false"
let back = Boolean(str_10); // true

// Comparing strings
let result_1 = 'a' < 'b';
console.log(result_1); // true

let result_2 = 'a' < 'B';
console.log(result_2); // false

/*
Output:
Hi, I'm John.
13
H
o
Hello John
btn btn-primary none
true
false
*/