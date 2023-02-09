//IMP
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


