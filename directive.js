(function () {
  "use strict";
  angular.module('demoApp')
    // .directive('socks', function () {
    //   //
      // return {
      //   restrict: 'E',
      //
      //   template: "<div> Please work. I'm sad </div>"
      //
      // };

      // .directive('sleepy', function (){
      //   return {
      //     restrict: 'E',
      //     templateUrl: "views/directive.html";
      //
      //   }
      //
      // };
      //

      .directive('myCustomer', function() {
  return {
    template: 'Name: {{customer.name}} Address: {{customer.address}}'
  };
})


  //  })
  })();
