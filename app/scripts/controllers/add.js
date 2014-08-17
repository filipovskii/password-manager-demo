'use strict';

/**
 * @ngdoc function
 * @name passwordManagerApp.controller:AddCtrl
 * @description
 * # AddCtrl
 * Controller of the passwordManagerApp
 */
angular.module('passwordManagerApp')
  .controller('AddCtrl', function ($scope) {
    $scope.addPage = function () {
      console.log('AddIt called');
    };
  });
