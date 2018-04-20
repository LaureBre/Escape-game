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
			this.width = this.dom.width();
			this.height = this.dom.height();
			this.inBag();
			// this.left = this.dom.offset().left;
			// this.top = this.dom.offset().top;

		},

		inBag: function () {
			var thisdom = this.dom;
			var thisname = this.name;
			var thiswidth = this.width;
			var thisheight = this.height;
			var isInBag = false;

			thisdom.on ('mouseup', function() {
			    if( (isInBag == false) && ( thisdom.offset().left > ($('main').width() - $('#inventory').width()) ) ){
			    	this.isInInventory = true;
					inventory.push(thisname);
					thisdom.addClass('slot');
					thisdom.removeClass('element');
					thisdom.css('left', 1586 + "px");
					isInBag = true;
			    }
			    else if ( (isInBag == true) && ( thisdom.offset().left < (($('main').width() - $('#inventory').width())) ) ){
					this.isInInventory = false;
					thisdom.removeClass('slot');
					var index = inventory.indexOf(thisname);
					if (index > -1) {
						inventory.splice(index, 1);
					}
					thisdom.addClass('element');
					isInBag = false;
			    }
			});
		},

		shiftPlace: function() {
			var thisdom = this.dom;
				if (this.movable) {

					if (this.isInInventory == true) {
						thisdom.inScene();
						console.log('inScene');
					}
					else {
						this.inBag();
						console.log('inBag');
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
	

	// Objets de la 1ère pièce
	var apple = Object.create(Element);
	apple.init('apple', 'img/apple.svg', false, false, false, false, "", "Ceci est une pomme", false);
	
	var banana = Object.create(Element);
	banana.init('banana', 'img/banana.svg', false, false, false, false, "", "Ceci est une banane", false);
		
	var battery = Object.create(Element);
	battery.init('battery', 'img/battery.svg', true, true, false, true, "", "A quoi ces piles pourraient-elles bien me servir?", false);

	var blocked = Object.create(Element);
	blocked.init('battery', 'img/blocked.svg', false, true, false, false, "", "Il me manque une clé pour ouvrir ce cadenas", false);

	var bookshelf = Object.create(Element);
	bookshelf.init('bookshelf', 'img/bookshelf.svg', false, false, true, false, "", "oh, une carte Michelin!", false);

	var bowl = Object.create(Element);
	bowl.init('bowl', 'img/bowl.svg', false, false, false, false, "", "Ceci est un bol", false);

	var candle = Object.create(Element);
	candle.init('candle', 'img/candle.svg', false, true, false, false, "", "Il me faut quelque chose pour allumer cette bougie", false);

	var candleOff = Object.create(Element);
	candleOff.init('candleOff', 'img/candleOff.svg', false, false, false, false, "", "Quelque chose apparaît", false);

	var cheese = Object.create(Element);
	cheese.init('cheese', 'img/cheese.svg', true, true, false, true, "", "A quoi ce fromage pourrait-il bien me servir?", false);

	var cigarette = Object.create(Element);
	cigarette.init('cigarette', 'img/cigarette.svg', true, true, false, true, "", "Des cigarettes", false);

	var coffeeMaker = Object.create(Element);
	coffeeMaker.init('cigarette', 'img/coffee-maker.svg', false, false, false, false, "", "Une simple cafetière", false);

	var compteur = Object.create(Element);
	compteur.init('compteur', 'img/compteur.png', false, true, true, false, "", "Il manque quelque chose pour faire fonctionner l'ascenseur", false);

	var compteurrempli = Object.create(Element);
	compteurrempli.init('compteurrempli', 'img/compteurrempli.png', false, true, true, false, "", "Ca devrait fonctionner!", false);

	var elevator = Object.create(Element);
	elevator.init('elevator', 'img/elevator.svg', false, false, false, false, "", "Il manque quelque chose pour faire fonctionner l'ascenseur", false);

	var france = Object.create(Element);
	france.init('france', 'img/france.svg', false, false, true, false, "", "Deux villes sont entourées sur la carte: Limoges et Bourges", false);

	var fridge = Object.create(Element);
	fridge.init('fridge', 'img/fridge.svg', false, false, false, false, "", "Il y a un cadenas sur ce frigo", false);

	var fuse = Object.create(Element);
	fuse.init('fuse', 'img/fuse.svg', true, true, false, true, "", "A quoi ce fusile pourrait-il bien me servir?", false);
	
	var gun = Object.create(Element);
	gun.init('fuse', 'img/gun.svg', true, true, false, false, "", "Un pistolet", false);

	// Objets de la 2ème pièce
	var axe = Object.create(Element);
	axe.init('axe', 'img/axe.svg', false, false, false, false, "", "Cette hache est verouillée sous un cadenas à 4 chiffres", false);
	
	var blueCircle = Object.create(Element);
	blueCircle.init('blueCircle', 'img/blue-circle.svg', true, true, false, false, "", "?", false);

	var greenCircle = Object.create(Element);
	greenCircle.init('greenCircle', 'img/green-circle.svg', true, true, false, false, "", "?", false);
	
	// function (name, urlImage, movable, combinable, zoomable, bagable, answer, message, inputable)
	var bourges = Object.create(Element);
	bourges.init('bourges', 'img/bourges.png', false, false, true, false, "", "Ce tableau représente la cathédrale de Bourges", false);

	var bourgesuv = Object.create(Element);
	bourgesuv.init('bourgesuv', 'img/bourgesuv.png', false, false, true, false, "6", "Ce tableau représente la cathédrale de Bourges", false);
	
	var doorLocked = Object.create(Element);
	doorLocked.init('doorLocked', 'img/door-locked.svg', false, true, false, false, "", "Cette porte est fermée, il faudrait quelque chose pour l’ouvrir", false);
	
	var doorOpen = Object.create(Element);
	doorOpen.init('doorOpen', 'img/door-open.svg', false, false, false, false, "", "La porte est ouverte!!!", false);
	
	var fireAlarm = Object.create(Element);
	fireAlarm.init('fireAlarm', 'img/fire-alarm.svg', false, false, false, false, "", "Je ne peux pas passer, une alarme a été activée", false);
		
	var flashlight = Object.create(Element);
	flashlight.init('flashlight', 'img/flashlight.svg', false, false, false, false, "", "On peut désactiver cette alarme grâce à un code couleur", true);
		
} ); // fermeture JQuery

