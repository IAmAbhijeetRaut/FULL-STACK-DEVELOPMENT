// Three important methods 

const numbers = ['One','Two','Three','Four','Five','Six'];
numbers[1] = 'Something'; // replaced an element with 'Something'
console.log(`numbers : ${numbers}`);


//Array - Dealing things at the 'start' of the array : shift(), unshift()
//shift : 
console.log("Shifted Number / Deleted Number = ",numbers.shift()); 
// Above shift() call :  you can say the index was shifted by one position or also you can 
//say the element was deleted but the point here is the element at first position is gone now
console.log(numbers);

//unshift : 
numbers.unshift('Something'); // inserting/replacing one more value at the start of array_1
//'Two' was replaced with 'Something'
console.log(`numbers : ${numbers}`);


//Array - Dealing things at the 'End' of the array : pop(), push()
//pop : 
let deletedElement =  numbers.pop(); // Removing elements from the last
console.log(`Element deleted = ${deletedElement} and After pop numbers = ${numbers} `);


//push():
numbers.push('Seven') // Adding an element at the last
numbers.push('Eight', 'Nine') // Adding multiple elements at the last
console.log(`After push numbers = ${numbers}`);


//Array : dealing things at the 'Middle' of the array : splice()
//splice : splice(start, deleteCount, item1, item2, itemN) // start is inclusive
let deleted_1 = numbers.splice(2,1,"Everything")
console.log(`deleted_1 = ${deleted_1}`);
console.log("after splice : ",numbers);
//Replacing multiple elements now
let deleted_2 = numbers.splice(2,3,"MultipleReplacement");
console.log(`deleted_2 = ${deleted_2}`);
console.log("After multiple replacement : ",numbers);