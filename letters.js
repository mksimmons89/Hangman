var Letter = function(letter){

  this.letter = letter;

  this.guessed = false;

  this.display = function(letter){
  if(this.guessed){
    return ' ' + this.letter.toUpper() + ' ';
  } else{
    return '_';
  }
  };
};
module.exports = Letter;
