
// Name: Nathalie Surman
// Date Created: 24/04/2023
// Most recent revision
// Your solution goes here 

function playGuessingGame(numToGuess, totalGuesses = 10) {
    let numGuesses = 0;
    let guess;

    while (numGuesses < totalGuesses) {

        // If the user is making their first guess
        if (numGuesses === 0) {
            guess = prompt("Enter a number between 1 and 100.");
        } else if (guess < numToGuess) {
            // If the user previously guessed a number < numToGuess
            guess = prompt(`${guess} is too small. Guess a larger number.`);
        } else if (guess > numToGuess) {
               //If the user previously guessed a number > numToGuess
            guess = prompt(`${guess} is too large. Guess a smaller number.`);
        }

        // If the user presses Cancel, playGuessingGame() should immediately return 0 without prompting for any more numbers.
        if (guess === null) {
            return 0;
        } else if (String(guess).trim() === "" || isNaN(guess)) {
        // If the user enters an empty string or a string that is not a number
            guess = prompt("Please enter a number.");
            continue;
        }

        numGuesses++;

        if (Number(guess) === numToGuess) {
            return numGuesses;
        }
    }

    return 0;

}

// console.log(playGuessingGame(20, 3));

// console.log(playGuessingGame(7, 3) );
