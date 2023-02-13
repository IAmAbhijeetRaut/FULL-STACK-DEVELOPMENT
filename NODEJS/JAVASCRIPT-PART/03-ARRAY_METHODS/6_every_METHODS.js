//IMP
/* 
    1.The every() method tests whether all elements in the array pass the test 
      implemented by the provided function. It returns a Boolean value.
    2.The every() method is an iterative method. It calls a provided callbackFn function once
      for each element in an array, until the callbackFn returns a falsy value. If such an element
      is found, every() immediately returns false and stops iterating through the array. Otherwise,
      if callbackFn returns a truthy value for all elements, every() returns true.
    3.callbackFn is invoked only for array indexes which have assigned values. It is not invoked for
      empty slots in sparse arrays.
    
*/


//Bacic Example
const array_1 = [1,2,3,4,5,6,7,8,9];
console.log("Every element in array_1 is less than 10 : ",array_1.every((e)=>{ return e<10}));
// whenver you use '{}' within arrow function if it returns something then explicitly use the return statement
// otherwise here for eg. if you dont use return statement then 'false' will be returned


//Check if an an array is a subset of another array
const array_2 = [1,2,3,4,5,6,7,8,9];
const array_3 = [1,2,3,4,5];
const isSubset = (array_3, array_2)=>{
    return array_3.every((element)=>{
        return array_2.includes(element);});
};
console.log("Is array_3 a subset of array_2 : ",isSubset(array_3,array_2));

//Using every() on sparse arrays
console.log([1, , 3].every((x) => x !== undefined)); // true
console.log([2, , 2].every((x) => x === 2)); // true

//We can modify, append and delete the elements in the array thus affecting the initial array
let array_4 = [1, 2, 3, 4];
array_4.every((elem, index, array_4) => {
  array_4[index + 1]--;
  console.log(`[${array_4}][${index}] -> ${elem}`);
  return elem < 2;
});





// Arrow function
// every((element) => { /* … */ })
// every((element, index) => { /* … */ })
// every((element, index, array) => { /* … */ })

// Callback function
// every(callbackFn)
// every(callbackFn, thisArg)

// Inline callback function
// every(function (element) { /* … */ })
// every(function (element, index) { /* … */ })
// every(function (element, index, array) { /* … */ })
// every(function (element, index, array) { /* … */ }, thisArg)
