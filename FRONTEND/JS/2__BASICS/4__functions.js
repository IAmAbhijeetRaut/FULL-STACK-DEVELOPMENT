// Simple Function 
function funcName(p1,p2,p3){
    console.log(`The Addition of ${p1}, ${p2} and ${p3} is = ${p1+p2+p3}`);
}

funcName(10,20,30); // 60
funcName(10,20); // p3 is undefined and result of addition is NaN
funcName(10,20,30,40); // 60 

function checkEvenOdd(a){
    if(a%2==0) console.log("Number is Even");
    else{console.log("Number is Odd");}
}

checkEvenOdd(10);
checkEvenOdd(23);



//Function that have a return statememt
function returnAddition(p1,p2,p3){
    return `The Addition of ${p1}, ${p2} and ${p3} is = ${p1+p2+p3}`;
}
console.log(returnAddition(1,4,5));
let addition_1 =  returnAddition(2,9,5);
console.log("additon_1 = "+addition_1);


function squareOfPrimesTill(limit){
    let PrimeList = [];
    let number;
    for (let i = 2; i <= limit; i++) {
        let isPrime = true;
        number = i;
         for (let j = 2; i > j; j++) {
           if (i % j === 0) {
           isPrime = false;
           break;
           }
         }
               if (isPrime) {
               PrimeList.push(number);
               }
       }
       return PrimeList;
}
console.log("Prime List is : "+squareOfPrimesTill(200));


// Anonymous function 
let func_1 = function(a,b){
    console.log("Additon is : ",(a+b));
}
func_1(10,30);


//Function object/Function Constructor
let func_2 = Function("a", "b", "return a + b;");
console.log("Inside the Function Object : Function Addition is = ",func_2(30,60));


//Arrow Functions
let func_3 = (a,b)=>{
    console.log("Inside Arrow Function - Additon is : ",(a+b));
}
func_3(10,30);





