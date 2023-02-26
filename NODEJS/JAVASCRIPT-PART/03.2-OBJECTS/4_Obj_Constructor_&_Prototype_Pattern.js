// Constructor/Prototype Pattern in JavaScript

// Introduction to the JavaScript Constructor / Prototype pattern
// The combination of the constructor and prototype patterns is the most common way to define custom types in ES5.
// The constructor pattern defines the object properties.
// The prototype pattern defines the object methods.
// By using this pattern, all objects of the custom type share the methods defined in the prototype. Also, each object has its own properties.

// JavaScript Constructor / Prototype example
// Suppose that you want to define a custom type called Person that has:
// - Two properties firstName and lastName
// - One method getFullName()

// First, use the constructor function to initialize the properties:
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  // Second, define the getFullName() method in the prototype object of the Person function:
  Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
  };
  
  // Third, create multiple instances of the Person type:
  let p1 = new Person('John', 'Doe');
  let p2 = new Person('Jane', 'Doe');
  
  // Output
  /*
  Log_1: "John Doe"
  Log_2: "Jane Doe"
  */
  console.log(p1.getFullName());
  console.log(p2.getFullName());
  
  // Classes in ES6
  // ES6 introduces the class keyword that makes the constructor/prototype pattern easier to use.
  // For example, the following uses the class keyword to define exactly the same Person type:
  class Person2 {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    getFullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
  
  let p3 = new Person2('John', 'Doe');
  let p4 = new Person2('Jane', 'Doe');
  
  // Output
  /*
  Log_3: "John Doe"
  Log_4: "Jane Doe"
  */
  console.log(p3.getFullName());
  console.log(p4.getFullName());
  