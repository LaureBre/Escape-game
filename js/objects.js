function Element(name, urlImage, movable, combinable, zoomable, bagable, clue, inputable) {
	this.name = name;
	this.urlImage = urlImage;
	this.dom = $('#'+name);
	this.movable = movable;
	this.combinable = combinable;
	this.zoomable = zoomable;
	this.bagable = bagable;
	this.inputable = inputable;
	this.clue = clue;

	this.move = function () {
		this.dom.css('left', '20px');
		this.dom.css('top', '220px');
	}
}



var tortue = new Element('tortue', 'img/tortue.png', true, true, true, false, false, 'initiales');

var DOMtortue = 

drag
DOMtortue.addEventListener('')