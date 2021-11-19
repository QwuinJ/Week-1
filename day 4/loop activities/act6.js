// Research a do...while loop, find out about the differences between for loop, while loop, and do...while loop
// Give an example of each, and pros and cons

// From Mozilla developer:
// Loop mechanisms provide a way to repeat an action a certain amount of times. The various different mechanisms offer different ways to determine the start and end of the loop. 

// for loops
// A for loop repeats until a specified condition evaluates to *false*. 
// syntax:
// for([initialExpression]; [conditionExpression]; [incrementExpression]){
//  statement
// }

// Example:
let faveDrinks = ["Coffee", "Tea", "Vimto"];

// for(let [initialExpression]; [conditionalExpression]; [incrementExpression])
for(let drinksIndex = 0; drinksIndex<faveDrinks.length; drinksIndex++){
    console.log(faveDrinks[drinksIndex]);
}

// do...while loops
// A do...while loop repeats until a specified condition evaluates to false. 
// syntax:
// do
//   statement
// while(condition)

// statement is always excecuted once before the condition is checked. To excecute multiple statements, use a block statement ({...}) to group those statements. If the condition is true, the statement will excecute again. At the end of every excecution, the condition is checked. When the condition is false, excecution stops, and control passes to the statement following do...while.

// example:
let i = 0;
do {
    i+=1;
    console.log(i);
} while (i<5);

// In the example, the do loop iterates at least once, and reiterates until i is no longer less than 5. 

// while statement
// while statements excecute its statement as long as a specified condition evaluates to true. 
// syntax:
// while(condition)
//   statement

// If the condition becomes false, statement within the loop stops excecuting, and control passes to the statement following the loop. 
// The condition test occurs before statement in the loop is excecuted. If the condition returns true, statement is excecuted and the condition is tested again. If the condition returns false, excecution stops, and control is passed to the statement following while. 
// Can also use a block statement ({...}) to group multiple statements to excecute.

// Example:
let n = 0;
let x = 0;
while (n<3) {
    n++;
    x += n;
    console.log(Math.random());
}

// oh this makes a thingy!
// After each iteration, the loop iterates n and adds that value to x. So after the first pass, n=1 and x=1, after the second n=2 and x=3, then after the third n=3 and x=6
// After the third loop, n is no longer < 3. Condition becomes false, and the loop terminates.