//IMP
//It is an iterative method
/* 
    1. The some() method is an iterative method. It calls a provided callbackFn function once 
       for each element in an array, until the callbackFn returns a truthy value. If such an element
       is found, some() immediately returns true and stops iterating through the array. Otherwise, if callbackFn returns a falsy value for all elements, some() returns false.
*/

//BASIC EXAMPLE
const array_1 = [1,2,3,4,5,6,7,8,9,10];

const hasLessThan_5 = array_1.some((e)=>{return e < 5});
const hasSomeEvenNumbers = array_1.some((e)=>{return e % 2 == 0});
console.log("Are some elements in array_1 less than 5 : ",hasLessThan_5);
console.log("Are some elements in array_1 even : ",hasSomeEvenNumbers);


//check whether value exists in an array
const fruits_1 = ['Apple', 'Banana', 'Mango', 'Guava'];
const fruits_2 = ['Watermelon', 'Pineapple', 'Strawberry','Grapes']
const checkAvailibility_1 = (array, value) =>{
        return array.some((element)=>{
            return element === value;
        })
}
console.log("Does fruits_1 have 'Watermelon' : ",checkAvailibility_1(fruits_1,"Watermelon"));
console.log("Does fruits_2 have 'Watermelon' : ",checkAvailibility_1(fruits_2,"Watermelon"));


//Converting any value to Boolean
const TRUTHY_VALUE = ["true","TRUE","True","Yes",'yes',1];
const checkTruthyValues = (value)=>{
    if (typeof value === 'string') {
        value = value.toLowerCase().trim();
    }
    return TRUTHY_VALUE.some((element)=> element === value);
}

console.log("is 'true' : ",checkTruthyValues('true'));
console.log("is 'TrUe' : ",checkTruthyValues('TrUe'));
console.log("is 1 : ",checkTruthyValues(1));

//Syntax
// Arrow function
// some((element) => { /* … */ })
// some((element, index) => { /* … */ })
// some((element, index, array) => { /* … */ })

// Callback function
// some(callbackFn)
// some(callbackFn, thisArg)

// Inline callback function
// some(function (element) { /* … */ })
// some(function (element, index) { /* … */ })
// some(function (element, index, array) { /* … */ })
// some(function (element, index, array) { /* … */ }, thisArg)