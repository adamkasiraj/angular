'use strict';

/**
 * @ngdoc function
 * @name angWpApp.controller:ViewpostCtrl
 * @description
 * # ViewpostCtrl
 * Controller of the angWpApp
 */
angular.module('angWpApp')
  .controller('ViewpostCtrl', function ($scope,$routeParams,wp  ) {
  	console.log($routeParams);
 
      wp.getPost($routeParams.postid).then(function (response){
 
        $scope.title =response.data.title['rendered'];
 
        var rendered = angular.element('<div></div>');
 
        rendered.append(response.data.content['rendered']);
        rendered.find('div').removeClass();
        rendered.find('img')
                .removeClass()
                .addClass('img-responsive center-block')
                .wrap( "<div class='article-image' layout='row' layout-align='center'></div>" );
 
        $scope.content = rendered.html();
 
      });
  });
