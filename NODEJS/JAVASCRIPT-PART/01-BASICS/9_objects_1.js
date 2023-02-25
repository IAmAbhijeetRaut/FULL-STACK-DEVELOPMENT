//An object is an unordered collection of key-value pairs.
//The key can be a string, and the value can be any value, including a string, number, array, or function.
//One way to create an object is using the object literal notation.

//Creating an empty object
let empty = {};

//Creating an object with properties
let person = {
firstName: 'John',
lastName: 'Doe'
};

//Accessing properties:
//1. Using dot notation (.)
console.log(person.firstName); //Log_1
console.log(person.lastName); //Log_2

//2. Using array-like notation ([])
console.log(person['firstName']); //Log_3
console.log(person['lastName']); //Log_4

//Accessing a property that contains spaces
//You need to use '' to use a multiword key in object e.g as in here we used 'building no'
let address = {
'building no': 3960,
street: 'North 1st street',
state: 'CA',
country: 'USA'
};

console.log(address['building no']); //Log_5

//Modifying the value of a property
person.firstName = 'Jane';
console.log(person); //Log_6

//Adding a new property to an object
person.age = 25;

//Deleting a property of an object
delete person.age;

//Checking if a property exists in an object
let employee = {
firstName: 'Peter',
lastName: 'Doe',
employeeId: 1
};

console.log('ssn' in employee); //Log_7
console.log('employeeId' in employee); //Log_8

// using variables for property names
let fruit = "Which fruit to buy? , is that apple";

let bag = {
[fruit]: 5, // the name of the property is taken from the variable fruit
};
console.log(bag[fruit]); // Log_9: 5

// computed properties with square brackets
let propertyName = "likes birds";
let student = {};
student[propertyName] = true;
console.log(student[propertyName]); // Log_10: true

/* Output:
John
Doe
John
Doe
3960
{ firstName: 'Jane', lastName: 'Doe' }
false
true
5
true
*/