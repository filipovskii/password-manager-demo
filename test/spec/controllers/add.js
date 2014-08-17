'use strict';

describe('Controller: AddCtrl', function () {

  // load the controller's module
  beforeEach(module('passwordManagerApp'));

  var AddCtrl,
      Pages,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Pages = {};
    AddCtrl = $controller('AddCtrl', {
      $scope: scope,
      Pages: Pages
    });
  }));

});
