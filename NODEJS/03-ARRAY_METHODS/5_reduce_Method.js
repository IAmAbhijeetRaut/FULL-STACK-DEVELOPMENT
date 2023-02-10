//IMP
/* 
    1.  
*/

//Suppose we have an array [1,2,3,4,5] and we want the addition of all the elements as a result then
// traditionally it can be achieved like this 
const array_1 = [1,2,3,4,5];
let sum_1 = 0;

for (let index = 0; index < array_1.length; index++) {
    sum_1 += array_1[index];
}
console.log("Traditional Approach : sum_1 =  ",sum_1);

//using reduce method
// syntax-1 : reduce(callBackFn, initialValue)
let sum_2 = array_1.reduce(function(previousValue, currentValue){
    return previousValue + currentValue 
},0)
// current Value = array[0], if initial value is specified otherwise it will be array[1]
// if you have initialValue passed in the reduce function it will be considered otherwise if not 
// passed then array[0] will be considered

// Therefore Here , on the first call of the function the previousValue = initialValue = 0
// and currentValue = array[0] 

// After computation the function return some value this is the new value of previousValue
// so previousValue = returned value by the function

// Now the currentValue will be the next element of the array i.e. array[1] or array[2] depending upon whether initial
//value was passed or not respectively and this reduce function is executed till tje last array element and 
//finally it returns the last computed value

console.log("Using Reduce Method : sum_2 = ",sum_2);

//Application of reduce method

//Flatten an array of arrays
const flattened = [
    [0, 1],
    [2, 3],
    [4, 5],
  ].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
  // flattened is [0, 1, 2, 3, 4, 5]
console.log("flattened array : ",flattened);  



//Counting instances of values in an object
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const countedNames = names.reduce((allNames, name) => {
  const currCount = allNames[name] ?? 0;
  return {
    ...allNames,
    [name]: currCount + 1,
  };
}, {});
console.log("countedNames : ",)
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }


//Grouping objects by a property
const people = [
    { name: "Alice", age: 21 },
    { name: "Max", age: 20 },
    { name: "Jane", age: 20 },
  ];
  
  function groupBy(objectArray, property) {
    return objectArray.reduce((acc, obj) => {
      const key = obj[property];
      const curGroup = acc[key] ?? [];
  
      return { ...acc, [key]: [...curGroup, obj] };
    }, {});
  }
  
  const groupedPeople = groupBy(people, "age");
  console.log(groupedPeople);
  // {
  //   20: [
  //     { name: 'Max', age: 20 },
  //     { name: 'Jane', age: 20 }
  //   ],
  //   21: [{ name: 'Alice', age: 21 }]
  // }
  








//Syntax
// Arrow function
// reduce((accumulator, currentValue) => { /* … */ })
// reduce((accumulator, currentValue, currentIndex) => { /* … */ })
// reduce((accumulator, currentValue, currentIndex, array) => { /* … */ })

// reduce((accumulator, currentValue) => { /* … */ }, initialValue)
// reduce((accumulator, currentValue, currentIndex) => { /* … */ }, initialValue)
// reduce((accumulator, currentValue, currentIndex, array) => { /* … */ }, initialValue)

// Callback function
// reduce(callbackFn)
// reduce(callbackFn, initialValue)

// Inline callback function
// reduce(function (accumulator, currentValue) { /* … */ })
// reduce(function (accumulator, currentValue, currentIndex) { /* … */ })
// reduce(function (accumulator, currentValue, currentIndex, array) { /* … */ })

// reduce(function (accumulator, currentValue) { /* … */ }, initialValue)
// reduce(function (accumulator, currentValue, currentIndex) { /* … */ }, initialValue)
// reduce(function (accumulator, currentValue, currentIndex, array) { /* … */ }, initialValue)