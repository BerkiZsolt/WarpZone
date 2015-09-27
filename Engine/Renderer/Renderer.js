/*
	Contains an array of drawnable objects and a canvas.
	If the render event is called, whipes everything from the canvas, and draws it again.
*/

//Dependencies
if (typeof Drawnable == "undefined"){console.log("Drawnable has to be imported before Renderer");}

var Renderer = function(givenCanvas) {
	var canvas = givenCanvas;
	var drawnables = [];
	var clear = function() {
		canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);	
	}

	//Adds a drawnable object to the list.
	this.add = function(drawnable) {
		if(!(drawnable instanceof Drawnable)) { 
			console.log("Renderer.add: given object is not drawnable.");
			return;
		}
		drawnables.push(drawnable);
	}

	//Removes a drawnable object from the list.
	this.remove = function(drawnable) {
		if(!(drawnable instanceof Drawnable)) { 
			console.log("Renderer.remove: given object is not drawnable.");
			return;
		}
		
		drawnables = $.grep(drawnables, function(value) {
			return value.getId() != drawnable.getId();	
		});
	}

	//Renders the current drawnable list.
	this.render = function() {
		if (typeof canvas == "undefined") {
			console.log("Renderer.render: canvas is undefined.");
			return;		
		}
		clear();
		$.each(drawnables, function(index, value) { value.draw(canvas); });
	}

	//Prints the current drawnable list to the log.
	this.print = function() {
		$.each(drawnables, function(index, value) { 
			console.log("I:" + index + " V:" + value.getId()); 
		});
	}

	

	this.getCanvas = function(){ return canvas;}
}


