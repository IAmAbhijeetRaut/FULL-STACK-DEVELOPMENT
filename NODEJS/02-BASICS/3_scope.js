// declare variable using 'var' and 'let'

let iAmGlobal = 'someValue';


if (true) { 
    // any variable declared here will be block scoped for this block
    // that means visibility or acesss will not remain outisde this block
    let iAmLocal_1 = 'someMoreValue';
    var iAmLocal_2 = 'Hello Guys'; // global Scoped
    iAmGlobal = 'superman';
    console.log("Inside if block : iAmGlobal : ",iAmGlobal);
    console.log("Inside if block : iAmLocal_1 : ",iAmLocal_1);
    console.log("Inside if block : iAmLocal_2 : ",iAmLocal_2);
}


// console.log(iAmLocal_1); // Could not find name 'iAmLocal_1'
console.log("Outisde if block : iAmLocal_2 : ",iAmLocal_2);// var variable outlives the scope
console.log("Outside if block : iAmGlobal : ",iAmGlobal);



// Territory of let varaibles -->

let King = 'John';
if (true) {
    //let King = 'Sam'; //

    if (true) {
        //let King = 'Ram'
        // King = 'Ram' // never declare the variables in this way as this will leak into global scope
        console.log("Whos is the King ? --> ",King); // this is gonna look into its scope first
        // if any value found in its own scope then it will print it
        // so in this case if we comment King = Ram then it will consider Sam as the king
        // if Sam part is also commented then 
    }
}

if (true) {
    console.log("I am second part : ",King);
    // the King = 'Ram' i.e. without var or let declaration will be leaking here i.e. it will be accessible here
}


/* var --> 
1. The var variables belong to the global scope when you define them outside a function.
   when we say outside the function then it means whether we define them outside all the blocks
   or inside a if block{} or for loop then also it remains in a global scope.
2. The var keyword allows you to redeclare a variable without any issue.
3. In the creation phase, the JavaScript engine assigns storage spaces to var variables 
   and immediately initializes them to undefined.
4. In the execution phase, the JavaScript engine assigns the var variables the values specified by 
   the assignments if there are ones. Otherwise, the var variables remain undefined.
*/ 

/* let --> 
1. In the creation phase, the JavaScript engine assigns storage spaces to the let variables but does 
   not initialize the variables. Referencing uninitialized variables will cause a ReferenceError.
2. The let variables have the same execution phase as the var variables.
 */