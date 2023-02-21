// The nullish coalescing operator (??) accepts two values and returns the second value if the first one is null or undefined.
// The nullish coalescing operator is equivalent to if(result === null || result === undefined)
//const result_1 = value1 ?? value2;

// Example 1: Using the nullish coalescing operator to return the second value when the first one is null
const name_1 = null ?? 'John';
console.log(name_1); // 'John'

// Example 2: Using the nullish coalescing operator to return the second value when the first one is undefined
const age = undefined ?? 28;
console.log(age);//28

// Example 3: Using the logical OR operator (||) to assign a default value to a variable
// The variable count is undefined and is coerced to false, therefore the result_1 is 1
let count_1;
let result_2 = count_1 || 1;
console.log(result_2); // 1

// Example 4: Using the logical OR operator (||) to assign a default value to a variable
// The variable count is 0, which is coerced to false, therefore the result is 1
let count = 0;
let result_3 = count || 1;
console.log(result_3); // 1

// The nullish coalescing operator is short-circuited and does not evaluate the second value if the first operand is neither undefined nor null
let result_4 = 1 ?? console.log('Hi');
// The second expression is not evaluated because the first value is 1, which is not null or undefined

let result_5 = undefined ?? console.log('Hi');
// The second expression is evaluated because the first value is undefined
// Output: 'Hi'

// Wrapping the expression on the left of the ?? operator in parentheses explicitly specifies the operator precedence
const result_6 = (null || undefined) ?? 'OK';
console.log(result_6); // 'OK'

// This code block demonstrates how to use the exponentiation operator (**) in JavaScript to raise a number to the power of an exponent.

// Using the Math.pow() method:
let result = Math.pow(2,2);
console.log(result); // 4

result = Math.pow(2,3);
console.log(result); // 8

// Using the exponentiation operator (**):
result = 2 ** 2;
console.log(result); // 4

result = 2 ** 3;
console.log(result); // 8

// Using the exponentiation operator (**) with values of the bigint type:
result = 2n ** 3n;
console.log(result); // 8n

// Using the exponentiation operator (**) in the infix notation:
let x = 2;
x **= 4;
console.log(x); // 16

// Using parentheses to disambiguate operator precedence:
result = (-2)**3;
console.log(result); // -8

// Note that JavaScript does not allow you to put a unary operator immediately before the base number.

// In this tutorial, we learned how to use the JavaScript ternary operator to make our code more concise.

// Example 1: Using the ternary operator in place of an if...else statement
let age_1 = 18;
let message_1;

age_1 >= 16 ? (message_1 = 'You can drive.') : (message_1 = 'You cannot drive.');

console.log(message_1);

// Example 2: Using the ternary operator in an expression
let age_2 = 18;
let message_2;

message_2 = age >= 16 ? 'You can drive.' : 'You cannot drive.';

console.log(message_2);

// Syntax of the ternary operator:
// condition ? expressionIfTrue : expressionIfFalse;
