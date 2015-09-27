//Dependencies
if (typeof Position == "undefined"){console.log("Position has to be imported before Vector");}

var Vector = function(mag, dir) {
	Position.call(this, Vector.getX(mag, dir), Vector.getY(mag, dir));
	var magnitude = mag;
	var direction = dir;
	var getDirection = function() {return direction; }
	var getMagnitude = function() {return magnitude; }

	var recalculateXandY = function() {
		setX(Vector.getX(getMagnitude(),getDirection()));
		setY(Vector.getY(getMagnitude(),getDirection()));
	}

	var recalculateMagAndDir = function() {
		magnitude = Vector.getMagnitude(this.getX(), this.getY());
		direction = Vector.getDirection(this.getX(), this.getY());	
	}

	var setDirection = function(newDir) {
		direction = newDir;
		recalculateXandY();
	}

	var setMagnitude = function(newMag) {
		magnitude = newMag;
		recalculateXandY();
	}

	this.add = function(givenPosition) {
		if(!(givenPosition instanceof Position)) {
			console.log("Position.add: Given object is not position.");
			return;		
		}
		setX(this.getX() + givenPosition.getX());
		setY(this.getY() + givenPosition.getY());
		recalculateMagAndDir();
	}

	this.substract = function(givenPosition) {
		if(!(givenPosition instanceof Position)) {
			console.log("Position.substarct: Given object is not position.");
			return;		
		}
		setX(this.getX() - givenPosition.getX());
		setY(this.getY() - givenPosition.getY());
		recalculateMagAndDir();
	}
}

Vector.prototype = Object.create(Position.prototype)
Vector.prototype.constructor = Vector

Vector.getDirection = function(x, y) { 
	//Prevent division by zero
	if(x==0) {
		if(y==0) {
			return 0;		
		} else if(y > 0) {
			return 90;		
		} else {
			return 270;
		}
	}
	return Math.atan(y / x); 
}

Vector.getMagnitude = function(x, y) { return Math.sqrt( x * x + y * y ); }
Vector.getX = function(magnitude, direction) { return magnitude * Math.cos(direction);}
Vector.getY = function(magnitude, direction) { return magnitude * Math.sin(direction);}
Vector.getPosition = function(magnitude, direction) { return new Position(getX(magnitude, direction), getY(magnitude, direction));}

