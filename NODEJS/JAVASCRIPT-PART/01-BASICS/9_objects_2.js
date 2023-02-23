// An object is a collection of key/value pairs or properties. When the value is a function, the property becomes a method.
// Typically, you use methods to describe the object behaviors.

// Example 1: Adding a method to an object using a function expression
let person = {
    firstName: 'John',
    lastName: 'Doe'
    };
    
    person.greet = function() {
    console.log('Hello!');
    }
    
    person.greet(); // Log_1: Hello!
    
    // Example 2: Adding a method to an object using a regular function
    let person2 = {
    firstName: 'John',
    lastName: 'Doe'
    };
    
    function greet() {
    console.log('Hello, World!');
    }
    
    person2.greet = greet;
    
    person2.greet(); // Log_2: Hello, World!
    
    // Object method shorthand
    
    // Example 3: Using the object literal syntax to define a method
    let person3 = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function() {
    console.log('Hello, World!');
    }
    };
    
    person3.greet(); // Log_3: Hello, World!
    
    // Example 4: Using the concise method syntax to define a method
    let person4 = {
    firstName: 'John',
    lastName: 'Doe',
    greet() {
    console.log('Hello, World!');
    }
    };
    
    person4.greet(); // Log_4: Hello, World!
    
    // The this value
    
    // Example 5: Accessing object properties using the this value
    //Inside a method, the this value references the object that invokes the method.
    let person5 = {
    firstName: 'John',
    lastName: 'Doe',
    greet() {
    console.log('Hello, World!');
    },
    getFullName() {
    return this.firstName + ' ' + this.lastName;
    }
    };
    
    console.log(person5.getFullName()); // Log_5: John Doe
    
    /* Output:
    Log_1: Hello!
    Log_2: Hello, World!
    Log_3: Hello, World!
    Log_4: Hello, World!
    Log_5: John Doe
    */