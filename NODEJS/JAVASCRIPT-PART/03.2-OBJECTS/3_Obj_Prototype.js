// This code block explains the JavaScript prototype object and how it works under the hood.

// Every object has its own property called prototype.
// Because a prototype itself is also another object, the prototype has its own prototype. This creates a something called prototype chain. The prototype chain ends when a prototype has null for its own prototype.

// Suppose you have an object person with a property called name:
let person = {'name' : 'John'}

// When examining the person object in the console, you’ll find that the person object has a property called prototype denoted by the [[Prototype]]:
console.log(person);

// The prototype itself is an object with its own properties:
console.log(person.__proto__);

// When you access a property of an object, if the object has that property, it’ll return the property value. The following example accesses the name property of the person object:
console.log(person.name);

// However, if you access a property that doesn’t exist in an object, the JavaScript engine will search in the prototype of the object.
// If the JavaScript engine cannot find the property in the object’s prototype, it’ll search in the prototype’s prototype until either it finds the property or reaches the end of the prototype chain.
console.log(person.toString());

// In this example, when we call the toString() method on the person object, the JavaScript engine finds it in the person object. Because the person object doesn’t have the toString() method, it’ll search for the toString() method in the person’s prototype object.
// Since the person’s prototype has the toString() method, JavaScript calls the toString() of the person’s prototype object.

// JavaScript has the built-in Object() function. The typeof operator returns 'function' if you pass the Object function to it. For example:
console.log(typeof(Object))

// Please note that Object() is a function, not an object. It’s confusing if this is the first time you’ve learned about the JavaScript prototype.
// Also, JavaScript provides an anonymous object that can be referenced via the prototype property of the Object() function:
console.log(Object.prototype);

// The Object.prototype object has some useful properties and methods such as toString() and valueOf().
// The Object.prototype also has an important property called constructor that references the Object() function.
console.log(Object.prototype.constructor === Object);

// Suppose a circle represents a function and a square represents an object. The following picture illustrates the relationship between the Object() function and the Object.prototype object:
console.log(Person);
console.log(Person.prototype);

// In addition, JavaScript links the Person.prototype object to the Object.prototype object via the [[Prototype]], which is known as a prototype linkage.
// The prototype linkage is denoted by [[Prototype]] in the following figure:
function Person(name) {
    this.name = name;
}

// The following defines a new method called greet() in the Person.prototype object:
Person.prototype.greet = function() {
    return "Hi, I'm " + this.name + "!";
}
console.log(Person.prototype);

// In this case, the JavaScript engine adds the greet() method to the Person.prototype object.
// The following creates a new instance of the Person:
let p1 = new Person('John');
console.log(p1);

// Internally, the JavaScript engine creates a new object named p1 and links the p1 object to the Person.prototype object via the prototype linkage.
// The following calls the greet() method on the p1 object:
console.log(p1.greet());

// The following creates another instance of the Person whose name property is 'Jane':
let p2 = new Person('Jane');
console.log(p2);

// The p2 object has the properties and methods as the p1 object.

// When you define a method on the prototype object, this method is shared by all instances.
// The following defines a new method called draw() in the p2 object.
p2.draw = function () {
    return "I can draw.";
};
console.log(p2.draw())

// When you define a method in an object, the method is only available to that object. It cannot be shared with other objects by default.

// The __proto__ is pronounced as dunder proto. The __proto__ is an accessor property of the Object.prototype object. It exposes the internal prototype linkage ( [[Prototype]]) of an object through which it is accessed.
// The __proto__ has been standardized in ES6 to ensure compatibility for web browsers. However, it may be deprecated in favor of Object.getPrototypeOf() in the future. Therefore, you should never use the __proto__ in your production code.
console.log(p1.__proto__ === Person.prototype);// trueconsole.log(p1.__proto__ === p2.__proto__);// true
console.log(p1.__proto__ === Object.getPrototypeOf(p1));// true
console.log(p1.constructor.prototype)

// If you call a method that doesn’t exist on the Person.prototype and Object.prototype object, the JavaScript engine will follow the prototype chain and throw an error if it cannot find the method. For example:
console.log(p1.fly());

/* Output:
{ name: 'John' }
{}
John
[object Object]
Hi, I'm John!
undefined
[Function: Object]
true
[Function: Person]
Person {}
I can draw.
TypeError: p1.fly is not a function
*/
