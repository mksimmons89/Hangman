var Letter = function(letter, guess){

  this.letter = letter;

  this.guessed = false;

};

  Letter.prototype.display = function(){
  if(this.guessed){
    return ' ' + this.letter.toUpperCase() + ' ';
  }
  else
  {
    return '_';
  }
  };

module.exports = Letter;
