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

    $scope.selectPage = function (page) {
      $scope.selectedPage = page;
    };

    $scope.search = function () {
      return Pages
        .findAll()
        .then(function (result) {
          $scope.$apply(function () {
            $scope.pages = result;
          });
        });
    };

    $scope.search().then(function () {
      $scope.$apply(function () {

        $scope.categories = _.union(
          [''],
          _.map($scope.pages, function (page) {
            return page.category;
          })
        );

        $scope.selectedCategory = $scope.categories[0];
      });
    });

  });
