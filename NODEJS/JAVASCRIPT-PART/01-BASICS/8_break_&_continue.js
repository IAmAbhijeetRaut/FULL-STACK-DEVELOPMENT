//label Statement and break
//In JavaScript, you can label a statement for later use.
//The label can be any valid identifier.
outer: for (let i = 0; i < 5; i++) {
    console.log(i);
    }
    
    //Introduction to JavaScript break statement
    //The break statement prematurely terminates a loop or switch.
    //Here’s the syntax of the break statement:
    //break [label];
    //In this syntax, the label is optional if you use the break statement in a loop or switch.
    
    //Using JavaScript break statement in a for loop
    //To terminate the for loop prematurely, you can use a break statement.
    for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i == 2) {
    break;
    }
    }
    
    //Using the break statement to terminate a nested loop
    //If you use a break statement inside an inner loop, it only terminates the enclosing loop.
    //To terminate the nested loop, you use a label statement.
    outer: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
    if (i + j == 4) {
    break outer;
    }
    console.log(i, j);
    }
    }
    
    //Using JavaScript break statement in a while loop
    //Like a for loop, the break statement terminates a while loop prematurely.
    let x = 0;
    
    while (x < 5) {
    x++;
    console.log(x);
    if (x == 3) {
    break;
    }
    }
    
    //Using JavaScript break statement in a do…while loop
    //Like a while loop, you can use a break statement to prematurely terminate a do...while loop.
    let i = 0;
    do {
    i++;
    console.log(i);
    } while (i < 5);



// Continue
// The continue statement terminates the execution of the statement in the current iteration of a loop such as a for, while, and do…while loop and immediately continues to the next iteration.

// Syntax of the continue statement:
// continue [label];

// The label is optional. It is a valid identifier associated with the label of a statement.

// Typically, you use the continue with an if statement like this:
// inside a loop
// if(condition){
// continue;
// }

// Using the continue statement in a for loop
// When using the continue statement in a for loop, it doesn’t terminate the loop entirely. Instead, it jumps to the iterator expression.

// Example: Using the continue statement in a for loop to display the odd number in the console.
for (let i1 = 0; i1 < 10; i1++) {
    if (i1 % 2 === 0) {
    continue;
    }
    console.log(i1);
    }
    // Output: 1 3 5 7 9
    
    // In this example, the for loop iterates over the numbers from 0 to 9.
    // The i%2 returns the remainder of the division of the current value of i by 2.
    // If the remainder is zero, the if statement executes the continue statement that skips the current iteration of the loop and jumps to the iterator expression i++. Otherwise, it outputs the value of i to the console.
    
    // Using the continue statement in a while loop
    // When using the continue statement in a while loop, it doesn’t terminate the execution of the loop entirely. Instead, it jumps back to the condition.
    
    // Example: Using the continue statement in a while loop to display the odd numbers from 1 to 10.
    let i2 = 0;
    while (i2 < 10) {
    i2++;
    if (i2 % 2 === 0) {
    continue;
    }
    console.log(i2);
    }
    // Output: 1 3 5 7 9
    
    // Using the continue statement with a label
    // The continue statement can include an optional label like this: continue label;
    
    // Example: Using the continue statement with a label
    // The following nested loop displays pairs of numbers from 1 to 2:
    for (let i3 = 1; i3 < 3; i3++) {
    for (let j3 = 1; j3 < 3; j3++) {
    console.log(i3, j3);
    }
    }
    // Output: 1 1 1 2 2 1 2 2
    
    // The following shows how to use the continue statement with a label:
    outer: for (let i4 = 1; i4 < 4; i4++) {
    for (let j4 = 1; j4 < 4; j4++) {
    if (i4 + j4 == 3) continue outer;
    console.log(i4, j4);
    }
    }
    // Output: 1 1 3 1 3 2 3 3
    
    // Use the JavaScript continue statement to skip the current iteration of a loop and continue the next one.

    