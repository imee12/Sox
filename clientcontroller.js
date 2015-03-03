(function () {
  "use strict";
  angular.module('demoApp')
    .controller('ClientController', function (SuperSoxService, $scope, $routeParams, $location) {
        var clientCtrl = this;

        clientCtrl.supersox = SuperSoxService.getSox();
        clientCtrl.boughtSuperSox = SuperSoxService.getBoughtSox();

        clientCtrl.singleItem = SuperSoxService.getSock($routeParams.soxIndex);
        clientCtrl.go = function (index) {
          $location.path('/detal/' + index);
        };

        // clientCtrl.alertMe = function () {
        //   alert("Hi from mainCtrl");
        // };

        // clientCtrl.addSuperHero = function (newHero) {
        //   SuperHerosService.addHero(newHero);
        //   $scope.newHero = {};
        // };
        //
        // clientCtrl.deleteSuperHero = function () {
        //   SuperHerosService.deleteHero();
        //
        // };



        clientCtrl.buySuperSox = function (newBoughtSox) {
          console.log("buy button works!");
          console.log(newBoughtSox);
          SuperSoxService.buySox(newBoughtSox);

            $scope.newBoughtSox = {};

        };

        clientCtrl.numSoxInCart = SuperSoxService.getNumSox(clientCtrl.boughtSuperSox);

        clientCtrl.getTotal = function(boughtSuperSox) {
          console.log()
        };

    });

})();
