(function () {
  "use strict";
  angular.module('demoApp')
    .factory('InstaService', ['$http', function ($http) {
    //  return $resource('/api/post/:id')
      // var url = 'https://api.instagram.com/v1/tags/term/media/recent?client_id=894e7d8e14284302842879cb81e2b4db';

      return {
        fetchPopular: function (callback){
          var endPoint = "https://api.instagram.com/v1/media/popular?client_id=642176ece1e7445e99244cec26f4de1f&callback=JSON_CALLBACK";

        $http.jsonp(endPoint).success(function(response){
          callback(response.data);
        });
      }
    }
  }]);

      // var InstaPhotos = {};
      // InstaPhotos.getPhotos = function (){
      //   return $http ({
      //     method: 'JSONP',    url:'https://api.instagram.com/v1/tags/term/media/recent?client_id=894e7d8e14284302842879cb81e2b4db'
      //
      //   });
      //
      // }
      // // var getPhotos = function () {
      // //   console.log("insta works!");
      // //   return $http.get(url);
      // // };

  //     return InstaPhotos;
  //   });
  })();
