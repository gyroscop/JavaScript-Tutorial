let randomNumber = parseInt(Math.random() * 100 + 1);

const guess = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const prev_guess = [];
const Previous_Guess = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const intguess = parseInt(guess.value);
    validateGuess(intguess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number less than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prev_guess.unshift(intguess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function displayGuess(guess) {
  Previous_Guess.innerHTML = prev_guess;
  guess.value = "";
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  guess.value = "";
  guess.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prev_guess = [];
    numGuess = 1;
    Previous_Guess.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess} `;
    guess.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
