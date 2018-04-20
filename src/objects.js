$( function() {			// initialisation JQuery

	var scene = $('#scene');
  	var inventory = [];

	var Element = {
		init: function (name, urlImage, posLeft, posTop, width, draggable, combinable, zoomable, clue, message, inputable) {
			this.name = name;
			this.urlImage = urlImage;
			this.dom = $('#'+name);
			this.draggable = draggable;
			this.combinable = combinable;
			this.zoomable = zoomable;
			this.inputable = inputable;
			this.clue = clue;
			this.message = message;
			this.width = width;
			this.height = this.dom.height();

			this.dom.css('left', posLeft + "px");
			this.dom.css('top', posTop + "px");
			this.dom.css('width', width + "px");
			console.log(this.name + this.dom.width());
			this.createHTML();
			this.inBag();
			// if (this.inputable == true) {
			// 	this.input();
   //          } else {
   //              console.log("non plus");
   //          }
		},

		createHTML: function() {
			var CSSclass = "element " 	+ (this.draggable ? "draggable " : '') 
										+ (this.combinable ? "combinable " : '') 
										+ (this.zoomable ? "zoomable " : '')
										+ (this.inputable ? "inputable" : '');
			scene.append('<img src="public/img/' + this.urlImage + '" alt="' + this.name + '" id="' + this.name + '" class="' + CSSclass + '">');
		},

		inBag: function () {
			var thisdom = this.dom;
			var thisname = this.name;
			var thiswidth = this.width;
			// console.log(thiswidth);
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

            var thisdom2 = this.dom;
            thisdom2.css('border', '1pw solid red');
            thisdom2.on('click', function () {
                console.log("ok");
                prompt("please interact");
            });
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
	apple.init('apple', 'apple.svg', 500, 0, 150, false, false, false,  "", "Ceci est une pomme", false);
	
	var banana = Object.create(Element);
	banana.init('banana', 'banana.svg', 500, 0, 150, false, false, false,  "", "Ceci est une banane", false);
		
	var battery = Object.create(Element);
	battery.init('battery', 'battery.svg', 500, 0, 150, true, true, false,  "", "A quoi ces piles pourraient-elles bien me servir?", false);

	var blocked = Object.create(Element);
	blocked.init('battery', 'blocked.svg', 500, 0, 150, false, true, false,  "", "Il me manque une clé pour ouvrir ce cadenas", false);

	var bookshelf = Object.create(Element);
	bookshelf.init('bookshelf', 'bookshelf.svg', 500, 0, 150, false, false, true,  "", "oh, une carte Michelin!", false);

	var bowl = Object.create(Element);
	bowl.init('bowl', 'bowl.svg', 500, 0, 150, false, false, false,  "", "Ceci est un bol", false);

	var candle = Object.create(Element);
	candle.init('candle', 'candle.svg', 500, 0, 150, false, true, false,  "", "Il me faut quelque chose pour allumer cette bougie", false);

	var candleOff = Object.create(Element);
	candleOff.init('candleOff', 'candleOff.svg', 500, 0, 150, false, false, false,  "", "Quelque chose apparaît", false);

	var cheese = Object.create(Element);
	cheese.init('cheese', 'cheese.svg', 500, 0, 150, true, true, false,  "", "A quoi ce fromage pourrait-il bien me servir?", false);

	var cigarette = Object.create(Element);
	cigarette.init('cigarette', 'cigarette.svg', 500, 0, 150, true, true, false,  "", "Des cigarettes", false);

	var coffeeMaker = Object.create(Element);
	coffeeMaker.init('coffeeMaker', 'coffee-maker.svg', 500, 0, 150, false, false, false,  "", "Une simple cafetière", false);

	var compteur = Object.create(Element);
	compteur.init('compteur', 'compteur.png', 500, 0, 150, false, true, true,  "", "Il manque quelque chose pour faire fonctionner l'ascenseur", false);

	var compteurrempli = Object.create(Element);
	compteurrempli.init('compteurrempli', 'compteurrempli.png', 500, 0, 150, false, true, true,  "", "Ca devrait fonctionner!", false);

	var elevator = Object.create(Element);
	elevator.init('elevator', 'elevator.svg', 500, 0, 150, false, false, false,  "", "Il manque quelque chose pour faire fonctionner l'ascenseur", false);

	var france = Object.create(Element);
	france.init('france', 'france.svg', 500, 0, 150, false, false, true,  "", "Deux villes sont entourées sur la carte: Limoges et Bourges", false);

	var fridge = Object.create(Element);
	fridge.init('fridge', 'fridge.svg', 500, 0, 150, false, false, false,  "", "Il y a un cadenas sur ce frigo", false);

	var fuse = Object.create(Element);
	fuse.init('fuse', 'fuse.svg', 500, 0, 150, true, true, false,  "", "A quoi ce fusile pourrait-il bien me servir?", false);
	
	var gun = Object.create(Element);
	gun.init('fuse', 'gun.svg', 500, 0, 150, true, true, false,  "", "Un pistolet", false);

	// Objets de la 2ème pièce
	var axe = Object.create(Element);
	axe.init('axe', 'axe.svg', 500, 0, 150, false, false, false,  "", "Cette hache est verouillée sous un cadenas à 4 chiffres", false);
	
	var blueCircle = Object.create(Element);
	blueCircle.init('blueCircle', 'blue-circle.svg', 500, 0, 150, true, true, false,  "", "?", false);

	var greenCircle = Object.create(Element);
	greenCircle.init('greenCircle', 'green-circle.svg', 500, 0, 150, true, true, false,  "", "?", false);
	
	// function (name, urlImage, draggable, combinable, zoomable, answer, message, inputable)
	var bourges = Object.create(Element);
	bourges.init('bourges', 'bourges.png', 500, 0, 150, false, false, true,  "", "Ce tableau représente la cathédrale de Bourges", false);

	var bourgesuv = Object.create(Element);
	bourgesuv.init('bourgesuv', 'bourgesuv.png', 500, 0, 150, false, false, true,  "6", "Ce tableau représente la cathédrale de Bourges", false);
	
	var doorLocked = Object.create(Element);
	doorLocked.init('doorLocked', 'door-locked.svg', 500, 0, 150, false, true, false,  "", "Cette porte est fermée, il faudrait quelque chose pour l’ouvrir", false);
	
	var doorOpen = Object.create(Element);
	doorOpen.init('doorOpen', 'door-open.svg', 500, 0, 150, false, false, false,  "", "La porte est ouverte!!!", false);
	
	var fireAlarm = Object.create(Element);
	fireAlarm.init('fireAlarm', 'fire-alarm.svg', 500, 0, 150, false, false, false,  "", "Je ne peux pas passer, une alarme a été activée", false);
		
	var flashlight = Object.create(Element);
	flashlight.init('flashlight', 'flashlight.svg', 500, 500, 50, true, false, false,  "", "On peut désactiver cette alarme grâce à un code couleur", true);
		
} ); // fermeture JQuery

