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