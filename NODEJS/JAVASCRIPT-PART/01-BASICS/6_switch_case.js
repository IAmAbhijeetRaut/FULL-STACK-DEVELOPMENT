// The switch statement evaluates an expression, compares its result with case values, and executes the statement associated with the matching case value.

// Here's the basic syntax:
/* Syntax - start
switch (expression) {
    case value1:
    statement1;
    break;
    case value2:
    statement2;
    break;
    case value3:
    statement3;
    break;
    default:
    statement;
    } 
    
// syntax end */
    
    // First, evaluate the expression inside the parentheses after the switch keyword.
    // Second, compare the result of the expression with the value1, value2, … in the case branches from top to bottom. The switch statement uses the strict comparison (===).
    // Third, execute the statement in the case branch where the result of the expression equals the value that follows the case keyword. The break statement exits the switch statement. If you skip the break statement, the code execution falls through the original case branch into the next one. If the result of the expression does not strictly equal to any value, the switch statement will execute the statement in the default branch.
    // The switch statement will stop comparing the expression‘s result with the remaining case values as long as it finds a match.
    // The switch statement is like the if…else…if statement. But it has more readable syntax.
    
    // Here's the equivalent if...else...if statement:
    /* 
    if (expression === value1) {
    statement1;
    } else if (expression === value2) {
    statement2;
    } else if (expression === value3) {
    statement3;
    } else {
    statement;
    }
     */
    // Example 1: Using JavaScript switch statement to get the day of the week
    let day = 3;
    let dayName;
    
    switch (day) {
    case 1:
    dayName = 'Sunday';
    break;
    case 2:
    dayName = 'Monday';
    break;
    case 3:
    dayName = 'Tuesday';
    break;
    case 4:
    dayName = 'Wednesday';
    break;
    case 5:
    dayName = 'Thursday';
    break;
    case 6:
    dayName = 'Friday';
    break;
    case 7:
    dayName = 'Saturday';
    break;
    default:
    dayName = 'Invalid day';
    }
    
    console.log(dayName); // Output: Tuesday
    
    // First, declare the day variable that holds the day number and the day name variable (dayName).
    // Second, get the day of the week based on the day number using the switch statement. If the day is 1, the day of the week is Sunday. If the day is 2, the day of the week is Monday, and so on.
    // Third, output the day of the week to the console.
    
    // Example 2: Using the JavaScript switch statement to get the day count based on a month
    let year = 2016;
    let month = 2;
    let dayCount;
    
    switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
    dayCount = 31;
    break;
    case 4:
    case 6:
    case 9:
    case 11:
    dayCount = 30;
    break;
    case 2:
    // leap year
    if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
    dayCount = 29;
    } else {
    dayCount = 28;
    }}