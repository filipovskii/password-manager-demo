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

    $scope.selected = function (page) {
      if (page === $scope.selectedPage) {
        return 'selected';
      }
      return '';
    }

    $scope.search = function () {
      var q;

      if ($scope.selectedCategory || $scope.query) {
        q = Pages
          .find({
            category: $scope.selectedCategory,
            query: $scope.query
          });
      } else {
        q = Pages.findAll()
      }

      return q.then(function (result) {
        $scope.$apply(function () {
          $scope.pages = result;
        });
      });
    };

    $scope.remove = function (page) {
      if ($scope.selectedPage === page) {
        $scope.selectedPage = null;
      }

      $scope.pages = _.without($scope.pages, page);
      return Pages.remove(page);
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

        $scope.$watch('selectedCategory', $scope.search);
        $scope.$watch('query', $scope.search);
      });
    });

  });
