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

    function toJSON(model) {
      var o = {};
      _.extend(o, model.attributes);
      o.createdAt = model.createdAt.toString();
      o.id = model.id;
      return o;
    }

    function listToJSON(result) {
      return _.map(result, toJSON);
    }

    var Page = Parse.Object.extend('Page');

    this.add = function (page) {
      var page = new Page(page);
      return page.save();
    };


    this.findAll = function () {
      var query = new Parse.Query(Page);
      return query.find().then(listToJSON);
    };


    this.find = function (opts) {
      var query = new Parse.Query(Page);

      if (opts.query) {
        query.contains('name', opts.query);
      }

      if (opts.category) {
        query.equalTo('category', opts.category);
      }

      return query.find().then(listToJSON);
    }


    this.get = function (id) {
      return new Parse.Query(Page)
          .get(id)
          .then(toJSON);
    }
  });
