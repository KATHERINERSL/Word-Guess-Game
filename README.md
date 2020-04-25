// Show the player their progress
// Take input from the player
// user presses correct letter key, letter displays under "current word". If and else if statement.

var guess = prompt("Guess a letter, or click Cancel to stop playing.");
if (guess === null) {
    //exit game loop
} else if (guess.length !== 1) {
    alert("Please enter a single letter.");
} else {
    //update the game state with a guess
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            display[j] = guess;
            remainingLetters--;
        }
        document.getelementById("game").innerHTML = outpost;
        outpost ="";
    }
}

//the end of the game loop

//Update answerArray and remainingLetters for every correct guess
//need to solve for the following; wins and count, letter used tracker
  // user presses incorrect letter key, letter displays under "letters used". Create function for if, else if.
  // number of guesses - user will see counter max at start of each word game, for each letter chosen, counter will count back to 0, game ends.
  // user guesses word, and completes choosing the letters. Wins is counted displayed, image of word displays and header above game displays. Music optional.
  //need to use document.write()
  //player counts 1 less for each key stroke player uses. Player has 10 guesses.
 
  // Show the answer and congratulate the player
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);