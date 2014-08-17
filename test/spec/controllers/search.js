'use strict';

describe('Controller: SearchCtrl', function () {

  // load the controller's module
  beforeEach(module('passwordManagerApp'));

  var SearchCtrl,
      Pages,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    var noop = function () { return Parse.Promise.as([]); };
    scope = $rootScope.$new();
    Pages = { findAll: noop };
    SearchCtrl = $controller('SearchCtrl', {
      $scope: scope,
      Pages: Pages
    });
  }));


  it('should query for all pages by default', function () {
    var called = false;

    Pages.findAll = function () {
      called = true;
      return Parse.Promise.as([]);
    }

    scope.search();

    expect(called).toBe(true);
  });


  it('should attach search results to scope', function () {
    var expectedResult = [ {'x': 'y'} ];
    Pages.findAll = function () {
      return Parse.Promise.as(expectedResult);
    }

    scope.search();

    expect(scope.pages).toEqual(expectedResult);
  });

});
