(function () {
  "use strict";
  angular.module('demoApp')
    .controller('AdminController', function (SuperHerosService, $scope) {
        var adminCtrl = this;

        adminCtrl.superheros = SuperHerosService.getHeros();

        // adminCtrl.alertMe = function () {
        //   alert("Hi from mainCtrl");
        // };

        adminCtrl.addSuperHero = function (newHero) {
          SuperHerosService.addHero(newHero);
          $scope.newHero = {};
        };

        adminCtrl.deleteSuperHero = function () {
          SuperHerosService.deleteHero();

        };

    });

})();
