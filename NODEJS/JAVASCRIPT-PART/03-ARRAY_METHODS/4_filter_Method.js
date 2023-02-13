//IMP
// This is a Copying Method
/* 
    1. The filter() method creates a shallow copy of a portion of a given array, 
       filtered down to just the elements from the given array that pass the test implemented by the 
       provided function.
    2. The filter() method is a copying method. It does not alter this but instead returns a shallow copy 
       that contains the same elements as the ones from the original array (with some filtered out). 
       However, the function provided as callbackFn can mutate the array. Note, however, that the length 
       of the array is saved before the first invocation of callbackFn.Therefore:
        a) callbackFn will not visit any elements added beyond the array's initial length when the call to 
          filter() began.
        b) Changes to already-visited indexes do not cause callbackFn to be invoked on them again.
        c) If an existing, yet-unvisited element of the array is changed by callbackFn, its value passed to
          the callbackFn will be the value at the time that element gets visited. Deleted elements are 
          not visited.
*/

//Filter using callbackFn
function isGreaterThan10(value){
    return value > 10 ;
}

const array_1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const filteredArray_1 = array_1.filter(isGreaterThan10);
console.log("array_1 : ",array_1);
console.log("filteredArray_1 : ", filteredArray_1);


//Filter invalid entries from JSON : 
const array_2 = [
    {id : 12},
    {id : -4},
    {id : 0},
    {id : 5},
    {id : 16.5},
    {},
    {id : null},
    {id : NaN},
    {id : "undefined" }
];

let invalidEntries = 0;

function filterByID(item){
if(Number.isFinite(item.id) && item.id !== 0){
    return true;
}
invalidEntries++;
return false;
}

const filteredArray_2 = array_2.filter(filterByID);

console.log("filteredArray_2 : ",filteredArray_2);

console.log("invalidItems : ",invalidEntries);


//Searching in an array 
const fruits = ["apple", "banana", "grapes", "mango", "orange"];
/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}
console.log("Includes 'ap' : ",filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log("Includes 'an' : ",filterItems(fruits, "an")); // ['banana', 'mango', 'orange']


//Using filter() on sparse arrays 
//filter will skip empty slots
console.log([1,2,3,5,  , undefined].filter((x) => x === undefined)); // [undefined]
console.log([1, ,2, ,4, undefined].filter((x) => x !== 2)); // [1, 4, undefined]



//Affecting Initial Array (modifying, appending and deleting)
// Modifying each word
let words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];

const modifiedWords = words.filter((word, index, arr) => {
  arr[index + 1] += " extra";
  return word.length < 16;
});

console.log(modifiedWords);
// Notice there are three words below length 6, but since they've been modified one is returned
// ["spray"]





//Syntax
// // Arrow function
// filter((element) => { /* … */ })
// filter((element, index) => { /* … */ })
// filter((element, index, array) => { /* … */ })

// Callback function
// filter(callbackFn)
// filter(callbackFn, thisArg)

// Inline callback function
// filter(function (element) { /* … */ })
// filter(function (element, index) { /* … */ })
// filter(function (element, index, array) { /* … */ })
// filter(function (element, index, array) { /* … */ }, thisArg)

//callbackFn
//A function to execute for each element in the array.

//element
//The current element being processed in the array.

// index
// The index of the current element being processed in the array.

// array
// The array filter() was called upon.


