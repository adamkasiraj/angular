'use strict';

/**
 * @ngdoc overview
 * @name angWpApp
 * @description
 * # angWpApp
 *
 * Main module of the application.
 */
angular
  .module('angWpApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/viewpost/:postid', {
        templateUrl: 'views/viewpost.html',
        controller: 'ViewpostCtrl',
        controllerAs: 'viewpost'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
