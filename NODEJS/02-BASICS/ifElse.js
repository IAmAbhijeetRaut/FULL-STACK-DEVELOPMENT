if(true){//start of code block from '{'
    console.log("Inside a if block");
    console.log("Still inside a if block");
}//end of code block with '}'


//The if...else...if statement stops evaluating the remaining conditions as soon as a condition is true
if(false){ // if this is false it will go to else if block
    console.log("Inside a if block"); 
} else if (true) { // 2nd else if is not gonna execute if this 1st else if block is true despite 2nd else if block is true or not 
    console.log("Inside a else if block");
} else if (true) { 
    console.log("Inside another else if block");
} else { // this block gets executed if any of the else-if or if block is not executed
    console.log("Inside else block")
}


var whoIsHere = 'user';

if(whoIsHere === 'user'){ // It returns true if the values on both sides are equal and of the same type, and false otherwise.
    console.log('Greeting Message for user');
    console.log('Allow access to view all courses');
} else if (whoIsHere === 'teacher'){
    console.log('Greeting Message for TEACHER');
    console.log('Allow access to his courses');
}else { 
    console.log('MESSAGE : please verify your email');
    console.log("Send user an email verification");
}





/* 
JavaScript allows the values of other types to be cast to boolean values. To cast a 
non-Boolean value to a boolean value, you use the built-in Boolean() function .
For example, the if statement executes a block if a condition is true. If you use 
a non-boolean value, it’ll use the Boolean() function to implicitly cast that value to a boolean value.
*/