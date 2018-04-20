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
			this.isInInventory = false;
			// this.left = this.dom.offset().left;
			// this.top = this.dom.offset().top;

		},

		inBag: function () {

			this.isInInventory = true;
			var thisdom = this.dom;
			var thisname = this.name;
			this.width = thisdom.width();
			this.height = thisdom.height();

			thisdom.mouseup(function() {
			    if ( thisdom.offset().left > ($(window).width() - $('#inventory').width()) ) {
					inventory.push(thisname);
					thisdom.addClass('slot');
					thisdom.removeClass('element');
					thisdom.css('left', 1435 + "px");
			    }
			}); 
		},

		inScene: function() {
			this.isInInventory = false;
			var thisdom = this.dom;
			var thisname = this.name;
			var thiswidth = this.width;
			var thisheight = thisdom.height;

			addEvents(thisname);

			thisdom.mouseup(function() {
			    if ( thisdom.offset().left < (1000 - thisdom.width()) ) {
					var index = inventory.indexOf(thisname);
					if (index > -1) {
						array.splice(index, 1);
					}
					thisdom.removeClass('slot');
					thisdom.addClass('element');
					thisdom.width = thiswidth;
					thisdom.height = thisheight;
			    }
			}); 
		}, 

		shiftPlace: function() {
			if (this.movable) {
				if (this.isInInventory == true) {
					this.inScene();
				} 
				else {
					this.inBag();
				}
			}
		},

		// addEvents: function() {

		// }

	};

	var tortue = Object.create(Element);

	tortue.init('tortue', 'img/tortue.png', true, true, true, false, false, 'initiales');
	// tortue.imgSize();
	

	var tortue2 = Object.create(Element);

	tortue2.init('tortue2', 'img/tortue.png', true, true, true, false, false, 'initiales');
	// tortue2.imgSize();


	// function addEvents(element) {
	// 	element.dom.on( "mouseup", function() {
	// 		element.shiftPlace();
	// 	} );
			
	// 	element.dom.on( "mouseup", function() {
	// 		element.shiftPlace();
	// 	} );
	// }


	if (tortue2.movable) {
		if (tortue2.isInInventory == true) {
			tortue2.inScene();
		} 
		else {
			tortue2.inBag();
		}
	}


	if (tortue.movable) {
		if (tortue.isInInventory == true) {
			tortue.inScene();
		} 
		else {
			tortue.inBag();
		}
	}

} ); // fermeture JQuery