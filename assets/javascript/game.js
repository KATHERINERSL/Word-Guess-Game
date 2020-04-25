var underscoresLabel = document.querySelector("#underscores");
var remainingLabel = document.querySelector("#remaining-guesses");
var attemptsLabel = document.querySelector("#attempts");

wordBank = ["enterprise", "data", "spock", "kirk"];
attempts = []

var remainingAttempts = 10;

function updateLabels() {
    underscoresLabel.textContent = "_ _ L _ _"
    remainingLabel.textContent = "11"
    attemptsLabel.textContent = attempts.join(', ')
}

updateLabels()

document.addEventListener("keypress", function(e) {
    var keyPressed = e.key.toLocaleLowerCase();
    attempts.push(keyPressed)

    updateLabels()
})


