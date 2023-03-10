// push() - Adds one or more elements to the end of an array and returns the new length of the array.
let arr = [1, 2, 3];
arr.push(4,3,6); // can push single/multiple elements
console.log("log-1 : ",arr); // Output: [1, 2, 3, 4]

// reduceRight() - Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
let nums = [1, 2, 3, 4, 5];
let sum = nums.reduceRight((acc, num) => acc + num,0);
console.log("log-2 : ",sum); // Output: 15

// unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.
let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myArr.unshift(0);
console.log("log-3 : ",myArr); // Output: [0, 1, 2, 3]


// pop() - Removes the last element from an array and returns that element.
let arr1 = [1, 2, 3];
let removedElement = arr1.pop();
console.log("log-4 : ",arr1); // Output: [1, 2]
console.log("log-5 : ",removedElement); // Output: 3


// shift() - Removes the first element from an array and returns that element.
let arr2 = [1, 2, 3];
let removedElement1 = arr2.shift();
console.log("log-6 : ",arr2); // Output: [2, 3]
console.log("log-7 : ",removedElement1); // Output: 1


// splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
let myArray = ['A', 'B', 'C', 'D', 'E'];
myArray.splice(2, 1, 'F');
console.log("log-8 : ",myArray); // Output: ['A', 'B', 'F', 'D', 'E']

// slice() - Returns a portion of an array into a new array.
let arr3 = [1, 2, 3, 4, 5];
let newArr = arr3.slice(1, 3);
console.log("log-9 : ",newArr); // Output: [2, 3]

// indexOf() - Returns the index of the first occurrence of a specified value in an array, or -1 if it is not present.
let fruits = ['apple', 'banana', 'orange'];
let index = fruits.indexOf('banana');
console.log("log-10 : ",index); // Output: 1

// includes() - Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let arr4 = [1, 2, 3];
let includes = arr4.includes(2);
console.log("log-11 : ",includes); // Output: true

// find() - Returns the value of the first element in the array that satisfies the provided testing function.
let numbers = [5, 12, 8, 130, 44];
let found = numbers.find(num => num > 10);
console.log("log-12 : ",found); // Output: 12

// findIndex() - Returns the index of the first element in the array that satisfies the provided testing function, or -1 if no element does.
let numbers1 = [5, 12, 8, 130, 44];
let foundIndex = numbers1.findIndex(num => num > 10);
console.log("log-13 : ",foundIndex); // Output: 1

// of() - Creates a new array instance with a variable number of arguments, regardless of number or type of the arguments.
let arr5 = Array.of(1, 'hello', true);
console.log("log-14 : ",arr5); // Output: [1, 'hello', true]

// from() - Creates a new, shallow-copied Array instance from an array-like or iterable object.
let arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };
let arr6 = Array.from(arrLike);
console.log("log-15 : ",arr6); // Output: ['foo', 'bar', 'baz']

// flat() - Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let arr7 = [1, 2, [3, 4], [[5, 6]]];
let flatArr = arr7.flat(2);
console.log("log-16 : ",flatArr); // Output: [1, 2, 3, 4, 5, 6]

// flatMap() - Returns a new array formed by applying a function to each element of the array, then flattening the result by one level.
let arr8 = [1, 2, 3];
let newArr2 = arr8.flatMap(num => [num * 2]);
console.log("log-17 : ",newArr2); // Output: [2, 4, 6]

// join() - Joins all elements of an array into a string.
let arr9 = ['A', 'B', 'C'];
let joinedStr = arr9.join('-');
console.log("log-18 : ",joinedStr); // Output: 'A-B-C'

//at() - Returns the element at the specified index in an array. The index can be negative, in which case it is counted from the end of the array.
// const array1 = [5, 12, 8, 130, 44];
// let index_2 = 2;
// console.log(`Using an index of ${index_2} the item returned is ${array1.at(index_2)}`);
// // Expected output: "Using an index of 2 the item returned is 8"
// index = -2;
// console.log(`Using an index of ${index_2} item returned is ${array1.at(index_2)}`);
// // Expected output: "Using an index of -2 item returned is 130"
// Note : the above at() method might give an error in a certain case because
//The at() method is a new addition to the Array object in ECMAScript 2021, so it is possible
//that the version of Node.js that is being used does not support it.
//In particular, Node.js 16.6.0 and later versions have implemented the at() method as part of their
//support for ECMAScript 2021.


