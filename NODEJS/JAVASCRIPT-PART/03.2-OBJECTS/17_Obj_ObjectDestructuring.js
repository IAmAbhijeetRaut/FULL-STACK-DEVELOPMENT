// JavaScript Object Destructuring

// JavaScript object destructuring assigns properties of an object to individual variables.

// Example 1: Prior to ES6
// When you want to assign properties of the person object to variables, you typically do it like this:
let person1 = {
    firstName: 'John',
    lastName: 'Doe'
};

let firstName1 = person1.firstName;
let lastName1 = person1.lastName;

console.log(firstName1); // 'John'
console.log(lastName1); // 'Doe'

// Example 2: Introduction to the JavaScript object destructuring assignment
// ES6 introduces object destructuring syntax, which provides an alternative way to assign properties of an object to variables
let person2 = {
    firstName: 'John',
    lastName: 'Doe'
};

let { firstName: fname2, lastName: lname2 } = person2;

console.log(fname2); // 'John'
console.log(lname2); // 'Doe'

// Example 3: Syntax
// In this syntax, the identifier before the colon (:) is the property of the object, and the identifier after the colon is the variable.
let person3 = {
    firstName: 'John',
    lastName: 'Doe'
};

let { firstName: fname3, lastName: lname3 } = person3;

console.log(fname3); // 'John'
console.log(lname3); // 'Doe'

// Example 4: Concise code
// If the variables have the same names as the properties of the object, you can make the code more concise as follows:
let person4 = {
    firstName: 'John',
    lastName: 'Doe'
};

let { firstName, lastName } = person4;

console.log(firstName); // 'John'
console.log(lastName); // 'Doe'

// Example 5: Declaration and assignment
// It's possible to separate the declaration and assignment. However, you must surround the variables in parentheses.
let person5 = {
    firstName: 'John',
    lastName: 'Doe'
};

let firstName5, lastName5;

({firstName: firstName5, lastName: lastName5} = person5);

console.log(firstName5); // 'John'
console.log(lastName5); // 'Doe'

// Example 6: Non-existent property
// When you assign a property that does not exist to a variable using object destructuring, the variable is set to undefined.
let person6 = {
    firstName: 'John',
    lastName: 'Doe'
};

let { firstName: fname6, lastName: lname6, middleName: mname6 } = person6;

console.log(fname6); // 'John'
console.log(lname6); // 'Doe'
console.log(mname6); // undefined

// Example 7: Setting default values
// You can assign a default value to the variable when the property of an object doesn't exist.
let person7 = {
    firstName: 'John',
    lastName: 'Doe',
    currentAge: 28
};

let { firstName: fname7, lastName: lname7, middleName: mname7 = '', currentAge: age7 = 18 } = person7;

console.log(fname7); // 'John'
console.log(lname7); // 'Doe'
console.log(mname7); // ''
console.log(age7); // 28

// Example 8: When the property of an object exists
// When the person object does have the middleName property, the assignment works as usual:
let person8 = {
    firstName: 'John',
    lastName: 'Doe',
    middleName: 'C.',
    currentAge: 28
};

let { firstName: fname8, lastName: lname8, middleName: mname8 = '', currentAge: age8 = 18 } = person8;

console.log(fname8); // 'John'
console.log(lname8); // 'Doe'
console.log(mname8); // 'C.'
console.log(age8); // 28

// Example 9: Nested object destructuring
// The following statement destructures the properties of the nested name object into individual variables.
let employee9 = {
    id: 1001,
    name: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

let {
    name: {
        firstName: fname9,
        lastName: lname9
    }
} = employee9;

console.log(fname9); // 'John'
console.log(lname9); // 'Doe'

// Example 10: Destructuring function arguments
// It's possible to destructure the object argument passed into the function
let display10 = ({firstName: fname10, lastName: lname10}) => console.log(`${fname10} ${lname10}`);

let person10 = {
    firstName: 'John',
    lastName: 'Doe'
};

display10(person10); // 'John Doe'

/* Output:
John
Doe
John
Doe
John
Doe
John
Doe
John
Doe
undefined
John
Doe

28
John
Doe

undefined
28
John
Doe
C.
28
John
Doe

John
Doe

Log_10: John Doe
*/
