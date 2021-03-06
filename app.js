(function () {
  "use strict";

  angular.module('demoApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/splash.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/tiy', {
        template: '<h1>{{hello}}</h1><input type="text" ng-model="hello">'
      })
      .when('/not-found', {
        templateUrl: 'views/404.html'
      })
      .when('/splash', {
        templateUrl: 'views/splash.html',
        controller: 'MainController as mainCtrl' /// put what controller you want to control this here
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminController as adminCtrl' /// put what controller you want to control this here
      })
      .when('/client', {
        templateUrl: 'views/client.html',
        controller: 'ClientController as clientCtrl' /// put what controller you want to control this here
      })

      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'ClientController as clientCtrl' /// put what controller you want to control this here
      })

      .when('/edit/:soxId', {
        templateUrl: 'views/editDetail.html',
        controller: 'AdminController as adminCtrl'

      })

      .when('/detail/:soxId',{
        templateUrl: 'views/detail.html',
        controller: 'ClientController as clientCtrl'

      })

      .when('/shopcart', {
        templateUrl: 'views/shopcart.html',
        controller: 'ClientController as clientCtrl'

      })

      .when('/directive', {
         templateUrl: 'views/directive.html',
         controller: 'ClientController as clientCtrl'
        //template: '<h1>{{hello}}</h1><input type="text" ng-model="hello">'
      })

      .when('/api', {
        templateUrl: 'views/apiprac.html',
        controller: 'InstaController as InstaCtrl'
       //template: '<h1>{{hello}}</h1><input type="text" ng-model="hello">'
     })


      .otherwise({
        redirectTo: '/not-found'
      });



  })

 .constant('_', _);

})();
