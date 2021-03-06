var underscoresLabel = document.querySelector("#underscores");
var remainingLabel = document.querySelector("#remaining-guesses");
var attemptsLabel = document.querySelector("#attempts");

var wordBank = ["enterprise", "data", "spock", "kirk"];
var attempts = []
var remainingAttempts = 10;

// Main Functionality Starts
var wordToGuess = getWord();
updateLabels()

function getWord() {
    var wordsSize = wordBank.length;
    var indexWord = Math.floor(Math.random() * wordsSize);
    
    return wordBank[indexWord];
}

function updateLabels() {
    underscoresLabel.textContent = updateBlanks()
    remainingLabel.textContent = remainingAttempts;
    attemptsLabel.textContent = attempts.toString();
}

function updateBlanks() {
    var blanks = []

    // Go through each letter in wordToGuess
    for(var letter of wordToGuess) {
        if(attempts.includes(letter)) {
            blanks.push(letter)
        } else {
            blanks.push('_')
        }
    }

    return blanks.join(' ')
}

document.addEventListener("keypress", function(e) {
    var keyPressed = e.key.toLocaleLowerCase();

    if(!attempts.includes(keyPressed)) {
        attempts.push(keyPressed);

        if(!wordToGuess.includes(keyPressed)) {
            remainingAttempts--;
        }
    }

    // Decrease attempts by one when key pressed
    updateLabels();

    if(remainingAttempts == 0) {
        alert("Game Over!")
        window.location.reload(true);
    }
})
// wanted to add star Trek Fonts to the Game but didn't have the proper app for it. Also wanted to add Music but needed an audio connector to do so.
//also wasn't able to add a "winner" alert for if you guessed the word correct. 