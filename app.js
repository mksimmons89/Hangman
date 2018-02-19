let Word = require("./word.js");

let Letter = require("./letters.js");

const inquirer = require ("inquirer");

const isLetter = require ("is-letter");

const defaults = {
words: ["jupiter", "pluto", "moon", "star", "earth"],
score:0,
lives: 10
}

let wordBank = [],
    userGuesses = [],
    score = 0,
    lives = 0,
    currentWord = {},
    gameRun = true;

// let currentWord;
// let newWord = new Word (wordBank[1]);
//
// let letterGuesses = [];
//
// letterGuesses = newWord.printWord();
//
// console.log(letterGuesses);

function getRandInt(min, max){
  return Math.floor(Math.random()*(max - min +1)) + min;
  }
  function chooseWord(){
    let random = getRandInt(0, wordBank.length -1);
    currentWord = new Word(wordBank[random]);
    currentWord.generateLetters();

    // console.log(random, wordBank[random]);
    // let newWord = new Word(wordBank[random]);
    // console.log(newWord);
    wordBank.splice(random, 1);
    // let letterGuesses = [];
    // letterGuesses = newWord.printWord();
  // console.log(letterGuesses);
}


function resetVars() {
  wordBank = defaults.words;
  score = defaults.score;
  lives = defaults.lives;
  userGuesses = [];
}


function startGame() {
  resetVars();
  chooseWord();
  printGuesses();
  console.log("Lives left: " + lives + '\n');
  currentWord.printWord();
  promptLetter();
}

function endGame(status) {
  switch (status) {
    case 'lose':
      console.log("You lost all of your lives!\n");
      if (wordBank.length > 0) {
        playAgain();
      }
      break;
    case 'win':
      console.log("Congratulations, you guessed all the letters!\n");
      if (wordBank.length > 0) {
        playAgain();
      }
      else
      {
        console.log("You've ran out of words to play with! Please come back and play again!");
        return 1;
      }
      break;
  }
}

function playAgain() {
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'again',
      message: 'Would you like to play again?',
      default: false
    }
  ]).then(function(response) {
    switch (response.again) {
      case true:
        if (lives <= 0) {
          gameRun = false;
          startGame();
        } else {
          userGuesses = [];
          lives = defaults.lives;


          chooseWord();
          printGuesses();
          console.log("Lives left: " + lives + '\n');
          currentWord.printWord();
          promptLetter();
        }
        break;
      case false:
        console.log('Thank you for playing, please play again sometime!\n');
        return 1;
        break;
    }
  });
}

function printGuesses() {
  let guesses = userGuesses.join(', ');
  console.log("Previous guesses:");
  console.log(guesses + '\n');
}


function checkIfGuessed(guess) {
  let hasBeenGuessed = false;
  userGuesses.forEach(function(currentGuess, index) {
    if (currentGuess === guess) {
      hasBeenGuessed = true;
    }
  });
  return hasBeenGuessed;
}

function promptLetter() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'letter',
      message: 'Please guess a letter:',

      validate: function(letter) {
        if (isLetter(letter) && !checkIfGuessed(letter)) {
          return true;
        } else {
          return false;
        }
      }
    }
  ]).then(function(res) {

    userGuesses.push(res.letter.toLowerCase());

    if (currentWord.checkIfFound(res.letter.toLowerCase())) {
      console.log("Good guess, match found!\n");
      score++;
    } else {
      console.log("Guess again!\n");
      lives--;
    }

    printGuesses();
    console.log("Lives left: " + lives + '\n');

    if (lives <= 0) {

      wordBank.push(currentWord.word);

      gamerun = false;
      endGame('lose');
    }
    else
    {
      currentWord.printWord();
      gameRun = currentWord.checkWin();

      if (gameRun) {
        promptLetter();
      } else {
        endGame('win');
      }
    }

  });
}
startGame();
