// JavaScript for…in Loop

// Introduction to JavaScript for...in loop
// The for...in loop over the enumerable properties that are keyed by strings of an object.
// Property can be keyed by a string or a symbol.
// A property is enumerable when its internal enumerable flag is set to true.
// The enumerable flag defaults to true when a property is created via a simple assignment or via a property initializer:

// object.propertyName = value;
// let obj = {
//     propertyName: value,
//     ...
// };

// The following shows the syntax of the for...in loop:
// for(const propertyName in object) {
//     // ...
// }

// The for...in allows you to access each property and value of an object without knowing the specific name of the property.

// Example:
// Use for...in loop to iterate over the properties of the person object.

// Create an object
var person = {
    firstName: 'John',
    lastName: 'Doe',
    ssn: '299-24-2351'
};

// Iterate over the properties of the person object
for(var prop in person) {
    console.log(prop + ':' + person[prop]); // Log_1
}

/* Output:
firstName:John
lastName:Doe
ssn:299-24-2351
*/

// The for...in loop & Inheritance
// When you loop over the properties of an object that inherits from another object, the for...in statement goes up in the prototype chain and enumerates over inherited properties.

// Example:
// The circle object has its own prototype that references the decoration object. Therefore, the for...in loop displays the properties of the circle object and its prototype.

// Create a decoration object
var decoration = {
    color: 'red'
};

// Create a circle object that inherits from decoration
var circle = Object.create(decoration);
circle.radius = 10;

// Iterate over the properties of the circle object
for(const prop in circle) {
    console.log(prop); // Log_2
}

/* Output:
radius
color
*/

// If you want to enumerate only the own properties of an object, you use the hasOwnProperty() method:

// Example:

// Iterate over the own properties of the circle object
for(const prop in circle) {
    if(circle.hasOwnProperty(prop)) {
        console.log(prop); // Log_3
    }
}

/* Output:
radius
*/

// The for...in loop and Array
// It’s good practice to not use the for...in to iterate over an array, especially when the order of the array elements is important.

// Example:
// The following example works flawlessly:
const items = [10 , 20, 30];
let total = 0;

for(const item in items) {
    total += items[item];
}
console.log(total); // Log_4

// However, someone may set a property of the built-in Array type in their libraries as follows:
Array.prototype.foo = 100;

// Hence, the for...in will not work correctly.

// Example:

// somewhere elseArray.prototype.foo = 100;

const items_1 = [10, 20, 30];
let total_1 = 0;

for (var prop in items_1) {
    console.log({ prop, value: items_1[prop] }); // Log_5
    total_1 += items_1[prop];
}
console.log(total_1); // Log_6

// Or another example:

var arr = [];
// set the third element to 3, other elements are undefined
arr[2] = 3;

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// The output shows three elements of the array, which is correct:

// undefined
// undefined
// 3

// However, the for...in loop ignores the first two elements:

for (const key in arr) {
    console.log(arr[key]);
}

/* Output:
3
*/

/* Output of the entire code:
firstName:John
lastName:Doe
ssn:299-24-2351
radius
color
radius
30
{ prop: '0', value: 10 }
{ prop: '1', value: 20 }
{ prop: '2', value: 30 }
{ prop: 'foo', value: 100 }
160
undefined
undefined
3
3
*/
