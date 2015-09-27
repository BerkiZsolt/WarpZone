//The ultimate counter of every drawnable object
var drawnableIDCounter = 0;

var Drawnable = function(){
	var id = drawnableIDCounter++;
	this.getId = function(){return id;}
}

//Abstract draw method that will be defined in the inheriting objects.
Drawnable.prototype.draw = function(canvas){console.log("Draw not implemented.");}

//Returns true, if the given object is exactly the same drawnable object.
Drawnable.prototype.equals = function(object) {
	return (object instanceof Drawnable) && this.getId() == object.getId();
}
