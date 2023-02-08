var temp = 0;
var nullAssignedvariable = null;
var undefinedVariable;
//var temp; //leads to Current temperature is: undefined
//Remember null and undefined are completely different from zero '0'

console.log("Current temperature is: "+temp); // OP : Zero
console.log("nullAssignedvariable : ",nullAssignedvariable); // OP : null
console.log("undefinedVariable : ",undefinedVariable); // OP : undefined

//Grade system 
// if 10 marks --> print --> "Great Job"
// if 5 marks --> print --> "Work Little Hard"
// if 2 marks --> print --> "Poor"
// if 0 marks --> print --> "You Failed !!"
//Boolean - true / false , remember they are lowercase not uppercase

let grade = true; 
let actualMarks = 7;
let myGrade = (actualMarks == 10);
console.log("Grade : ",myGrade);

// What is 'null' ? 
/* MDN Web Docs --> The value null is written with a literal: null. null is not an identifier for a 
property of the global object, like undefined can be. Instead, null expresses a lack
of identification, indicating that a variable points to no object. In APIs, null is 
often retrieved in a place where an object can be expected but no object is relevant.  */

// What is 'undefined' ? 
/* MDN Web Docs -->  undefined is a property of the global object. That is, it is a variable in global scope.
A variable that has not been assigned a value is of type undefined.
A method or statement also returns undefined if the variable that is being evaluated 
does not have an assigned value. A function returns undefined if a value was not returned. */