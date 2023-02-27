// Introduction to the JavaScript String search() function
// The search() method accepts a regular expression and returns the index of the first match in a string:
// let index = str.search(regexp);

// In this syntax, the regexp is a regular expression. If you pass a non-RegExp into the method, it will convert that value to a RegExp.
// If the search() doesn’t find any match, it returns -1.

// JavaScript String search() method examples
// The following example uses the search() method to return the first occurrence of any capital letter:

let re_1 = /[A-Z]/;
let str_1 = 'hi There! How are you?';
let index_1 = str_1.search(re_1);

console.log('Log_1:', index_1);

// Output: 3
// It returns 3 which is the index of the capital letter T.

// The following example returns -1 because there is no number in the string:

let re_2 = /[0-9]/;
let str_2 = 'Hello, JavaScript!';
let index_2 = str_2.search(re_2);

console.log('Log_2:', index_2);

// Output: -1