
// Game opens with link. The theme is Star Trek
//There will be h1 Word Guess Game, at the top of the page.  Choose a theme.
//variables: keystroke?, blanks, letters, # of guesses, # of wins?, 
//
var anykey = "keys";
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var words = ["enterprise", "data", "spock", "kirk"];
var guessCount = 13;


//Visual of page: 
//a. there is a "box -- border"  -  "Press any key to start the game".

//b. User will press any key to active the game.  Create a onClick function to start game?

//c. Displayed - 

// Current word.
var word = words[Math.floor(Math.random() * words.length)];

    //create an array "_" that will represent each blank. Keeping a collection of blank spaces and filling them as the player guesses the game.
    //each blank will be represented with a string "_"
        // Guesses - 
    

// each word will have number of spaces displayed _ _ _ _ - this will require a loop.  May add an alert.
var answerArray = [];
for (var i = 0; i, word.length; i++) {
    answerArray[i] = "_";
    alert(answerarray.join(" "));
}



    // Counter - for every guess, variable will decrease by 1. Once it hits 0, player has won or loss.
      while (remainingletters > 0) {
          //alert()
      }

         // Game code goes here
       // Show the player their progress
       // Take input from the player

       var guess = prompt("Guess a letter, or click Cancel to stop playing.");
       if (guess === null) {
           break;
       } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
       } else {
//update the game state with a guess
       }
    

       //Update answerArray and remainingLetters for every correct guess
       //var remainingLetters = word.length;
 







      // Wins
        // Count
        // Letter Used
        // Letters chosen by user is displayed
// user presses correct letter key, letter displays under "current word". Create an onclick for letters/eventListener. Create an array for letters of alphabet.
// user presses incorrect letter key, letter displays under "letters used". Create function for if, else if.
// number of guesses - user will see counter max at start of each word game, for each letter chosen, counter will count back to 0, game ends.
// user guesses word, and completes choosing the letters. Wins is counted displayed, image of word displays and header above game displays. Music optional.
//need to use document.write()