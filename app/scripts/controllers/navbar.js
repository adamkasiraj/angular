'use strict';

/**
 * @ngdoc function
 * @name angWpApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the angWpApp
 */
angular.module('angWpApp')
  .controller('NavbarCtrl', function ($scope,wp) {
 
    wp.getCategories().then(function (response){
      $scope.categories=response.data;
      //console.log(response.data);
    });
  });
