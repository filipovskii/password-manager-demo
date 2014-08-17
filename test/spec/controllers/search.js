'use strict';

describe('Controller: SearchCtrl', function () {

  // load the controller's module
  beforeEach(module('passwordManagerApp'));

  var SearchCtrl,
      Pages,
      scope,
      runController;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($rootScope, $controller) {
    var noop = function () { return Parse.Promise.as([]); };
    scope = $rootScope.$new();
    Pages = { findAll: noop };

    runController = function () {
      $controller('SearchCtrl', {
        $scope: scope,
        Pages: Pages
      });
    };
  }));


  it('should query for all pages by default', function () {
    var called = false;

    Pages.findAll = function () {
      called = true;
      return Parse.Promise.as([]);
    }

    runController();

    expect(called).toBe(true);
  });


  it('should attach search results to scope', function () {
    var expectedResult = [ {'x': 'y'} ];
    Pages.findAll = function () {
      return Parse.Promise.as(expectedResult);
    }

    runController();

    expect(scope.pages).toEqual(expectedResult);
  });


  it('should attach categories from first search', function () {
    var result = [ {'category': 'Category1'}, {'category': 'Category2'} ];
    Pages.findAll = function () {
      return Parse.Promise.as(result);
    }

    runController();

    expect(scope.categories).toEqual(['', 'Category1', 'Category2']);
  });


  it('should pass category and query to Pages if set', function () {
    var opts;

    Pages.find = function (o) {
      opts = o;
      return Parse.Promise.as([]);
    };

    runController();
    scope.selectedCategory = 'cat';
    scope.query = 'q';
    scope.search();

    expect(opts).toEqual({category: 'cat', query: 'q'});
  });

});
