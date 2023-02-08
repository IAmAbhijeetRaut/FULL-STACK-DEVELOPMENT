// datatype - Array
// JavaScript arrays are resizable and can contain a mix of different data types.
// JavaScript array-copy operations create shallow copies. 


//create an array 
// type1 -> let scores = new Array(); 
// type2 -> let scores = Array(10); // array with initial size defined, you can omit the new operator
// type3 -> let scores = new Array(1, 2, 3); // create an array with three numbers 1,2 3
// type4 -> let arrayName = [element1, element2, element3, ...]; //Most preferred way 

const superHeroes = ['Iron Man', 'Spiderman', 'Capt. America'];
const items = [
    { name: "Bike", price: 100 },
    { name: "TV", price: 200 },
    { name: "Album", price: 300 },
    { name: "Book", price: 400 },
    { name: "Phone", price: 500 },
    { name: "Laptop", price: 600 },
    { name: "Computer", price: 200 },
    { name: "Watch", price: 300 },
    { name: "Smartphone", price: 100 },
  ]; //  this is an array of objects

//Accessing array elements
console.log(superHeroes); 
console.log(superHeroes[0]); // print first element
console.log(superHeroes[superHeroes.length-1]); // print last element
console.log(superHeroes[superHeroes.length]); // undefined

//Adding element to an array
superHeroes.push("Batman"); // add at last position
superHeroes[7] = "Doctor Strange"; // add at specific position

//Array elements are object properties in the same way that toString is a property
console.log(Object.keys(superHeroes));

//3 different ways to iterate over an array
//Way-1 : Using traditional for loop
