'use strict';

/**
 * @ngdoc function
 * @name passwordManagerApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the passwordManagerApp
 */
angular.module('passwordManagerApp')
  .controller('SearchCtrl', function ($scope, Pages) {
    $scope.categories = [ 'x', 'y' ];

    $scope.pages = [
      {name: 'yahoo'},
      {name: 'google'}
    ];

    $scope.selectPage = function (page) {
      $scope.selectedPage = page;
    };

    $scope.search = function () {
      Pages
        .findAll()
        .then(function (result) {
          $scope.$apply(function () {
            $scope.pages = result;
          });
        });
    };

    $scope.search();
  });
