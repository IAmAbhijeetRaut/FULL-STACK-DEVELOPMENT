//IMP
/* 
    1.The forEach() method executes a provided function once for each array element.
    2.There is no way to stop or break(using break keyword) a forEach() loop other than by throwing an exception. 
      If you need such behavior, the forEach() method is the wrong tool.
    3.Early termination may be accomplished with looping statements like for, for...of, and 
      for...in. Array methods like every(), some(), find(), and findIndex() also stops 
      iteration immediately when further iteration is not necessary. 

*/

//BASIC EXAMPLE
const array_1 = [10,23,45,656,567,2323,35578,34,3435,866];
array_1.forEach((element,index)=>{
    console.log(`Element at index(${index}) is ${element}`);
})

//Using forEach() on sparse arrays
const arraySparse = [1,2,3,4,,5,,,,10,11,,22,,33];
let callBackToArraySparse = 0;

arraySparse.forEach((element)=>{
    console.log(`Element : ${element}`)
    callBackToArraySparse++; // expected to call 9 times only by skipping sparse elements
})

console.log(`Total callbacks to the array are : ${callBackToArraySparse}`);//9







//Syntax
// Arrow function
// forEach((element) => { /* … */ })
// forEach((element, index) => { /* … */ })
// forEach((element, index, array) => { /* … */ })

// Callback function
// forEach(callbackFn)
// forEach(callbackFn, thisArg)//

// Inline callback function
// forEach(function (element) { /* … */ })
// forEach(function (element, index) { /* … */ })
// forEach(function (element, index, array) { /* … */ })
// forEach(function (element, index, array) { /* … */ }, thisArg)