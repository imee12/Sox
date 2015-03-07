(function () {
  "use strict";
  angular.module('demoApp')
//     .controller('InstaController', function (InstaService, $scope, $rootScope, $routeParams, $location) {
//         //var instaCtrl = this;
//         $scope.photoFeed = [];
//       //  clientCtrl.supersox = SuperSoxService.getSox();
//
//        InstaService.getPhotos().success(function(response){
//          console.log("insta works!");
//         // instaCtrl.photos = data;
//         $scope.photoFeed = response.item.images.standard_resolution.url;
// console.log(response);
//        });
//
// });
// })();
      .controller('InstaController', ['$scope', 'InstaService',
      function ($scope, InstaService){

        var InstaCtrl = this;
        $scope.layout = 'grid';

        $scope.setLayout = function (layout){
        $scope.layout = layout;
      };

      $scope.isLayout = function (layout){
        return $scope.layout ==layout
      };
      $scope.pics = [];

      InstaService.fetchPopular(function(data){
        $scope.pics = data
      });


    }]);
  })();
