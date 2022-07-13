// subclass of Square.
function HTMLSquare(x, y, value) {
  Square.call(this, x, y, value);
  this.element = document.createElement('button');
  this.element.addEventListener('click', this, false);
}

HTMLSquare.prototype = Object.create(Square.prototype);
HTMLSquare.prototype.constructor = HTMLSquare;


Square.prototype.handleEvent = function(e) {
  // handle all actions of the object
  switch (e.type) {
        // Call the actions that need to be done when a button is called.
        case "click":  console.log(this);
  }
}


function HTMLRenderer(dimensions){
	Game.call(this, dimensions)
	this.html_grid = this.generate_html_grid(HTMLSquare)
}

// subclass extends superclass
HTMLRenderer.prototype = Object.create(Game.prototype);
HTMLRenderer.prototype.constructor = HTMLRenderer;

HTMLRenderer.prototype.generate_html_grid = function(){
  // Re-render the dom every time this function is called with the
  // current html grid.
}

function onLoad(){
  // Get game dimentions from a prompt. Start the html game.
}
