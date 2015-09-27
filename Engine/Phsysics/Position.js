var Position = function(x, y) {
	var x = x;
	var y = y;
	this.getX = function(){return x;}
	this.getY = function(){return y;}
	this.setX = function(givenX){x = givenX;}
	this.setY = function(givenY){y = givenY;}

	this.add = function(givenPosition) {
		if(!(givenPosition instanceof Position)) {
			console.log("Position.add: Given object is not position.");
			return;		
		}
		x += givenPosition.getX();
		y += givenPosition.getY();
	}

	this.substract = function(givenPosition) {
		if(!(givenPosition instanceof Position)) {
			console.log("Position.substarct: Given object is not position.");
			return;		
		}
		x -= givenPosition.getX();
		y -= givenPosition.getY();
	}
}

Position.prototype.toString = function() {
	return "[" + this.getX() + "," + this.getY() + "]";
}

