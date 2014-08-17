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

  it('Should have an empty page on init', function () {

  });

  it('Should call Pages.add with new page on addPage()', function () {
  });
});
