// Arithmetic operators | Remainder Operator | Assignment Operator

//Assignment Operator
// The following code initializes a variable named counter to zero
let counter = 0;
// The following code increases the value of the counter variable by one
counter = counter + 1;
// The following code uses the shorthand version of the previous line of code
counter += 1;
// The following table shows shorthand versions of other arithmetic operators combined with the assignment operator
/*
Operator Meaning Description
a = b a = b Assigns the value of b to a
a += b a = a + b Adds the value of b to a
a -= b a = a - b Subtracts the value of b from a
a *= b a = a * b Multiplies the value of a by b
a /= b a = a / b Divides the value of a by b
a %= b a = a % b Assigns the remainder of a divided by b to a
a &= b a = a & b Assigns the bitwise AND of a and b to a
a |= b a = a | b Assigns the bitwise OR of a and b to a
a ^= b a = a ^ b Assigns the bitwise XOR of a and b to a
a <<= b a = a << b Assigns the value of a left-shifted by b to a
a >>= b a = a >> b Assigns the value of a right-shifted by b to a (preserves sign)
a >>>= b a = a >>> b Assigns the value of a right-shifted by b to a (does not preserve sign)
*/
// The following code demonstrates assigning a single value to multiple variables using chained assignment operators
let a = 10, b = 20, c = 30;
a = b = c; // all variables are 30
// In the previous line of code, JavaScript first assigns the value of c to b, then assigns the value of b to a, so all three variables end up with the value 30.




//Addition Operator 
// adds numbers annd concatenates strings
// If both values are strings, it concatenates the second string to the first one.
// If one value is a number and other is a string then it converts num to string and concatenates the string so end result is a string
console.log("Addition-1: ",(10+20));
console.log("Concatenation-1 : ",("Hello"+" and Welcome to This Repo"));
console.log("Num and String concat result : ",(15+"Batman")); // 15 converts to string and concatenates with string so end result is a string

let string1 = "Awesome";
let string2 = "Fantastic";
let num1 = 34.78;
let string3 = '3343.555'

console.log("string1 + string2 = ",(string1 + string2)); // end results starts with string1 at the first
console.log("string2 + string1 = ",(string2 + string1));// so addition is evaluated from left to right that is why string on left comes first in end result
console.log("string1 + num1 = ",(string1 + num1)); // num1 is converted to string
console.log("string3 + num1 = ",(string3 + num1)); // num1 converted to string
console.log(+1);// logs 1 // unary '+' doesnt do anything to numbers
console.log(+true," ",+false); //logs -> 1 0 // unary '+' converts non-numbers to numbers
console.log(+string1); // unary + doesnt convert string to a number
console.log(+string3); // OP is 3343.55, so from this we can conclude that unary '+' first parses 
//the value to a number and if its not a number it results to NaN
// The unary plus operator + applied to a single value, doesn’t do 
// anything to numbers.But if the operand is not a number, the unary plus converts it into a number.



//Subtraction Operator
//IMP points related to subtraction operator while addition of different types of values
/* 
0.If a value is a string, a boolean, null, or undefined, the JavaScript engine will:
  a) First, convert the value to a number using the Number() function.
  b) Second, perform the subtraction.
1. if either value is a NaN(Not a Number) or undefined after parsing then end result is NaN
2. Infinity + Infinity = NaN
3. -Infinity + ( -Infinity) = – Infinity | AND |  -Infinity – ( -Infinity) = -Infinity | AND | Infinity - Infinity = Infinity
4. +0 – (+0) = +0 | AND | +0 – (-0) = -0 | AND | -0 – (-0) = +0
*/
let undefined_1;
console.log("1 - 3",(1-3));
console.log(" 10 - \"Hello\" ",(10 - "Hello"));
console.log(" \"floxinoxinihilipilification\" - \"What?\" ",("floxinoxinihilipilification"-"What?"));
console.log("\"floxinoxinihilipilification\" - undefined_1 ",("floxinoxinihilipilification"-undefined_1));



