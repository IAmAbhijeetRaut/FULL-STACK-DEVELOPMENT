// Introduction to JavaScript comparison operators
// To compare two values, you use a comparison operator. The following table shows the comparison operators in JavaScript:
// < less than
// > greater than
// <= less than or equal to
// >= greater than or equal to
// == equal to
// != not equal to
// A comparison operator returns a Boolean value indicating that the comparison is true or not.

// Compare numbers
// If values are numbers, the comparison operators perform a numeric comparison.
let a = 10,
b = 20;

console.log(a >= b); // false
console.log(a == 10); // true

// Compare strings
// If the operands are strings, JavaScript compares the character codes numerically one by one in the string.
let name1 = 'alice',
name2 = 'bob';

let result_1 = name1 < name2;
console.log(result_1); // true
console.log(name1 == 'alice'); // true

// If JavaScript compares the character codes in the strings numerically, you may receive an unexpected result
let f1_1 = 'apple',
f2_1 = 'Banana';
let result_2 = f2_1 < f1_1;
console.log(result_2); // true

// Fix this by converting strings to lowercase or uppercase
let f1_2 = 'apple',
f2_2 = 'Banana';

let result = f2_2.toLowerCase() < f1_2.toLowerCase();
console.log(result); // false

// Compare a number with a value of another type
// If a value is a number and the other is not, the comparison operator will convert the non-numeric value into a number and compare them numerically.
console.log(10 < '20'); // true
console.log(10 == '10'); // true

// Compare an object with a non-object
// If a value is an object, the valueOf() method of that object is called to return the value for comparison. If the object doesn’t have the valueOf() method, the toString() method is called instead.
let apple = {
valueOf: function () {
return 10;
},
};

let orange = {
toString: function () {
return '20';
},
};
console.log(apple > 10); // false
console.log(orange == 20); // true

// Compare a Boolean with another value
// If a value is a Boolean value, JavaScript converts it to a number and compares the converted value with the other value; true is converted to 1 and false is converted to 0.
console.log(true > 0); // true
console.log(false < 1); // true
console.log(true > false); // true
console.log(false > true); // false
console.log(true >= true); // true
console.log(true <= true); // true
console.log(false <= false); // true
console.log(false >= false); // true

// In addition to the above rules, the equal (==) and not-equal(!=) operators also have the following rules.

// Compare null and undefined
// In JavaScript, null equals undefined. It means that the following expression returns true.
console.log(null == undefined); // true

// Compare NaN with other values
// If either value is NaN, then the equal operator(==) returns false.
console.log(NaN == 1); // false
console.log(NaN == NaN); // false
// The not-equal (!=) operator returns true when comparing...