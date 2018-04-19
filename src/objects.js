$( function() {			// initialisation JQuery

  	$( ".draggable" ).draggable();

  	var inventory = [];

	var Element = {
		init: function (name, urlImage, movable, combinable, zoomable, bagable, clue, inputable) {
			this.name = name;
			this.urlImage = urlImage;
			this.dom = $('#'+name);
			this.movable = movable;
			this.combinable = combinable;
			this.zoomable = zoomable;
			this.bagable = bagable;
			this.inputable = inputable;
			this.clue = clue;
		},

		divSize: function () {
			this.dom.width($("#" + this.name + " img").width());
			this.dom.height($("#" + this.name + " img").height());
		},

		inBag: function () {
			var thisdom = this.dom;
			var thisname = this.name;
			thisdom.mouseup(function() {
			    if ( thisdom.offset().left > ($(window).width() - $('#inventory').width()) ) {
					inventory.push(thisname);
					console.log(inventory);
			    }
			}); 
		}
	};

	var tortue = Object.create(Element);

	tortue.init('tortue', 'img/tortue.png', true, true, true, false, false, 'initiales');
	tortue.divSize();

  	if (tortue.movable) {
		tortue.inBag();
	}

} ); // fermeture JQuery