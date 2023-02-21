//Logical operators in JavaScript

// The Logical NOT operator (!)
// The ! operator can be applied to a single value of any type, not just a Boolean value.
// When you apply the ! operator to a boolean value, the ! returns true if the value is false and vice versa.
let eligible_1 = false,
required_1 = true;

console.log(!eligible_1);
console.log(!required_1);

// When you apply the ! operator to a non-Boolean value, the ! operator first converts the value to a boolean value and then negates it.
console.log(!undefined); // true
console.log(!null); // true
console.log(!20); // false
console.log(!0); // true
console.log(!NaN); // true
console.log(!{}); // false
console.log(!''); // true
console.log(!'OK'); // false
console.log(!false); // true
console.log(!true); // false

// Double-negation (!!)
// The !! uses the logical NOT operator (!) twice to convert a value to its real boolean value.
// The result is the same as using the Boolean() function.
let counter = 10;
console.log(!!counter); // true

// The Logical AND operator (&&)
// The following expression uses the && operator:
// If a can be converted to true, the && operator returns the b; otherwise, it returns the a.
let eligible = false,
required = true;

console.log(eligible && required); // false

// The result of the && operator is true only if both values are true, otherwise, it is false.
let eligible_2 = true,
required_2 = true;

console.log(eligible_2 && required_2); // true

// The && operator is short-circuited. It means that the && operator evaluates the second value only if the first one doesn’t suffice to determine the value of an expression.
let b_1 = true;
let result_1 = b_1 && (1 / 0);
console.log(result_1); // Infinity

let b = false;
let result_2 = b && (1 / 0);
console.log(result_2); // false

// The following expression uses multiple && operators:
let result = value1 && value2 && value3;

// Example for Logical OR assignment operator (||=):
// The logical OR assignment operator (||=) assigns the right operand to the left operand if the left operand is falsy.
// let title_1;
// title_1 ||= 'untitled';
// console.log(title_1); // Output: untitled

// // Another example for Logical OR assignment operator (||=):
// let title_2 = 'JavaScript Awesome';
// title_2 ||= 'untitled';
// console.log(title_2); // Output: 'JavaScript Awesome'

// Example for Logical AND assignment operator (&&=):
// The logical AND assignment operator (&&=) only assigns y to x if x is truthy.
// let person = {
// firstName: 'Jane',
// lastName: 'Doe',
// };
// person.lastName &&= 'Smith';
// console.log(person); // Output: {firstName: 'Jane', lastName: 'Smith'}

// // Example for nullish coalescing assignment operator (??=):
// // The nullish coalescing assignment operator (??=) only assigns y to x if x is nullish.
// let user = {
// username: 'Satoshi'
// };
// user.nickname ??= 'anonymous';
// console.log(user); // Output: {username: 'Satoshi', nickname:'anonymous'}

//The Above Code for logical OR , logical AND is commented because it is not supported by Node Versions < 15.0, only 15.0 and aboce versions provide support for it.


/*
Key Points:
- ES2021 introduces three logical assignment operators: Logical OR assignment operator (||=), Logical AND assignment operator (&&=), and Nullish coalescing assignment operator (??=).
- The logical OR assignment operator (||=) assigns the right operand to the left operand if the left operand is falsy.
- The logical AND assignment operator (&&=) only assigns y to x if x is truthy.
- The nullish coalescing assignment operator (??=) only assigns y to x if x is nullish.
- The logical OR assignment operator (||=) is equivalent to the logical OR operator (||).
- The logical AND assignment operator (&&=) is equivalent to the logical AND operator (&&).
- The nullish coalescing assignment operator (??=) is equivalent to the nullish coalescing operator (??).
- All three logical assignment operators short-circuit, meaning they only perform an assignment when the left operand is falsy for logical OR assignment operator (||=), truthy for logical AND assignment operator (&&=), and nullish for nullish coalescing assignment operator (??=).
*/