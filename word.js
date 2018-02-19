let Letter = require ("./letters.js");

var Word = function(word){
this.word = word;
this.letters = [];
this.correctGuesses = 0;
this.totalLetters = this.word.length;
};

Word.prototype.printWord = function () {
  // console.log(this);
  let that = this;
  let word = this.word.split('');
  let output = '';


  // let guesses = [];


  word.forEach(function(letter, index){
   output += that.letters[index].display();
   // console.log (that);
// guesses.push(thisLetter.guessed);
  });
  console.log(output + "\n");
  };
//   return guesses;
// };

Word.prototype.checkIfFound = function(guess){
  let that = this;
  let correct = false;
  this.letters.forEach(function(currentLetter){
    if (currentLetter.letter === guess){
      currentLetter.guessed = true;
      that.correctGuesses++;
      correct = true;
    }
  });
return correct;
};

Word.prototype.checkWin = function() {
  if (this.correctGuesses == this.totalLetters) {
    return false;
  } else  {
    return true;
  }
}

Word.prototype.generateLetters = function() {
  let that = this;
  let word = this.word.split('');

  word.forEach(function(letter, index) {
    let thisLetter = new Letter(letter);
    that.letters.push(thisLetter);
  });
}


module.exports = Word;
