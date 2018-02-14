let Word = require("./word.js");

let Letter = require("./letters.js");

const inquirer = require ("inquirer");

const isLetter = require ("is-letter");

let wordBank = ["people", "fun", "poop", "laugh", "sure"]

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
function choosenWord(){
  let random = getRandInt(0, wordBank.length -1);
console.log(random, wordBank[random]);
let newWord = new Word(wordBank[random]);
console.log(newWord);
wordBank.splice(random);
let letterGuesses = [];
letterGuesses = newWord.printWord();
// console.log(letterGuesses);


}

choosenWord();
choosenWord();
