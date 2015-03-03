(function () {
  "use strict";
  angular.module('demoApp')
    .controller('AdminController', function (SuperSoxService, $rootScope, $routeParams, $location) {
        var adminCtrl = this;

        SuperSoxService.getSox().success(function(data){
          adminCtrl.supersox = data;
        });

        SuperSoxService.getSock($routeParams.soxId).success(function(data){
           adminCtrl.singleItem = data;
         });

         adminCtrl.currentIndex = $routeParams.soxId;

        adminCtrl.go = function (index) {
          $location.path('/detail/' + index);
          console.log("single sox index is:", adminCtrl.singleItem);
        };

        adminCtrl.addSuperSox = function (newSox) {
          SuperSoxService.addSox(newSox);
          //$scope.newSox = {};
        };

        adminCtrl.deleteSuperSox = function (id) {
          SuperSoxService.deleteSox(id);

        };

        adminCtrl.getSingleSox = function (index) {

        };

        adminCtrl.editItem = function (sox, id) {

        SuperSoxService.editSox(sox, $routeParams.soxId);

          $location.path('/detail' + $routeParams.soxId);
        }


    });

})();
