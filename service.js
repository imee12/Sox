(function () {
  "use strict";
  angular.module('demoApp')
    .factory('SuperSoxService', function () {
      var superSox = [
        {
          name: "Monkey Socks",
          photo: "images/monkeysox.jpg",
          price: "12.00"
        },
        {
          name: "This Sucks Socks",
          photo: "images/suxsox.jpg",
          price: "12.00"
        },
        {
          name: "South Park Socks",
          photo: "images/southparksox.jpg",
          price: "15.00"
        },
        {
          name: "Workaholic Socks",
          photo: "images/workaholicsox.jpg",
          price: "16.00"
        },
        {
        name: "Star Wars Socks",
        photo: "images/StarWarssox.jpg",
        price: "26.00"
      },
      {
      name: "Shark Socks",
      photo: "images/sharksox.jpg",
      price: "16.00"
    },

      ];

      var boughtSuperSox = [


      ];

      var getSuperSox = function () {
        return superSox;
      };

      var getBougthSox = function () {
          return boughtSuperSox;
      };

      var addSuperSox = function (sox) {
        superSox.push(sox);
      };

      var deleteSuperSox = function (sox) {
        var index= superSox.indexOf(sox);
        console.log(index);
        superSox.splice(index, 1);
      };

      var getSingleSox = function (index) {
        return superSox[index];
      };

      var editSuperSox = function (sox, index) {
      superSox[index] = sox;

    };

    var getBoughtSox = function () {
      return boughtSuperSox;

    };


      var buySuperSox = function (newBoughtSox) {
        console.log(newBoughtSox);
        boughtSuperSox.push(newBoughtSox);
        console.log(boughtSuperSox);
        console.log(boughtSuperSox.length);

      };

      var getNumBoughtSox= function (boughtSuperSox) {
        return boughtSuperSox.length;
        console.log(boughtSuperSox.length);
      };

      var getTotal = function () {
        var total= 0;
        if(boughtSuperSox.length > 0){
          for(var i=0; i < boughtSuperSox.length; i ++) {
            console.log(boughtSuperSox.length);
            total += +boughtSuperSox[i].price;
          }
        }
        return total;
   };

    // var deleteBoughtSox: function () {
    //
    // }





      return {

        getSox: getSuperSox,
        addSox: addSuperSox,
        deleteSox: deleteSuperSox,
        editSox: editSuperSox,
        buySox: buySuperSox,
        getBoughtSox: getBoughtSox,
        getNumSox: getNumBoughtSox,
        getSock: getSingleSox,
        getTotal: getTotal
      };
    });
    // .factory('CartService', function (_) {


})();
