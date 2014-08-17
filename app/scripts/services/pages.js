'use strict';

/**
 * @ngdoc service
 * @name passwordManagerApp.Pages
 * @description
 * # Pages
 * Service in the passwordManagerApp.
 */
angular.module('passwordManagerApp')
  .service('Pages', function Pages() {
    var Page = Parse.Object.extend('Page');

    this.add = function (page) {
      var page = new Page(page);
      return page.save();
    }

    this.findAll = function () {
      var query = new Parse.Query(Page);
      return query.find().then(function (result) {
        return _.map(result, function (obj) {
          return obj.attributes;
        });
      });
    }
  });
