// This tutorial explains the Object.entries() method in JavaScript

// The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs,
// in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).
// Here is the syntax of the Object.entries() method:

// Object.entries()

// Example 1:
// In this example, we will create a new symbol and use it as a key in an object. Then we will use the Object.entries() method to list all the enumerable properties of the object.

const ssn = Symbol('ssn');
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    [ssn]: '123-345-789'
};

const kv1 = Object.entries(person);

console.log("Log_1 : ", kv1);

// Output:
// Log_1 :  [['firstName', 'John'], ['lastName', 'Doe'], ['age', 25]]

// Example 2:
// In this example, we will demonstrate the use of the for...in loop to list all the enumerable properties of the object.

const ssn2 = Symbol('ssn');
const person2 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    [ssn2]: '123-345-789'
};

let kv2 = [];

for (let prop in person2) {
    kv2.push([prop, person2[prop]]);
}

console.log("Log_2 : ", kv2);

// Output:
// Log_2 :  [['firstName', 'John'], ['lastName', 'Doe'], ['age', 25]]

// Example 3:
// In this example, we will use the Object.entries() method to list all the enumerable properties of an object including those present in its prototype chain.

function Person() {
    this.firstName = 'John';
    this.lastName = 'Doe';
}

Person.prototype.age = 25;

let john = new Person();

let kv3 = Object.entries(john);

console.log("Log_3 : ", kv3);

// Output:
// Log_3 :  [['firstName', 'John'], ['lastName', 'Doe'], ['age', 25]]
