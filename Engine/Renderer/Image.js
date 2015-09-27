var ID_IMAGE_BANK = "imageBank";

var imageBank = generateImageBank();

var Image = function(path) {
	var name = "img_" + path.split(".")[0];
	var path = path;
	var object = document.getElementById(this.name);
	
	//Loads the image to the screen, if it hasn't been loaded.
	if(this.object == null) {
		object = document.createElement('img');
		object.id = name;
		object.src = path;
		imageBank.appendChild(object);	
	}

	this.getImage = function(){return object;}
}

//Creates and returns a new imageBank, if there is none.
function generateImageBank() {
	if(imageBank != null) { return; }
	newImageBank = document.createElement('div');
	newImageBank.id = ID_IMAGE_BANK;
	newImageBank.style.display="none";
	document.getElementsByTagName('body')[0].appendChild(newImageBank);
	return newImageBank;
}
