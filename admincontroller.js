(function () {
  "use strict";
  angular.module('demoApp')
    .controller('AdminController', function (SuperSoxService, $scope, $routeParams, $location) {
        var adminCtrl = this;

        adminCtrl.supersox = SuperSoxService.getSox();
        adminCtrl.singleItem = SuperSoxService.getSock($routeParams.soxIndex);
        adminCtrl.go = function (index) {
          $location.path('/detail/' + index);
          console.log("single sox index is:", adminCtrl.singleItem);
        };

        adminCtrl.addSuperSox = function (newSox) {
          SuperSoxService.addSox(newSox);
          $scope.newSox = {};
        };

        adminCtrl.deleteSuperSox = function (sox) {
          SuperSoxService.deleteSox(sox);

        };

        adminCtrl.getSingleSox = function (index) {

        };

        adminCtrl.editItem = function (sox) {
          console.log("edit button works!");
          SuperSoxService.editSox(sox, $routeParams.soxIndex);
          $location.path('/detail' + $routeParams.soxIndex);
        }


    });

})();
