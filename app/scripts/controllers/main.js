'use strict';

/**
 * @ngdoc function
 * @name angWpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angWpApp
 */
angular.module('angWpApp')
  .controller('MainCtrl', function ($scope,$routeParams,wp ) {
 
    $scope.page=1;
    var count='2';
    $scope.posts=[];
 
    $scope.init= function(){
      var category=$routeParams.category;
 
      wp.getPosts(count,$scope.page,category).then(function (response){
      	console.log(response.data);
 
        $scope.posts = response.data;
        $scope.maxpages=50;
 
      });
    };
 
    $scope.init();
 
    $scope.loadMore = function () {
 
        $scope.page++;
      
        var category=$routeParams.category;
 
        if($scope.page < $scope.maxpages){
          wp.getPosts(count,$scope.page,category).then(function (response){
            $scope.maxpages=50;
            angular.forEach(response.data,function(item) {
            	console.log(item);
              $scope.posts.push(item);
            });
          });
        }
    }

  });
