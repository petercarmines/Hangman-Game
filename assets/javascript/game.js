/* Array of possible word choices */
var teams = ["cavaliers", "thunder", "celtics", "jazz", "pistons", "wizards"];

/* selects random word from array */
var word = teams[Math.floor(Math.random() * teams.length)];

/* generates array of underscores based on randomly selected word length */
var underscores = [];
for (var i = 0; i < word.length; i++) {
    underscores[i] = "_"
};

/* variable that will display number of wins */
var wins = 0;

/* variables to display number of guesses left */
var remainingChances = 7;
var x = 1

/* variable to hold letters that have been guessed */
var usedletters = [];

/* displays underscores, number of guesses left, and number of wins when pages loads */
window.onload = function data() {
    document.getElementById("word").innerHTML = underscores.join(" ");
    document.getElementById("chances").innerHTML = remainingChances
    document.getElementById("wins").innerHTML = wins;
}

/* main playable part of game. Registers input from keyboard and tests to see if it matches word */
    document.onkeyup = function (event) {
    var letter = String.fromCharCode(event.which).toLowerCase();
    for (var j = 0; j < word.length; j++) {
        if (word[j] === letter)
            underscores[j] = letter
    }

    /* tests to see if key pressed is in word. If not, adds letter to new array of letters already used */
    if (word.indexOf(letter) < 0) {
        usedletters.push(letter)
        remainingChances = remainingChances - x;
    }

    /* resets game if you run out of guesses */
    if (remainingChances === 0) {
        losegame();
    }

    /* prints data to DOM */
    document.getElementById("guessedletters").innerHTML = usedletters.join(" ")
    document.getElementById("chances").innerHTML = remainingChances
    document.getElementById("word").innerHTML = underscores.join(" ");
    document.getElementById("wins").innerHTML = wins;

    /* resets the game if you have guessed all the letters correctly */
    if (underscores.indexOf("_") < 0) {
    alert("That's right! It's: " + word)
    newgame();} 
}





/* function to reset the game when you win */
function newgame() {
    word = teams[Math.floor(Math.random() * teams.length)];
    underscores = [];
    for (var i = 0; i < word.length; i++) {
        underscores[i] = "_"
    }; wins = wins + x
    remainingChances = 7
    usedletters = [];
    document.getElementById("word").innerHTML = underscores.join(" ");
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("chances").innerHTML = remainingChances
    document.getElementById("guessedletters").innerHTML = usedletters
}

/* function to reset game when you lose */
function losegame() {
    alert("you lose!")
    word = teams[Math.floor(Math.random() * teams.length)];
    for (var i = 0; i < word.length; i++) {
        underscores[i] = "_"
    }; wins = 0
    remainingChances = 7;
    usedletters = [];
    document.getElementById("word").innerHTML = underscores.join(" ");
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("chances").innerHTML = remainingChances
    document.getElementById("guessedletters").innerHTML = (" ")
}