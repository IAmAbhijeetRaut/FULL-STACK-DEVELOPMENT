// The lastIndexOf() method searches for the last occurrence of a substring in a string.

// Syntax:
// str.lastIndexOf(substr, [, fromIndex]);

// It returns the index of the last occurrence of the substring if found, otherwise it returns -1.
// The fromIndex is optional and if provided, it starts the search from the specified index and searches backwards.
// If fromIndex is greater than or equal to the string length, the method will search the whole string.
// If fromIndex is less than zero, it will start the search from index 0.

// Example 1: Using lastIndexOf() method to locate the last occurrence of a substring 'JavaScript'
let str1 = 'JavaScript';
let index1 = str1.lastIndexOf('a');
console.log('Log_1:', index1); // Output: 3

// Example 2: Using lastIndexOf() method with fromIndex argument
// Here the search will start from index 2 i.e. 'v' and goes backwards
let str2 = 'JavaScript';
let index2 = str2.lastIndexOf('a', 2);
console.log('Log_2:', index2); // Output: 1

// The lastIndexOf() method is case-sensitive
// Example 3: Case-sensitive search with lastIndexOf() method
let str3 = 'Hello, World!';
let substr3 = 'L';
let index3 = str3.lastIndexOf(substr3);
console.log('Log_3:', index3); // Output: -1

// To perform a case-insensitive search, we can convert both substring and string to lowercase
// Example 4: Case-insensitive search with lastIndexOf() method
let str4 = 'Hello, World!';
let substr4 = 'L';
let index4 = str4.toLowerCase().lastIndexOf(substr4.toLowerCase());
console.log('Log_4:', index4); // Output: 3


/* Output:

Log_1: 3
Log_2: 1
Log_3: -1
Log_4: 3 */
