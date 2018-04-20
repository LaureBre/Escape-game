$( function() {			// initialisation JQuery


  	var inventory = [];

	var Element = {
		init: function (name, urlImage, movable, combinable, zoomable, bagable, clue, message, inputable) {
			this.name = name;
			this.urlImage = urlImage;
			this.dom = $('#'+name);
			this.movable = movable;
			this.combinable = combinable;
			this.zoomable = zoomable;
			this.bagable = bagable;
			this.inputable = inputable;
			this.clue = clue;
			this.message = message;
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

		events: function() {
			addEvents(this.name);
			if (this.movable) {
				if (this.isInInventory == true) {
					this.inScene();
				}
				else {
					this.inBag();
				}
			}
		},

        //tentative de fonction de zoom
        zoom: function () {
            if (this.zoomable) {
                this.dom.click(function () {
                    console.log("zooma");
                    this.dom.width + 500;
                });
            } else {
                console.log("et ben non");
            }
        },

        //tentative de fonction d'input
        input: function () {
            if (this.inputable) {
                thisdom.click(function () {
                    console.log("ok");
                    prompt("please interact");
                });
            } else {
                console.log("non plus");
            }
        },


        //tentative de fonction de combinaison
        combinable: function () {
            if (this.combinable) {
                thisdom.click(function () {
                    console.log("fusion!");
                });
            } else {
                console.log("toujours pas");
            }
        }

	};

	var tortue = Object.create(Element);

	tortue.init('tortue', 'img/tortue.png', true, true, true, false, false, 'une tortue !', 'initiales');
	// tortue.imgSize();
	tortue.events();

	var cheese = Object.create(Element);

	cheese.init('cheese', 'img/cheese.jpg', true, true, true, false, false, 'du fromage', 'initiales');
	// cheese.imgSize();
	cheese.events();

	function addEvents(element) {
		var dom = $("#" + element); 
		dom.on( "mouseup", function() {
			shiftPlace(element);
		} );

		// element.dom.on( "mouseup", function() {
		// 	element.shiftPlace();
		// } );
	}

	function shiftPlace: () {
			console.log(shiftPlace);
			if (this.movable) {
				if (this.isInInventory == true) {
					this.inScene();
					console.log('inScene');
				}
				else {
					this.inBag();
					console.log('inBag');
				}
			}
		},

	// if (cheese.movable) {
	// 	if (cheese.isInInventory == true) {
	// 		cheese.inScene();
	// 	}
	// 	else {
	// 		cheese.inBag();
	// 	}
	// }


	// if (tortue.movable) {
	// 	if (tortue.isInInventory == true) {
	// 		tortue.inScene();
	// 	}
	// 	else {
	// 		tortue.inBag();
	// 	}
	// }


	// $().on('click', function () {
	// 	$( ".draggable" ).draggable();
	// });
} ); // fermeture JQuery