//Multiplication and Division Operator
/* 
    1. If either value is not a number, the JavaScript engine implicitly converts it into a number 
       using the Number() function and performs the multiplication.
    2. If either value is NaN, the result is NaN
*/

console.log(" '60' * 3 = ",("60"*3));//after parsing "60" by the Number() function it become a numeral 60
console.log("'Hello' * 99",("Hello"*99));//During parsing i.e. internally when NUmber() gets called on each value, if either value is NaN then result will be NaN
console.log(" '60' / 3 = ",("60"/3));//after parsing "60" by the Number() function it become a numeral 60
console.log("'Hello' / 99",("Hello"/99));//During parsing i.e. internally when NUmber() gets called on each value, if either value is NaN then result will be NaN



//Using JavaScript arithmetic operators with objects
//If a value is an object, the JavaScript engine will call the valueOf() method of the object to 
//get the value for calculation. 
let energy = {
    valueOf() {
      return 100;
    },
  };
  
  let currentEnergy = energy - 10;
  console.log("currentEnergy = energy - 10 then currentEnergy = ",currentEnergy);
  
  currentEnergy = energy + 100;
  console.log("currentEnergy = energy + 100 then currentEnergy = ",currentEnergy);
  
  currentEnergy = energy / 2;
  console.log("currentEnergy = energy / 2 then currentEnergy = ",currentEnergy);
  
  currentEnergy = energy * 1.5;
  console.log("currentEnergy = energy * 1.5 then currentEnergy = ",currentEnergy);
  


//Remainder Operator

let dividend = 5;
let divisor = 2;
let remainder = dividend % divisor;
console.log(remainder); // 1

// The remainder operator returns the remainder left over when one value is divided by another value.
// The syntax of the remainder operator is dividend % divisor, and the equation for the remainder is dividend = divisor * quotient + remainder, where |remainder| < |divisor|.
// In this equation, the dividend, divisor, quotient, and remainder are all integers. The sign of the remainder is the same as the sign of the dividend.

// Here are some examples of using the remainder operator:
// 1) Using the remainder operator with positive dividend example
remainder = 5 % -2;
console.log(remainder); // 1

remainder = 5 % 2;
console.log(remainder); // 1

// 2) Using the remainder operator with negative dividend example
remainder = -5 % 3;
console.log(remainder); // -2

remainder = -5 % -3;
console.log(remainder); // -2

// 3) Using the remainder operator special values
remainder = Infinity % 2;
console.log(remainder); // NaN

remainder = 10 % 0;
console.log(remainder); // NaN

remainder = Infinity % Infinity;
console.log(remainder); // NaN

remainder = 10 % Infinity;
console.log(remainder); // 10

remainder = 0 % 10;
console.log(remainder); // 0

remainder = '10' % 3;
console.log(remainder); // 1

// You can also use the remainder operator to check if a number is odd:
let num = 13;
let isOdd = num % 2;

// To define a function that returns true if a number is odd or false otherwise:
function isOdd(num) {
return num % 2;
}

// Or using an arrow function in ES6:
const isOdd = (num) => num % 2;

// In JavaScript, the remainder operator (%) is not the modulo operator. To get a modulo in JavaScript, you can use the following expression:
const mod = (dividend, divisor) => ((dividend % divisor) + divisor) % divisor;

// If the division and divisor have the same sign, the remainder and modulo operators return the same result. Otherwise, they return different results.
// For example:
console.log('remainder:', 5 % 3); // 2
console.log('modulo:', mod(5, 3)); // 2

console.log('remainder:', -5 % 3); // -2
console.log('modulo:', mod(-5, 3)); // 1

// Use the JavaScript remainder operator (%) get the the remainder of a value divided by another value.






















/* 
Operator Precedence
Precedence       Name                 Sign
14	          unary plus               +
14	          unary negation           -
13	          exponentiation           **
12	          multiplication           *
12	          division                 /
11	          addition                 +
11	          subtraction              -
2	          assignment               =

*/