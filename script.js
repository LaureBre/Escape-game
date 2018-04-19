var Objet = {

    init: function Element(nom, urlImage, deplacable, zoom, sac, description, indice) {
        this.nom = nom;
        this.urlImage = urlImage;
        this.deplacable = deplacable;
        this.zoom = zoom;
        this.sac = sac;
        this.description = description;
        this.indice = indice;
    },

    decrire : function() {
        var description = "ceci est l'objet" + this.nom + "dont l'image est :" + this.urlImage;
        return description;
    }
};

var objet1 = Object.create(Objet);
objet1.init("blealal", "img/test.png");

console.log(objet1.decrire());
