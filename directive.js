(function () {
  "use strict";
  angular.module('demoApp')
    .directive('socks', function () {

      return {
        restrict: 'E',

        scope: {
          title: '@',
          price: '@',
        },
        templateUrl: 'views/directive.html',

      };
    });
  })();
