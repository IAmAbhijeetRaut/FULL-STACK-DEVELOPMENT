// Arithmetic operators

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