// IMP
/* 1. The concat method creates a new array & it does not change the existing arrays, 
      but instead returns a new array. 
   2. The concat() method preserves empty slots if any of the source arrays is sparse.
   3. concat does not treat all array-like objects as arrays by default — only if 
      Symbol.isConcatSpreadable is set to a truthy value (e.g. true).
   */


// Concatenating two arrays
const letters_1 = ["a", "b", "c"];
const numbers_1 = [1, 2, 3];
const alphaNumeric_1 = letters_1.concat(numbers_1); // creates a new array
console.log(alphaNumeric_1);
console.log("letters_1 array is : ",letters_1); // unchanged
// results in ['a', 'b', 'c', 1, 2, 3]


// Concatenating three arrays
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
const numbers_2 = num1.concat(num2, num3);
console.log(numbers_2);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]


// Concatenating values to an array and concatenating nested arrays
const letters_2 = ["a", "b", "c"];
const alphaNumeric_2 = letters_2.concat(1, [2, 3]);
console.log(alphaNumeric_2);
const alphaNumeric_3 = letters_2.concat(1,2,[2,3],[4,5],[num1,num2], num2); // [num1 , num2] -. nested array : an array that contains num1 array and num2 array
console.log("alphaNumeric_3 : ",alphaNumeric_3);
// results in ['a', 'b', 'c', 1, 2, 3]


//Using concat of sparse arrays
console.log("Sparse array concat example-1 : ",[1, , 3].concat([4, 5])); // [1, empty, 3, 4, 5]
console.log("Sparse array concat example-2 : ",[1, 2].concat([3, , 5])); // [1, 2, 3, empty, 5]


// Concatenating array-like objects with Symbol.isConcatSpreadable
const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log([0].concat(obj1, obj2));
// [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]



//Syntax
// concat()
// concat(value0)
// concat(value0, value1)
// concat(value0, value1, /* … ,*/ valueN)
