//Items on the canvas, that can be displayed by showing on image.

//Dependencies
if (typeof Drawnable == "undefined"){console.log("Drawnable has to be imported before StillEntity");}
if (typeof Position == "undefined"){console.log("Position has to be imported before StillEntity");}

var StillEntity = function(x, y, imageObject) {
	Drawnable.call(this)
	var imageObject = imageObject;
	var position = new Position(x, y);
	this.getX = function(){return position.getX();}
	this.getY = function(){return position.getY();}
	this.getPosition = function(){return position;}
	this.getImageObject = function(){return imageObject;}
}

StillEntity.prototype = Object.create(Drawnable.prototype)
StillEntity.prototype.constructor = StillEntity

StillEntity.prototype.draw = function(canvas) {
	canvas.getContext("2d").drawImage(this.getImageObject().getImage(),this.getX(),this.getY());
}


