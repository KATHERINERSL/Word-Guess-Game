//not hangman but similar to this game https://youtu.be/W-IJcC4tYFI.
// Game opens with link. The theme is Star Trek
//There will be h1 Word Guess Game, at the top of the page. 
//create variable. an array of words. Variable for count and wins. (not sure if line 6 & 7 is needed?)

//var anykey = "keys";
//var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var words = ["enterprise", "data", "spock", "kirk"];
var numberOfWords = words.length
var randomIndex = Math.floor(Math.random() * numberOfWords);

// This is the word to guess
var answer = words[randomIndex]

var myLength = answer.length;
var display = [myLength];
var letters = answer.split('');
var remainingGuesses= 10;
var output= "";
var userLetter= "";


// User will press any key to active the game.  Create a onClick function to start game? 
// Current word. Computer selects a random word. random word from array.
var word = Game[Math.floor(Math.random() * game.length)];

//Using array to create for=loop, this will generate blank spaces-_ of the word the computer choses. This loops from one word to the next in the game. 
for (var i = 0; i, answer.length; i++) {
    //answerArray[i] = "_";
    break;
    //alert(answerArray.join(" "));
}


// This will count the remaining letter variable to decrease by 1. Need to track and record letter guesses
remainingLetters = word.length;
//Counter - for every guess, variable will decrease by 1. Once it hits 0, player has won or loss? 
while (remainingletters > 0) {
   // alert(answerArray.join(" "));
}
var submit = function()
{
    outpost = "";
    lettersGuess=$("letters").value;
    $("letter").value ="";

    for(var c = 0; c < answer.length; c++)
    {
        alert(letters[c]);
        if (lettersGuess.toUpperCase()) {

        }
        //win -- 
    }
     outpost = outpost + display[c] + "";
   
}

document.getElementById("game").innerHTML = output;
output="";
remainingGuesses--;

if (win <1)
{
    document.getElementById("guesses").innerHTML ="YOU WIN!!!"
}
else if (remaingGuesses < 1)
{
    document.getElementById('guesses"').innerHTML ="YOU LOSE!!!";
}
else
{
    document.getElementById("guesses").innerHTML ="You have " +
    remainingGuesses + " guesses left";
}




