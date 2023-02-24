// Object is collection of key value pairs or properties and when function is the property it is called as the method
// Inside a method, the this value references the object that invokes the method. 
//Object method shorthand: aboutJohn is a method which is defined in the aboutJohn Object itself                                      
let person_1 = {
    "name" : "John",
    "Age" : 34,
    "Height" : 5.5,
    aboutJohn : function(){
        console.log(`My name is ${this.name}, age is ${this.Age} and i am ${this.Height}ft Tall`);
    }
}

person_1.aboutJohn();
// person.aboutJohn; // method cannot be called without the '()' paranthesis or round brackets
//Inside a method, the this value references the object that invokes the method. 

//Define method for an object using the ES6 concise syntax
let person_2 = {
    "name" : "Bucky",
    "Age" : 120,
    "Height" : 6.4,
    aboutBucky(){
        console.log(`My name is ${this.name}, age is ${this.Age} and i am ${this.Height}ft Tall`);
    }
}

person_2.aboutBucky();
//Inside a method, the this value references the object that invokes the method. 

//Defining a method using a regular function and assigning it to an object
let person_3 = {
    "name" : "Jake",
    "Age" : 39,
    "Height" : 6.4,
}

function aboutJakeFn(){
    console.log(`My name is ${this.name}, age is ${this.Age} and i am ${this.Height}ft Tall`);
}

person_3.aboutJake = aboutJakeFn;

person_3.aboutJake();


//Defining a method using a function expression
let person_4 = {
    "name" : "Jeremy",
    "Age" : 29,
    "Height" : 5.4,
}

person_4.aboutJeremy = function (){
    console.log(`My name is ${this.name}, age is ${this.Age} and i am ${this.Height}ft Tall`);
}

person_4.aboutJeremy();
//Inside a method, the this value references the object that invokes the method. 