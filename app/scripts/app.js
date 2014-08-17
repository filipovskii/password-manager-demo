'use strict';

/**
 * @ngdoc overview
 * @name passwordManagerApp
 * @description
 * # passwordManagerApp
 *
 * Main module of the application.
 */
angular
  .module('passwordManagerApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function () {
    Parse.initialize(
      "Y31fi6LSWqm0SVtBOGiiulHEbvRHIicyhUtkVxEM",
      "GxOG217xremqbVWNF3Db4rdIZiADE5EZrKvZ8e9J"
    );
  });
