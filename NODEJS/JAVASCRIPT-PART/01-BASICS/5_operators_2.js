// The Logical NOT operator (!)
// JavaScript uses an exclamation point ! to represent the logical NOT operator.
// The ! operator can be applied to a single value of any type, not just a Boolean value.
// When you apply the ! operator to a boolean value, the ! returns true if the value is false and vice versa.

let eligible_1 = false,
required_1 = true;

console.log(!eligible_1);
console.log(!required_1);

// Output: true false

// When you apply the ! operator to a non-Boolean value.
// The ! operator first converts the value to a boolean value and then negates it.
// The following example shows how to use the ! operator:

// !a

// The logical ! operator works based on the following rules:
// If a is undefined, the result is true.
// If a is null, the result is true.
// If a is a number other than 0, the result is false.
// If a is NaN, the result is true.
// If a is an object, the result is false.
// If a is an empty string, the result is true. In the case a is a non-empty string, the result is false

// The following demonstrates the results of the logical ! operator when applying to a non-boolean value:

console.log(!undefined); // true
console.log(!null); // true
console.log(!20); //false
console.log(!0); //true
console.log(!NaN); //true
console.log(!{}); // false
console.log(!''); //true
console.log(!'OK'); //false
console.log(!false); //true
console.log(!true); //false

// Double-negation (!!)
// Sometimes, you may see the double negation (!!) in the code.
// The !! uses the logical NOT operator (!) twice to convert a value to its real boolean value.
// The result is the same as using the Boolean() function.

let counter = 10;
console.log(!!counter); // true

// The first ! operator negates the Boolean value of the counter variable.
// If the counter is true, then the ! operator makes it false and vice versa.
// The second ! operator negates that result of the first ! operator and returns the real boolean value of the counter variable.

// The Logical AND operator (&&)
// JavaScript uses the double ampersand (&&) to represent the logical AND operator.
// The following expression uses the && operator:

// let result = a && b;

// If a can be converted to true, the && operator returns the b; otherwise, it returns the a.
// In fact, this rule is applied to all boolean values.
// The following truth table illustrates the result of the && operator when it is applied to two Boolean values:

// a b a && b
// true true true
// true false false
// false true false
// false false false

// The result of the && operator is true only if both values are true, otherwise, it is false.

let eligible_2 = false,
required_2 = true;

console.log(eligible_2 && required_2); // false

// In this example, the eligible_2 is false, therefore, the value of the expression eligible_2 && required_2 is false.

// See the following example:

let eligible_3 = true,
required_3 = true;

console.log(eligible_3 && required_3); // true

// In this example, both eligible_3 and required_3 are true, therefore, the value of the expression eligible && required is true.

// Short-circuit evaluation
// The && operator is short-circuited. It means that the && operator evaluates the second value only if the first one doesn’t suffice to determine the value of an expression