//Arrow Functions
// Define a function expression that returns the sum of two numbers
let add_1 = function (x, y) {
  return x + y;
};
console.log(add_1(10, 20)); // Output: 30

// Equivalent to the above function expression but uses an arrow function instead
let add_2 = (x, y) => x + y;
console.log(add_2(10, 20)); // Output: 30

// Use block syntax with an arrow function
let add_3 = (x, y) => {
  return x + y;
};

// Check the type of the arrow function
console.log(typeof add_3); // Output: function

// Check if the arrow function is an instance of the Function type
console.log(add_3 instanceof Function); // Output: true

// Arrow function with multiple parameters
let numbers = [4, 2, 6];
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [6, 4, 2]

// Arrow function with a single parameter
let names = ["John", "Mac", "Peter"];
let lengths = names.map((name) => name.length);
console.log(lengths); // Output: [4, 3, 5]

// Arrow function with no parameter
let logHello = () => console.log("hello");
logHello(); // OP : hello

// Line break/termination between parameters and arrow is not allowed
// warning shown -> Line terminator not permitted before arrow.ts(1200) // in the below example
/* 
    
    let multiply_1 = (x, y) 
    =>
    x * y;
    
    */
// Here line termination after the arrow function so its fine
let multiply_2 = (x, y) => x * y;

// Statements and expressions in the arrow function body
let square = (x) => x * x;
let except = (msg) => {
  throw msg;
};

// Arrow functions and object literal
let setColor_1 = function (color) {
  return {
    value: color,
  };
};
let backgroundColor = setColor_1("Red");
console.log(backgroundColor.value); // Output: "Red"

// Use parentheses to return an object literal from an arrow function
let setColor_2 = (color) => ({
  value: color,
});

console.log(setColor_2); // OP : Red
