// Function Type

/* 
1. In JavaScript, all functions are objects. They are the instances of the Function type. 
  Because functions are objects, they have properties and methods like other objects.
2. Functions properties : -
Each function has two important properties: length and prototype.
- The length property determines the number of named arguments specified in the function declaration.
- The prototype property references the actual function object.
*/

//Example function
function func_1(a,b,c){
        return a + b + c;
}

console.log(`func_1 length  = ${func_1.length}`); // op : 3 // because func_1 accepts 3 parameters 
console.log(`func_1 prototype  = ${func_1.prototype}`);// op : [object Object]

//new.target 
//ES6 introduced the new.target pseudo-property that allows you to detect whether a function or 
//constructor was called using the new operator.
//If a function is called normally, the new.target is undefined. However, if the function is called using the new keyword as a constructor, the new.target return a reference to the constructor.
function add(x, y) {
    console.log(new.target);
    return x + y;
  }
  
  let result = add(10, 20); // new.target -> undefined
  let obj = new add(10, 20); // new.target -> [Function : add]

  // using new.target we can also control the call to the function by throwing error 
  function add_2(x, y) {
    if (new.target) {
      throw 'The add function cannot be called as a constructor';
    }
    return x + y;
  }
  
  let obj_2 = new add_2(10, 20);
  console.log(obj_2);