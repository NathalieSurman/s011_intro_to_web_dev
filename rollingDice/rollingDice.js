// for (var i = 0; i < 100; i++) {
//     console.log(Math.floor(Math.random() * 6) + 1);
//     // JavaScript performs the Math.random call first, 
//     // multiplies that value by 6, and then calls Math.floor to round the output down to the next integer.
//   }

//   Here are the steps that JavaScript uses to calculate the final result, starting from the inside out.
// 1. Math.random(): JavaScript generates a random number between 0 and not‑quite 1.
// 2. Math.random() * 6: JavaScript multiplies the random number by 6, resulting in a number between 0 and not‑quite 6.
// 3. Math.floor(Math.random() * 6) : JavaScript rounds down the current value to the nearest integer, resulting in a value that is 0, 1, 2, 3, 4, or 5.
// 4. Math.floor(Math.random() * 6) + 1: JavaScript adds 1 to the current value, resulting in an integer between 1 and 6, inclusive, which is exactly what we need.


// function rollDice() {
//     return Math.floor(Math.random() * 6) + 1
// }

// for(var i = 0; i < 100; i++){
//     console.log(rollDice());
// }

// function rollDice(numSides) {
//     return Math.floor(Math.random() * numSides) + 1;
// }

// for (var i = 0; i < 100; i++) {
//     console.log(rollDice(12));
// }

//--------- prompt() part ---------//
var numSides = prompt("How many sides does the die have?");

function rollDice(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}

for (var i = 0; i < 100; i++) {
    console.log(rollDice(numSides));
}