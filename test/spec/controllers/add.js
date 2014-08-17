'use strict';

describe('Controller: AddCtrl', function () {

  // load the controller's module
  beforeEach(module('passwordManagerApp'));

  var AddCtrl,
      Pages,
      promise,
      state,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q) {
    var noop = function () {},
        returnPromise = function () {
          return promise
        };

    promise = $q.defer().promise;

    scope = $rootScope.$new();
    state = { go: noop };
    Pages = { add: returnPromise };

    AddCtrl = $controller('AddCtrl', {
      $scope: scope,
      $state: state,
      Pages: Pages
    });
  }));

  it('should have an empty page on init', function () {
    expect(scope.page).toEqual({});
  });

  it('should call Pages.add with current page', function () {
    var passedObj;
    scope.page = {'blah': 'blah'};
    Pages.add = function (obj) {
      passedObj = obj;
      return promise;
    };

    scope.addPage();

    expect(passedObj).toEqual(scope.page);
  });

  it('should redirect to search after successful save', function () {
    var goTo;
    state.go = function (to) {
      goTo = to;
    }

    Pages.add = function () {
      // emulate promise
      return {
        then: function (f) { f(); }
      }
    }

    scope.addPage();

    expect(goTo).toEqual('search');
  });
});
