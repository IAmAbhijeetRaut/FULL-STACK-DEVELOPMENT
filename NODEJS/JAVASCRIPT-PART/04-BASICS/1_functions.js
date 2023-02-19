let sayHello  = function (){
    console.log("Hello");
    console.log('Welcome');
}

sayHello() // calling the function 

 let doSomething = function(a,b,c){
        console.log(`Printing using literals : a = ${a}, b = ${b}, c = ${c}`);
        console.log("Printing without literals: a = ",a, " b = ",b," c = ",c,"\n");
 }

doSomething(1,2,3);
doSomething(1,2);
doSomething(1);
doSomething();

//Template Literals print blank only in the case of arrays
let a_1=10, b_1=15, c_1=[1,2,,4,,5], c_2;
console.log(`Printing using literals ${a_1} ${b_1} ${c_1}`);
console.log("Printing without using literals a_1 = ",a_1, " b_1 = ",b_1," c_1",c_1);//Did Print blank in case of c_1
console.log(`Printing using literals c_2 = ${c_2}`);//Did not print blank in case of c_1
console.log("Printing without using literals c_2 = ",c_2);
 

let nameAndRoll = function(name='UnknownName', roll=4){
    return 'Student name is '+name+' your roll.no is : '+roll;
}

console.log(nameAndRoll("swaraj"));//did not pass rollNo so 4 is prnted in rollno
//Parameters are still set left-to-right, overwriting default parameters even if there
//are later parameters without defaults. 
console.log(nameAndRoll(undefined)); // This way you can trigger the use of default parameter for the 1st parameter
console.log(nameAndRoll(undefined,66));