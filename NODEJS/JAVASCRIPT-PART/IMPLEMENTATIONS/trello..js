//creating a trello to do app

const myToDos = [];

//adding elements at the end of array
myToDos.push("Buy a laptop");
myToDos.push("Buy a Coffee");
myToDos.push("Go to a trek");
myToDos.push("Learn Coding");

myToDos.forEach((element, index)=>console.log(`To do no.${index}-> ${element}`));



//adding elements at the start of the array 
myToDos.unshift("Create a new BlogPost");
myToDos.unshift("Search for a new project");
console.log("\n"); // added to keep a separation between above OP and below OP, nothing to do with unshift operation

for (let index = 0; index < myToDos.length; index++) {
    const element = myToDos[index];
    console.log(`To do no.${index}-> ${element}`);
}