// IMP 
/* 
 1. The copyWithin() method shallow copies part of an array to another location in the same
    array and returns it without modifying its length.
 2. copyWithin() never extends the array.
 3. The copyWithin() method preserves empty slots. If the region to be copied from is sparse, the empty slots' 
    corresponding new indices are deleted and also become empty slots.
*/


//Basic Example
const array_1 = [1,2,3,4,5,6,7,8,9,10];
array_1.copyWithin(0,2,4); // expected output : 
console.log("copyWithin-1 for array_1 : ",array_1);



//Using copyWithin() on sparse arrays
console.log("copyWithin method on sparse arrays : ", [1, , 3].copyWithin(2, 1, 2)); // [1, empty, empty]


//Syntax
/* 
copyWithin(target)
copyWithin(target, start)
copyWithin(target, start, end)

target -> index at which to copy the sequence to 
start ->  index at which to start copying elements from -> if not specified/omitted then 0 is used
end ->    index at which to end copying elements from -> if omitted then it causes all elements until the end to be copied.
*/