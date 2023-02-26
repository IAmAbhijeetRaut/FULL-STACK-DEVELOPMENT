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


// IIFE - Immediately Invoked Function Expression
// A JavaScript immediately invoked function expression is a function defined as an expression and executed immediately after creation.

(function(){
    //...
    })();
    
    // When you define a function, the JavaScript engine adds the function to the global object. If you declare a variable outside of a function using the var keyword, the JavaScript engine also adds the variable to the global object.
    
    function add(a,b) {
    return a + b;
    }
    console.log(global.add);
    
    var counter = 10;
    console.log(global.counter); // 10
    
    // One way to prevent the functions and variables from polluting the global object is to use immediately invoked function expressions.
    
    let sum = (function(a,b){
    return a + b;
    })(10, 20);
    
    console.log(sum); // 30
    
    // An IIFE can have a name. However, it cannot be invoked again after execution.
    
    (function namedIIFE() {
    //...
    })();
    
    // An IIFE can start with a semicolon (;) to terminate the statement in case two or more JavaScript files are blindly concatenated into a single file.
    
    ;(function() {
    //...
    })();
    
    // By placing functions and variables inside an immediately invoked function expression, you can avoid polluting them to the global object.
    
    (function() {
    var counter = 0;
    
    function add(a, b) {
    return a + b;
    }
    
    console.log(add(10,20)); // 30
    })();
    
    // Suppose that you have a library called calculator.js with the following functions:
    // function add(a, b) { return a + b; }
    // function mutiply(a, b) { return a * b; }
    
    // And you load the calculator.js in an HTML document.
    // Later, you also want to load another JavaScript library called app.js to the same document.
    
    // The app.js also has the add() function: function add() { return 'add'; }
    
    // When you use the add() function in the HTML document, it returns the 'add' string instead of the sum of two numbers:
    
    let result = add(10, 20);
    console.log(result); // 'add'
    