const myTodos = [
    'Learn React', 'Learn Dancing', 'Learn DSA'
]

// console.log(myTodos.indexOf('Learn react')); // Case Sensitive, therfore will return -1 if match not found
// console.log(myTodos.indexOf('Learn React')); // OP : 0

const newToDos = [
    {
        title:'Learn React',
        isDone:false,   
    }, 
    {
        title:'Learn Dancing',
        isDone:false,
    }, 
    {
        title:'Learn DSA',
        isDone:true,
    }
]

const index = newToDos.findIndex((todo, index)=>{
    return todo.title === 'Learn DSA';
})

console.log(index);

// const findToDo = function(anyTodos, title){
//     const index = anyTodos.findIndex((anyTodos, index)=>{
//         return anyTodos.title.toLowerCase() === title.toLowerCase();
//     })
//     return anyTodos[index];
// }

// let findAndPrintToDo = findToDo(newToDos,"LEarn REact");
// console.log("findAndPrintToDo : ",findAndPrintToDo);

const findToDo = function(anyTodos, title){
        const titleReturned = anyTodos.find((anyTodos, index)=>{
        return anyTodos.title.toLowerCase() === title.toLowerCase();
    })
    return titleReturned;
}

let findAndPrintToDo = findToDo(newToDos,"LEarn REact");
console.log("findAndPrintToDo : ",findAndPrintToDo);