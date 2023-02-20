// More on Functions 

//Functions can be stored in variables
let functionVariable_1 = ()=>{
    console.log("call to functionVaraible_1");
}

functionVariable_1(); // call to function which is stored in a variable
console.log("typeof functionVariable_1 : ",typeof functionVariable_1);

let functionVariable_2 = functionVariable_1; // storing function in a variable
console.log("typeof functionVariable_2 : ",typeof functionVariable_2);


//Passing function to another function

let function_1 = (a,b,anotherFunction)=>{
    console.log("INSIDE - function_1");
    console.log(`Value of a = ${a} and b =${b}`);
    return anotherFunction((a*6), (b,9)) * 100;
}

let multiply_1 = (a,b)=> {
    console.log("INSIDE  - multiply_2");    
    return a*b
};

let finalResult = function_1(2,5,multiply_1);

console.log(`finalResult = ${finalResult}`);
