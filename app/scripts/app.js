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
    'ngTouch',
    'ui.router',
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
     $urlRouterProvider.otherwise("/search");

    $stateProvider
      .state('search', {
        url: '/search',
        templateUrl: 'views/search.html'
      })
      .state('add', {
        url: '/add',
        templateUrl: 'views/add.html'
      })
  })
  .run(function () {
    Parse.initialize(
      "Y31fi6LSWqm0SVtBOGiiulHEbvRHIicyhUtkVxEM",
      "GxOG217xremqbVWNF3Db4rdIZiADE5EZrKvZ8e9J"
    );
  });
