(function () {
  "use strict";
  angular.module('demoApp')
    .directive('socks', function () {

      return {
        restrict: 'E',

        template: "<div> Please work. I'm sad </div>"

      }
    })
  })();
