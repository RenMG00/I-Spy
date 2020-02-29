
let textInput = document.getElementById ('inputbox');
let numberOfGuesses = 0;
var winSound = new Audio('winning.wav');
var randNum = Math.round( Math.random() * 99  + 1);
var guess = prompt("Guess a number between 1-100!");

if (guess == randNum){
    console.log('Great job on the first try!')
}

let resultsContainer = document.getElementById('theResult')
let h3 = document.createElement('h3')
resultsContainer.appendChild(h3)


console.log(randNum);

function sendData() {
     numberOfGuesses++;
     var guessNum = textInput.value;

if (isNaN(guessNum)) {
    h3.textContent = 'Invalid!'
    console.log("Invalid!")
} else {
    if ( guessNum > randNum) {
    h3.textContent = 'Too High!'
    console.log("Too high.")
} else if (guessNum < randNum) {
    h3.textContent = 'Too low!'
    console.log("Too low.")
} else if (guessNum == randNum) {
    h3.textContent = 'Congrajulations!'
    console.log("This is the correct number!")
    alert("It took you " + numberOfGuesses + " tries! ")
    winSound.play();
 }
 }
}