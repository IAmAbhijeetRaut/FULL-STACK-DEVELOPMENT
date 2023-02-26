
// A constructor function is a regular function with the follwing convention :
//1 . name of fn starts with capital letter
//2 . constructor fn can be called only with new keyword.
//Example
function Person_1(firstName, lastName){
 this.firstName = firstName;
 this.lastName = lastName;
}

//create instance of Person Contructor fn
let person1_Obj1 = new Person_1("Josef","Lucero");
let person1_Obj2 = new Person_1("Angelo","Norman");

console.log(`person1_Obj1 : firstName - ${person1_Obj1.firstName}, lastName - ${person1_Obj2.lastName}`);
console.log(`person1_Obj2 : firstName - ${person1_Obj2.firstName}, lastName - ${person1_Obj2.lastName}`);


//Adding methods to JavaScript constructor functions
function Person_2(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function(){
        return this.firstName + " " + this.lastName; 
    }
}

let person2_Obj1 = new Person_2("Damian", "Wayne");
let person2_Obj2 = new Person_2("Jake", "Archer");

console.log(`person2_Obj1 fullname is : ${person2_Obj1.getFullName()}`);
console.log(`person2_Obj2 fullname is : ${person2_Obj2.getFullName()}`);

/*
The problem with the constructor function is that when you create multiple instances of the Person, 
the this.getFullName() is duplicated in every instance, which is not memory efficient.
To resolve this, you can use the prototype so that all instances of a custom type can share the same
methods.
*/

//Inside the function the this reference doesnt get bind if we are 
//calling a constructor function without the new keyword 

//let person2_Obj3 = Person_2("Clark", "Kent");
//console.log(`person2_Obj3 : firstName - ${person2_Obj3.firstName}, lastName - ${person2_Obj3.lastName}`);
// above casues -> TypeError: Cannot read property 'firstName' of undefined


//inside a fn The new.target properthy returns a reference of the function is it is called by using new keyword otherwise it returns undefined
// and Alternatively, you can make the syntax more flexible by creating a new Person object if the 
//users of the constructor function don’t use the new keyword:
function Person_3(firstName, lastName){
    console.log(new.target);
    if(!new.target){
        return new Person_3(firstName, lastName); 
    }
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function(){
        return this.firstName + " " + this.lastName; 
    }
}

let person3_Obj1 = Person_3("Solomon", "Odonell"); // undefined
let person3_Obj2 = Person_3("Jenna", "Ortega"); // undefined

console.log(`person3_Obj1 fullname is : ${person3_Obj1.getFullName()}`);
console.log(`person3_Obj2 fullname is : ${person3_Obj2.getFullName()}`);
// While it's not strictly necessary to use new.target as the first statement in a function 
// that is intended to be used as a constructor, it is often a good practice to do so. This is
// because new.target provides an easy way to check whether the function was called with new
// or not, and can help prevent errors that might arise from the function being called incorrectly.