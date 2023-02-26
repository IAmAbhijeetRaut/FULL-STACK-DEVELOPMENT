// This tutorial explains the characteristics of properties of JavaScript objects such as configurable, enumerable, writable, get, set, and value.

// There are two types of properties in JavaScript: data and accessor properties.

// Example of Data Property

// - A data property contains a single location for a data value.
// - A data property has four attributes:
//   - [[Configurable]] – determines whether a property can be redefined or removed via delete operator.
//   - [[Enumerable]] – indicates if a property can be returned in the for...in loop.
//   - [[Writable]] – specifies that the value of a property can be changed.
//   - [[Value]] – contains the actual value of a property.

// The following example creates a person object with two properties firstName and lastName with the configurable, enumerable, and writable attributes set to true. And their values are set to 'John' and 'Doe' respectively:
let person_1 = {
    firstName: 'John',
    lastName: 'Doe'
};

// To change any attribute of a property, the Object.defineProperty() method is used.
// The Object.defineProperty() method accepts three arguments:
// - An object.
// - A property name of the object.
// - A property descriptor object that has four properties: configurable, enumerable, writable, and value.

// If you use the Object.defineProperty() method to define a property of the object, the default values of [[Configurable]], [[Enumerable]], and [[Writable]] are set to false unless otherwise specified.

// The following example creates a person object with the age property:

let person_2 = {};
person_2.age = 25;

// Since the default value of the [[Configurable]] attribute is set to true, you can remove it via the delete operator:
delete person_2.age;
console.log('Log_1', person_2.age); // Output: undefined

// The following example creates a person object and adds the ssn property to it using the Object.defineProperty() method:
let person_3 = {};
Object.defineProperty(person_3, 'ssn', {
    configurable: false,
    value: '012-38-9119'
});

// Since the configurable attribute is set to false, deleting the ssn property causes an error.
// Also, once you define a property as non-configurable, you cannot change it to configurable.
// If you use the Object.defineProperty() method to change any attribute other than the writable, you'll get an error.

// By default, the enumerable attribute of all the properties defined on an object is true. It means that you can iterate over all object properties using the for...in loop.

let person_4 = {};
person_4.age = 25;
person_4.ssn = '012-38-9119';

for (let property in person_4) {
    console.log('Log_2', property);
}

// The following makes the ssn property non-enumerable by setting the enumerable attribute to false.

let person_5 = {};
person_5.age = 25;
person_5.ssn = '012-38-9119';

Object.defineProperty(person_5, 'ssn', {
    enumerable: false
});

for (let prop in person_5) {
    console.log('Log_3', prop);
}

// Example of Accessor Property

// - Similar to data properties, accessor properties also have [[Configurable]] and [[Enumerable]] attributes.
// - But the accessor properties have the [[Get]] and [[Set]] attributes instead of [[Value]] and [[Writable]].

// When you read data from an accessor property, the [[Get]] function is called automatically to return a value. The default return value of the [[Get]] function is undefined.
// If you assign a value to an accessor property, the [[Set]] function is called automatically.
// To define an accessor property, you must use the Object.defineProperty() method.

let person_6 = {
    firstName: 'John',
    lastName: 'Doe'
}

Object.defineProperty(person_6, 'fullName', {
    get: function () {
        return this.firstName + ' ' + this.lastName;
    },
    set: function (value) {
        let parts = value.split(' ');
        if (parts.length == 2) {
            this.firstName = parts[0];
            this.lastName = parts[1];
        } else {
            throw 'Invalid name format';
        }
    }
});

console.log('Log_4', person_6.fullName);

// Define Multiple Properties: Object.defineProperties()

// In ES5, you can define multiple properties in a single statement using the Object.defineProperties() method.

var product = {};

Object.defineProperties(product, {
    name: {
        value: 'Smartphone'
    },
    price: {
        value: 799
    },
    tax: {
        value: 0.1
    },
    netPrice: {
        get: function () {
            return this.price * (1 + this.tax);
        }
    }
});

console.log('Log_5', 'The net price of a ' + product.name + ' is ' + product.netPrice.toFixed(2) + ' USD');

// JavaScript object property descriptor

// The Object.getOwnPropertyDescriptor() method allows you to get the descriptor object of a property. The Object.getOwnPropertyDescriptor() method takes two arguments:
// 1. An object
// 2. A property of the object
// It returns a descriptor object that describes a property. The descriptor object has four properties: configurable, enumerable, writable, and value.

let person_7 = {
    firstName: 'John',
    lastName: 'Doe'
};

let descriptor = Object.getOwnPropertyDescriptor(person_7, 'firstName');

console.log('Log_6', descriptor);

/*
Output:
Log_1 undefined
Log_2 age
Log_2 ssn
Log_3 age
Log_4 John Doe
Log_5 The net price of a Smartphone is 878.90 USD
Log_6 { value: 'John',
  writable: true,
  enumerable: true,
  configurable: true }
*/
