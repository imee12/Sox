(function () {
  "use strict";
  angular.module('demoApp')
    .controller('ClientController', function (SuperHerosService, $scope) {
        var clientCtrl = this;

        clientCtrl.superheros = SuperHerosService.getHeros();

        // clientCtrl.alertMe = function () {
        //   alert("Hi from mainCtrl");
        // };

        clientCtrl.addSuperHero = function (newHero) {
          SuperHerosService.addHero(newHero);
          $scope.newHero = {};
        };

        clientCtrl.deleteSuperHero = function () {
          SuperHerosService.deleteHero();

        };

    });

})();
