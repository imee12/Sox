(function () {
  "use strict";
  angular.module('demoApp')
    .controller('CommentController', function (CommentService, $rootScope, $routeParams, $location) {
        var comCtrl = this;

      comCtrl.coms = CommentService.getComs();
      // CommentService.getComs().success(function(data){
      //    comCtrl.coms = data;


      comCtrl.addCom = function (Newcom) {
        CommentService.addCom(Newcom);
      };

    });

  })();
