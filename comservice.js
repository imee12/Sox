(function () {
  "use strict";
  angular.module('demoApp')
  .factory('CommentService', function () {
  var coms = [];

  var getComments = function () {
     return coms;
    //return $http.get(url);
  };

  var addComment = function (newCom) {
  coms.push(newCom);
};

  return {
    getComs: getComments,
    addCom : addComment,

};

});

})();
