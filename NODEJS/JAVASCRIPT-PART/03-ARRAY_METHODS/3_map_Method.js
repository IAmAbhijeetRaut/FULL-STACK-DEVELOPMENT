//IMP
// This is an Iterative Method
/* 
  1. The map() method creates a new array populated with the results of calling a provided function
     on every element in the calling array.
  2. The map() method is an iterative method. It calls a provided callbackFn function once for each 
     element in an array and constructs a new array from the results.
  3. callbackFn is invoked only for array indexes which have assigned values. 
     It is not invoked for empty slots in sparse arrays.
  5. The map() method is a copying method. It does not alter this. However, 
     the function provided as callbackFn can mutate the array. 
  4. length of the array is saved before the first invocation of callbackFn. Therefore:
     a) callbackFn will not visit any elements added beyond the array's 
        initial length when the call to map() began.
     b) Changes to already-visited indexes do not cause callbackFn to be invoked on them again.
     c) If an existing, yet-unvisited element of the array is changed by callbackFn, its value passed
        to the callbackFn will be the value at the time that element gets visited. Deleted elements are
        not visited.
*/


//Basic Example
const array_1 = [1,2,3,4,7,8,9];
const map_1 = array_1.map((element)=>(element * element)) // return statement is not needed if there is one line code
// arrow fn => since return statement is not there it will automatically return the result of the expression
console.log("map_1 : ",map_1);



//Using map to reformat objects in an array

var lineup = [
   {
     id: 1,
     firstName: "Magic",
     lastName: "Johnson"
   }, {
     id: 2,
     firstName: "Kobe",
     lastName: "Bryant"
   }, {
     id: 3,
     firstName: "Lebron",
     lastName: "James"
   }, {
     id: 4,
     firstName: "Kareem",
     lastName: "Abdul-Jabbar"
   }, {
     id: 5,
     firstName: "Shaquille",
     lastName: "O’Neal"
   }
 ];
 let lineupSpeech = lineup.map( player => {
   let newObj = {};
   newObj["fullName"] = player.firstName + " " + player.lastName;
   return newObj;
   })
   
  console.log(lineup);
  /*
  [
    { id: 1, firstName: 'Magic', lastName: 'Johnson' },
    { id: 2, firstName: 'Kobe', lastName: 'Bryant' },
    { id: 3, firstName: 'Lebron', lastName: 'James' },
    { id: 4, firstName: 'Kareem', lastName: 'Abdul-Jabbar' },
    { id: 5, firstName: 'Shaquille', lastName: 'O’Neal' }
  ]
  */
  console.log(lineupSpeech);
  /*
  [
    { fullName: 'Magic Johnson' },
    { fullName: 'Kobe Bryant' },
    { fullName: 'Lebron James' },
    { fullName: 'Kareem Abdul-Jabbar' },
    { fullName: 'Shaquille O’Neal' }
  ]
  */


 //Calling map() on non-array objects
 //The map() method reads the length property of this and then accesses each integer index.
 const arrayLikeObjects = {
   length:5,
   0: 4,
   1: 5,
   2: 6,
   3: 7,
   4: 8,
 }

 console.log(Array.prototype.map.call(arrayLikeObjects, (x) => x ** 2));
// [ 4, 9, 16 ]


//IMP
//Syntax : 
//Arrow function
//map((element) => { /* … */ })
//map((element, index) => { /* … */ })
//map((element, index, array) => { /* … */ }) 
// Callback function
//map(callbackFn)
//map(callbackFn, thisArg)
// Inline callback function
// map(function (element) { /* … */ })
// map(function (element, index) { /* … */ })
// map(function (element, index, array) { /* … */ })
// map(function (element, index, array) { /* … */ }, thisArg)


// Parameters
// callbackFn
// A function to execute for each element in the array. Its return value is added as a single element in the new array.
// The function is called with the following arguments:

// element
// The current element being processed in the array.

// index
// The index of the current element being processed in the array.

// array
// The array map() was called upon.

// thisArg Optional
// A value to use as this when executing callbackFn. See iterative methods.

// Return value
// A new array with each element being the result of the callback function.