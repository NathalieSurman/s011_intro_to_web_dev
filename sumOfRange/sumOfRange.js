var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];


// We also need a variable that will hold the results. We'll call it sum:
// We initialize sum with 0, and we will add values to sum as we go.
var sum = 0
//----Add a user-prompted value---//
//Now convert the newElement statement into a prompt, so the user can enter a new value for the array.
var newElement = prompt("Enter a number of your choice:");

//we need to explicitly tell JavaScript to treat the user input as a number
// If we were using numbers with decimal values, we could use parseFloat instead.
newElement = parseInt(newElement);

//----Add another value to the array---//
testArray.push(newElement); 

// Now let's create a loop that will look at each number in testArray and add each number to the current value of sum.
for(var position = 0; position < testArray.length; position++){
 sum += testArray[position]
}

// Inside the loop, we use the expression testArray[position] to identify the value of the number in that position in the array based
// on the index values assigned to each item


//Now we just need to output the results to the console:
console.log("The sum of " + testArray + " is: " + sum);

