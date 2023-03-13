
//Object Creation 
//1) By Using Literal
// In the below way the object is added/attached to the global or window object
student_1 = {
    id:101,
    sname:"John Doe",
    age:19
}

console.log(`Student_1 id is ${student_1.id}, name is ${student_1.sname} and age is ${student_1.age}`);

// In the below way the object goes into the block scope of the variabel therrefore it is not added to the
// global or window object
let student_2 = {
    id:101,
    sname:"John Doe",
    age:19
}
console.log(`Student_2 id is ${student_2.id}, name is ${student_2.sname} and age is ${student_2.age}`);
console.log("student_1: " + JSON.stringify(global.student_1)); // attached to global/window object
console.log("student_2: " + JSON.stringify(global.student_2)); // not attached to global/window object


//Using new Keyword
let student_3  = new Object();
student_3.id = 100;
student_3.sname = "John Wick";
student_3.age = 60;
console.log(`student_3 id is ${student_3.id}, name is ${student_3.sname} and age is ${student_3.age}`);
console.log("student_3: " + JSON.stringify(global.student_3)); // not attached to global/window object

