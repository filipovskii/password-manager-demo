'use strict';

/**
 * @ngdoc function
 * @name passwordManagerApp.controller:ViewCtrl
 * @description
 * # ViewCtrl
 * Controller of the passwordManagerApp
 */
angular.module('passwordManagerApp')
  .controller('ViewCtrl', function ($scope, $stateParams, Pages) {
    $scope.plain = false;

    Pages.get($stateParams.pageId)
      .then(function (o) {
        $scope.$apply(function () {
          $scope.page = o;
        });
      });


    $scope.showPlaintext = function () {
      $scope.plain = true;
    };

    $scope.password = function () {
      var stars;

      if (!$scope.page) {
        return '';
      }

      if ($scope.plain) {
        return $scope.page.password;
      } else {
        stars = new Array($scope.page.password.length);
        return stars.join('*');
      }
    };

  });
