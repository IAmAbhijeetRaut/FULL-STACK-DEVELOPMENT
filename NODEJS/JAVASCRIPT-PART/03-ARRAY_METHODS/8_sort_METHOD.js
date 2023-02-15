//IMP
/* 
    1. The sort() method sorts the elements of an array in place and returns the reference to the same
       array, now sorted. The default sort order is ascending, built upon converting the elements into
       strings, then comparing their sequences of UTF-16 code units values.
    2. The sort() method preserves empty slots. If the source array is sparse, the 
       empty slots are moved to the end of the array, and always come after all the undefined.
    3. If compareFn is not supplied, all non-undefined array elements are sorted by converting them 
       to strings and comparing strings in UTF-16 code units order.
    4. If compareFn is supplied, all non-undefined array elements are sorted according to the 
       return value of the compare function (all undefined elements are sorted to the end of the
       array, with no call to compareFn).
    5.    function compareFn(a, b) {
                if (a is less than b by some ordering criterion) {
                  return -1;
                }
                if (a is greater than b by the ordering criterion) {
                  return 1;
                }
                // a must be equal to b
                return 0;
         }
*/

//BASIC EXAMPLE
const keywords = [ "Gooogle", "Microsoft","Apple","Infosys","Notion"];
//sort according to ABCD....strings
keywords.sort();
console.log("keywords after sort : ",keywords);


//Custom Defined Comparison Logic using Comparator Function
function compareNumbers(a,b){
   return a-b;
}
const numbers_1 = [10,34,21,4,9,99,67,34,78,33,898,3333,889,55,124,67];
numbers_1.sort(compareNumbers);
console.log("numbers_1 after sorting : ",numbers_1);


//Sorting array of objects
const items_1 = [
   { name: "Edward", value: 21 },
   { name: "Sharpe", value: 37 },
   { name: "And", value: 45 },
   { name: "The", value: -12 },
   { name: "Magnetic", value: 13 },
   { name: "Zeros", value: 37 },
 ];



 //sort by value
 items_1.sort((a,b)=> a.value-b.value);
 console.log("sort by value:\n",items_1);

 //sort by name
 items_1
 .sort((a, b) => {
   const nameA = a.name.toUpperCase(); // ignore upper and lowercase
   const nameB = b.name.toUpperCase(); // ignore upper and lowercase
   if (nameA < nameB) {
     return -1;
   }
   if (nameA > nameB) {
     return 1;
   }
 
   // names must be equal
   return 0;
 });

 console.log("items_1 after sorting by names : \n",items_1);

 
 //sort() returns the reference to the same array
 const numbers_2 = [3, 1, 4, 1, 5];
 const sorted = numbers_2.sort((a, b) => a - b);
 // numbers_2 and sorted are both [1, 1, 3, 4, 5]
 sorted[0] = 10;
 console.log("sorted : ",numbers_2);
 console.log("number_2 : ",numbers_2); // 10

//Syntax
// Functionless
//sort()

// Arrow function
//sort((a, b) => { /* … */ } )

// Compare function
//sort(compareFn)

// Inline compare function
//sort(function compareFn(a, b) { /* … */ })

/*
 
More formally, the comparator is expected to have the following properties, 
in order to ensure proper sort behavior:

Pure: The comparator does not mutate the objects being compared or any external state. 
      (This is important because there's no guarantee when and how the comparator will be called, 
        so any particular call should not produce visible effects to the outside.)

Stable: The comparator returns the same result with the same pair of input.

Reflexive: compareFn(a, a) === 0.

Anti-symmetric: compareFn(a, b) and compareFn(b, a) must both be 0 or have opposite signs.

Transitive: If compareFn(a, b) and compareFn(b, c) are both positive, zero, or negative, then 
            compareFn(a, c) has the same positivity as the previous two.

A comparator conforming to the constraints above will always be able to return all of 1, 0, and -1, 
or consistently return 0. 

For example, if a comparator only returns 1 and 0, or only returns 0 and -1, 
it will not be able to sort reliably because anti-symmetry is broken. 

A comparator that always returns 0 will cause the array to not be changed at all, 
but is reliable nonetheless.

The default lexicographic comparator satisfies all constraints above.
To compare numbers instead of strings, the compare function can subtract b from a. 

*/