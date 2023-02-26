// Summary: this tutorial explains about the JavaScript this keyword and its behavior in different contexts.

// Example 1: Using this in objects
// Explanation: Inside the next() function, the this references the counter object.
let counter = {
    count: 0,
    next: function () {
      return ++this.count;
    },
  };
  console.log(counter.next()); // Log_1: 1
  console.log(counter.next()); // Log_2: 2
  
  // Example 2: Using this in global context
  // Explanation: In the global context, the this references the global object, which is the window object on the web browser or global object on Node.js.
  console.log(this === window); // Log_3: true
  this.color = 'Red';
  console.log(window.color); // Log_4: Red
  
  // Example 3: Using this in simple function invocation
  // Explanation: In the non-strict mode, the this references the global object when the function is called without any object, In the strict mode, JavaScript sets the this inside a function to undefined.
  function show() {
    console.log(this === window);
  }
  show(); // Log_5: true
  "use strict";
  function showStrict() {
    console.log(this === undefined);
  }
  showStrict(); // Log_6: true
  
  // Example 4: Using this in method invocation
  // Explanation: When you call a method of an object, JavaScript sets this to the object that owns the method.
  let car = {
    brand: 'Honda',
    getBrand: function () {
      return this.brand;
    }
  }
  console.log(car.getBrand()); // Log_7: Honda
  
  // Example 5: Using this in constructor invocation
  // Explanation: When you use the new keyword to create an instance of a function object, you use the function as a constructor.
  function Car(brand) {
    this.brand = brand;
  }
  Car.prototype.getBrand = function () {
    return this.brand;
  }
  let car1 = new Car('Honda');
  console.log(car1.getBrand()); // Log_8: Honda
  
  // Example 6: Using this in indirect invocation
  // Explanation: The Function type has two methods: call() and apply(). These methods allow you to set the this value when calling a function.
  function getBrand(prefix) {
    console.log(prefix + this.brand);
  }
  let honda = {
    brand: 'Honda'
  };
  let audi = {
    brand: 'Audi'
  };
  getBrand.call(honda, "It's a "); // Log_9: It's a Honda
  getBrand.call(audi, "It's an "); // Log_10: It's an Audi
  
  // Example 7: Using this in arrow functions
  // Explanation: In arrow functions, JavaScript sets the this lexically.
  let getThis = () => this;
  console.log(getThis() === window); // Log_11: true
  
  function Car2() {
    this.speed = 120;
  }
  Car2.prototype.getSpeed = () => {
    return this.speed;
  };
  
  var car2 = new Car2();
  console.log(car2.getSpeed()); // Log_12: undefined
  
  /*
  Output:
  1
  2
  true
  Red
  true
  true
  Honda
  Honda
  It's a Honda
  It's an Audi
  true
  undefined
  */
  
  