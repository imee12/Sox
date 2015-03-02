(function () {
  "use strict";
  angular.module('demoApp')
    .controller('ClientController', function (SuperSoxService, $scope) {
        var clientCtrl = this;

        clientCtrl.supersox = SuperSoxService.getSox();
        clientCtrl.boughtSuperSox = SuperSoxService.getBoughtSox();

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



    });

})();
