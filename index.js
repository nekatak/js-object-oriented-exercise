function Game(dimensions){//Class
  // store the dimensions of the game
	this.dimensions = dimensions;
  // store the progress of the game this.dimensions*this.dimensions/2
  // and the game is finished.
	this.progress = 0;
  // store the grid.
	this.grid = this.generate_grid();
  // store previous square
	this.previous_square = {};
  // store current square selected.
	this.current_square = {}; 
}

Game.prototype.generate_grid = function(){
  // Generate the grid.
  // This should be a array of arrays. Each array representing a line.
  // for example:
  // [
  //   [1, 2], // this is the first line of the game
  //   [2, 1]  // this is the second line of the game
  // ]
  // Take into account the dimensions of the game.
  // The numbers on the grid can be anything (random).
}

Game.prototype.check = function(){
  // Check if the current_square chosen is equal with the previous one.
  // If it is return true.
}

Game.prototype.play =  function(x, y){
  // Check if the game is finished.
  // 'check' if the 2 squares are 'equal' and update the grid.
  // if equal than let the 2 numbers show. Otherwise return both to blank '0'.
}

Game.prototype.print_grid = function (){
  //
  // Return the grid in a single string with \n characters separating the lines for readability
  // for example '128 | 13 \n13 | 128' this will print as following
  // 128 | 13
  // 13 | 128
  //
}


// class
function Square(x, y ,value){
	this.x = x;
	this.y = y
	this.value = value;
	this.visible = false;
}
