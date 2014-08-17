'use strict';

/**
 * @ngdoc function
 * @name passwordManagerApp.controller:AddCtrl
 * @description
 * # AddCtrl
 * Controller of the passwordManagerApp
 */
angular.module('passwordManagerApp')
  .controller('AddCtrl', function ($scope, $state, Pages) {
    $scope.page = {};

    $scope.addPage = function () {
      Pages.add($scope.page).then(function () {
        $state.go('search');
      });
    };
  });
