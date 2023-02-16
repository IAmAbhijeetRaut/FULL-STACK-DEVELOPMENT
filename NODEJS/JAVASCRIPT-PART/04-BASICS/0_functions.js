//FUNCTIONS

// BASIC FUNCTIONS ------------------------------------------------------------------

//1. parameterless functions (non-returning function)
function function_1(){
    console.log("Inside function_1 \n");
}

function_1(); //function call
function_1("Hello"); // passing argument to parameterless function // nothing happens, no errors, arguments get neglected


//2. parameterized function (non-returning function)
function function_2(p1,p2,p3){
    console.log("Inside function_2");
    console.log(`Inside function_2 value of -> p1 :${p1} | p2 : ${p2} | p3 : ${p3}\n`);
}

function_2(1,2); // less parameters passed // Therefore, p3 is undefined
function_2(3,4,5); // exact parameters passed
function_2(6,7,8,9,10); // more parameters passed


//3. parameterized returning function;
function function_3 (p1, p2, p3){
    console.log("Inside returning type function_3");
    console.log(`Inside function_3 value of -> p1 :${p1} | p2 : ${p2} | p3 : ${p3}`);
    return [p1,p2,p3]; // passing the arguments back to caller
}

let call_1 = function_3(1,2) // less parameters //returned value stored in call_1
console.log("call_1 = ",call_1,"\n");//if string literal was used here then it would have printed just blank space instead of undefined
let call_2 = function_3(1,2,3)  // exact parameters //returned value stored in call_1
console.log("call_2 = ",call_2,"\n");
let call_3 = function_3(1,2,3,4) // more parameters // no errors , for extra arguments / parameters //returned value stored in call_1
console.log("call_3 = ",call_3,"\n");


// ADVANCED FUNCTIIONS -----------------------------------------------------------------
let num1 = 100;
let num2 = num1;

console.log(`num2 = ${num2}, ${typeof num2}`);
console.log(`num1 = ${num1}, ${typeof num1}`);

// function definition
function function1() {
    console.log(`inside function1`);
  }

//4. Function Alias
const myFunction1 = function1;
console.log(`function1 = ${function1} type = ${typeof function1}`)
console.log(`myFunction = ${myFunction1} type = ${typeof myFunction1}`)
//nearly same kind of output in both the cases
/* Below is the output  
function1 = function function1() {
    console.log(`inside function1`);
  } type = function
myFunction = function function1() {
    console.log(`inside function1`);
  } type = function 
 
  */

//call to function1 and myFunction1
console.log('using original function');
function1();
console.log('using alias');
myFunction1();
//same output in both the cases


//5.anonymous/unnamed function
const myFunction2 = function () {
    console.log("inside anonymous myFunction2");
  };
myFunction2();



//6. Arrow Function / Fat Arrow Function / lambda function
