// This tutorial covers the enumerable properties of JavaScript objects.

// In JavaScript, an object is an unordered collection of key-value pairs.
// The key is usually a string or symbol, and the value can be of any primitive type, an object, or a function.

// Example:
const person = {
    firstName: 'John',
    lastName: 'Doe'
};

// Properties created via a simple assignment or property initializer are enumerable by default.
// Example:
person.age = 25;

for (const key in person) {
    console.log(key); // Log_1
}

/* Output:
firstName
lastName
age
*/

// The enumerable attribute of a property determines whether or not it can be accessed when the object's properties are enumerated.
// The Object.defineProperty() method can be used to change the enumerable attribute of a property.
// Example:
Object.defineProperty(person, 'ssn', {
    enumerable: false,
    value: '123-456-7890'
});

for (const key in person) {
    console.log(key); // Log_2
}

/* Output:
firstName
lastName
age
*/

// The propertyIsEnumerable() method determines whether or not a property is enumerable.
// Example:
console.log(person.propertyIsEnumerable('firstName')); // Log_3
console.log(person.propertyIsEnumerable('lastName')); // Log_4
console.log(person.propertyIsEnumerable('age')); // Log_5
console.log(person.propertyIsEnumerable('ssn')); // Log_6

/* Output:
true
true
true
false
*/
