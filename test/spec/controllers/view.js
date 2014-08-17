'use strict';

describe('Controller: ViewCtrl', function () {

  // load the controller's module
  beforeEach(module('passwordManagerApp'));

  var ViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewCtrl = $controller('ViewCtrl', {
      $scope: scope
    });
  }));

});
