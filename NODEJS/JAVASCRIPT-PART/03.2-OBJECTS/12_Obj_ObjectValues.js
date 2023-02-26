// JavaScript Object.values()

// This tutorial explains the usage of the `Object.values()` method in JavaScript.

// Before ES2017, use `for...in` loop and `Object.hasOwnProperty()` method to access the values of own enumerable properties of an object.

// Example
const person_1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};

for (const key in person_1) {
    if (person_1.hasOwnProperty(key)) {
        const value_1 = person_1[key];
        console.log('Log_1:', value_1);
    }
}

// Output: John Doe 25

// ES2017 introduces a new method called `Object.values()` that allows you to return an array of own enumerable property’s values of an object.

// Syntax of `Object.values()`
// Object.values(obj)

// The `Object.values()` accepts an object and returns its own enumerable property’s values as an array. See the following example:
const person_2 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};

const profile_1 = Object.values(person_2);

console.log('Log_2:', profile_1);

// Output: [ 'John', 'Doe', 25 ]

// `Object.values()` vs. `for...in`
// `Object.values()` returns own enumerable properties while the `for...in` loop iterates properties in the prototype chain.
// Technically, if you use the `for...in` loop with the `Object.hasOwnProperty()` method, you will get the same set of values as the `Object.values()`.

// Example
const person_3 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};

const keys_1 = Object.keys(person_3);
const values_1 = keys_1.map(key => person_3[key]);

console.log('Log_3:', values_1);

// Output: [ 'John', 'Doe', 25 ]
