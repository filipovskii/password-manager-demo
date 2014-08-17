'use strict';

describe('Controller: SearchCtrl', function () {

  // load the controller's module
  beforeEach(module('passwordManagerApp'));

  var SearchCtrl,
      Pages,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($rootScope) {
    var noop = function () { return Parse.Promise.as([]); };
    scope = $rootScope.$new();
    Pages = { findAll: noop };
  }));


  it('should query for all pages by default', function () {
    var called = false;

    Pages.findAll = function () {
      called = true;
      return Parse.Promise.as([]);
    }

    inject(function ($controller) {
      $controller('SearchCtrl', {
        $scope: scope,
        Pages: Pages
      });
    });

    expect(called).toBe(true);
  });


  it('should attach search results to scope', function () {
    var expectedResult = [ {'x': 'y'} ];
    Pages.findAll = function () {
      return Parse.Promise.as(expectedResult);
    }

    inject(function ($controller) {
      $controller('SearchCtrl', {
        $scope: scope,
        Pages: Pages
      });
    });

    expect(scope.pages).toEqual(expectedResult);
  });


  it('should attach categories from ', function () {

  });

});
