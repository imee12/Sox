(function () {
  "use strict";
  angular.module('demoApp')
    .factory('SuperHerosService', function () {
      var superHeros = [
        {
          name: "Monkey Socks",
          photo: "images/monkeysox.jpg",
          price: "$12"
        },
        {
          name: "This Sucks Socks",
          photo: "images/suxsox.jpg",
          price: "$12"
        },
        {
          name: "South Park Socks",
          photo: "images/southparksox.jpg",
          price: "$15"
        },
        {
          name: "Workaholic Socks",
          photo: "images/workaholicsox.jpg",
          price: "$16"
        },
        {
        name: "Star Wars Socks",
        photo: "images/StarWarssox.jpg",
        price: "$26"
      },
      {
      name: "Shark Socks",
      photo: "images/sharksox.jpg",
      price: "$16"
    },

      ];

      var getSuperHeros = function () {
        return superHeros;
      };
      var addSuperHero = function (hero) {
        superHeros.push(hero);
      };

      var deleteSuperHero = function (hero) {
        var index= superHeros.indexOf(hero);

        superHeros.splice(index, 1);
      };

      var editSuperHero = function (hero) {


      };

      return {
        getHeros: getSuperHeros,
        addHero: addSuperHero,
        deleteHero: deleteSuperHero,
        editHero: editSuperHero,
      };
    });

})();
