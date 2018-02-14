let Letter = require("./letter.js");

var Word = function(word) {
  this.word = word;
};

Word.prototype.printWord = function() {
  let word = this.word.split('');
  let output = '';
  let guesses = [];
  word.forEach(function(letter) {
    let thisLetter = new Letter(letter);
    output += thisLetter.display();
    guesses.push(thisLetter.guessed);
  });
  console.log(output);
  return guesses;
};

module.exports = Word;
