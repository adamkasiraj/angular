'use strict';

/**
 * @ngdoc service
 * @name angWpApp.wp
 * @description
 * # wp
 * Factory in the angWpApp.
 */
angular.module('angWpApp')
  .factory('wp', function ($q,$http) {

    var API_URL = 'https://angularcompact.wpengine.com/wp-json/wp/v2';
    var wp={};
 
      wp.getCategories =  function() {
        return $http.get(API_URL + '/categories/');
      };
 
      wp.getPost = function(postId){
        return $http.get(API_URL+'/posts/'+postId);
      };
 
      wp.getPosts = function(count,page,category){
 
        var apiurl='';
        if(category!='all'){
          apiurl=API_URL+'/posts?_embed&per_page='+count+'&page='+page.toString();
        }else{
          apiurl=API_URL+'/posts?_embed&per_page='+count+'&page='+page.toString();
        }
 
        return $http.get(apiurl); 
 
      };
 
    return wp;
 
  });
