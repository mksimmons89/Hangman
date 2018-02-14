let word = require("./word.js");

let Letter = require("./letter.js");

const inquirer = require ("inquirer");

const isLetter = require ("is-letter");

let wordbank = ["people", "fun", "poop", "laugh", "sure"]

let newWord = new Word (wordbank[1]);

let lettterGuesses = [];

letterGuesses = newWord.printWord();

console.log(letterGuesses);
