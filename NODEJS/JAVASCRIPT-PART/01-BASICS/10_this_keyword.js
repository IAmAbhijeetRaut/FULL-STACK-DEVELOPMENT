// The this keyword in JavaScript
// Definition: This tutorial explains the this keyword in JavaScript and how it works in different contexts.

// Example 1: This in object methods
// Explanation: The this keyword is referencing the object that is calling the method.
let counter = {
    count: 0,
    next: function () {
      return ++this.count;
    },
  };
  
  console.log(counter.next()); // Log_1: 1
  
  // Example 2: This in global context
  // Explanation: The this keyword references the global object, which is the window object in the browser and the global object in Node.js.
  console.log(this === window); // Log_2: true
  
  // Example 3: This in a simple function invocation
  // Explanation: In non-strict mode, the this keyword references the global object when the function is called as a simple function invocation.
  function show() {
    console.log(this === window);
  }
  
  show(); // Log_3: true
  
  // Example 4: This in a simple function invocation in strict mode
  // Explanation: In strict mode, the this keyword inside a function is set to undefined.
  "use strict";
  
  function showStrict() {
    console.log(this === undefined);
  }
  
  showStrict(); // Log_4: true
  
  // Example 5: This in a method invocation
  // Explanation: When you call a method of an object, the this keyword references the object.
  let car = {
    brand: "Honda",
    getBrand: function () {
      return this.brand;
    },
  };
  
  console.log(car.getBrand()); // Log_5: Honda
  
  // Example 6: This with a method assigned to a variable
  // Explanation: If you store a method in a variable, the this keyword references the global object.
  let brandGetter = car.getBrand;
  console.log(brandGetter()); // Log_6: undefined
  
  // Example 7: This with a method assigned to a variable using bind
  // Explanation: Use the bind() method to set the this keyword to a specified value.
  let brandGetter2 = car.getBrand.bind(car);
  console.log(brandGetter2()); // Log_7: Honda
  
  // Example 8: This in a constructor invocation
  // Explanation: When you use the new keyword to create an instance of a function object, you use the function as a constructor.
  function Car(brand) {
    this.brand = brand;
  }
  
  Car.prototype.getBrand = function () {
    return this.brand;
  };
  
  let car1 = new Car("Honda");
  console.log(car1.getBrand()); // Log_8: Honda
  
  // Example 9: This in indirect invocation
  // Explanation: Use the call() and apply() methods to set the this keyword.
  function getBrand(prefix) {
    console.log(prefix + this.brand);
  }
  
  let honda = {
    brand: "Honda",
  };
  let audi = {
    brand: "Audi",
  };
  
  getBrand.call(honda, "It's a "); // Log_9: It's a Honda
  getBrand.call(audi, "It's an "); // Log_10: It's an Audi
  
  // Example 10: This in arrow functions
  // Explanation: In arrow functions, the this keyword is lexically set to the outer function where the arrow function is defined.
  let getThis = () => this;
  console.log(getThis() === window); // Log_11: true
  
  // Example 11: This in arrow functions used as a method
  // Explanation: Arrow functions do not create their own execution context. Therefore, defining a method using an arrow function will cause an issue.
  function Car2() {
    this.speed = 120;
  }
  
  Car2.prototype.getSpeed = () => {
    return this.speed;
  };
  
  let car2 = new Car2();
  console.log(car2.getSpeed()); // Log_12: undefined
  
  // Output:
  /*
  1
  true
  true
  true
  Honda
  undefined
  Honda
  Honda
  It's a Honda
  It's an Audi
  true
  undefined
  */
  