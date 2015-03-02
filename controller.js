(function () {
  "use strict";
  angular.module('demoApp')
    .controller('MainController', function (SuperSoxService, $scope) {
        var mainCtrl = this;

        mainCtrl.supersox = SuperSoxService.getSox();

        mainCtrl.alertMe = function () {
          alert("Hi from mainCtrl");
        };

        mainCtrl.addSuperSox = function (newSox) {
          SuperSoxService.addHero(newSox);
          $scope.newSox = {};
        };

        mainCtrl.deleteSuperSox = function () {
          SuperSoxService.deleteSox();

        };

    });

})();
