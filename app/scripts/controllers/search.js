'use strict';

/**
 * @ngdoc function
 * @name passwordManagerApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the passwordManagerApp
 */
angular.module('passwordManagerApp')
  .controller('SearchCtrl', function ($scope, $stateParams) {
    $scope.categories = [ 'x', 'y' ];
    $scope.sites = [
      {name: 'yahoo'},
      {name: 'google'}
    ];


    $scope.selectSite = function (site) {
      $scope.selectedSite = site;
    };
  });
