//while loop:

// 1. Declare and initialize the count variable to 1.
let count = 1;

// 2. Use the while loop statement to output the odd numbers between 1 and 10 to the console.
while (count < 10) {
console.log(count);
count +=2;
}

// The output will be:
// 1
// 3
// 5
// 7
// 9

/* Key Points:
1. The while statement creates a loop that executes a block as long as a condition evaluates to true.
2. The while loop evaluates the expression before each iteration, and if it evaluates to true, the statement is executed. Otherwise, the loop exits.
3. The while loop is known as a pretest loop because it evaluates the expression before each iteration.
4. If the expression evaluates to false before the loop enters, the while loop will never execute.
5. To execute the statement at least once and check the condition after each iteration, use the do…while statement.
6. In the given example, the count variable is initialized to 1, and the while loop is executed until count is less than 10. The statement inside the loop outputs the value of count and increments it by 2.
7. After 5 iterations, the value of count becomes 11, and the condition count < 10 becomes false. Thus, the loop exits.
*/

