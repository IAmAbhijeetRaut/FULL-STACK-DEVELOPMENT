

/* JavaScript prototypal inheritance */

// If you’ve worked with other object-oriented programming languages such as Java or C++, you’ve been familiar with the inheritance concept.
// In this programming paradigm, a class is a blueprint for creating objects. If you want a new class to reuse the functionality of an existing class, you can create a new class that extends the existing class. This is called classical inheritance.
// JavaScript doesn’t use classical inheritance. Instead, it uses prototypal inheritance.
// In prototypal inheritance, an object “inherits” properties from another object via the prototype linkage.

// The following defines a person object:
// name is a property that stores the person’s name. greet is a method that returns a greeting as a string.
let person = {
    name: "John Doe",
    greet: function () {
        return "Hi, I'm " + this.name;
    }
};

// The person object has a link to the anonymous object referenced by the Object() function. The [[Prototype]] represents the linkage:
// It means that the person object can call any methods defined in the anonymous object referenced by the Object.prototype.
console.log(person.__proto__ === Object.prototype); // Log_1

// The following defines the teacher object that has the teach() method:
let teacher = {
    teach: function (subject) {
        return "I can teach " + subject;
    }
};

// If you want the teacher object to access all methods and properties of the person object, you can set the prototype of teacher object to the person object like this:
teacher.__proto__ = person;

// Now, the teacher object can access the name property and greet() method from the person object via the prototype chain:
console.log(teacher.name); // Log_2
console.log(teacher.greet()); // Log_3

// Output:
// Log_1: true
// Log_2: John Doe
// Log_3: Hi, I'm John Doe
