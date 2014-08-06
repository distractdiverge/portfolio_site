'use strict';

/**
 * @ngdoc filter
 * @name testAngularGeneratorApp.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the testAngularGeneratorApp.
 */
angular.module('alexlapinski')
  .filter('myFilter', function () {
    return function (input) {
      return 'myFilter filter: ' + input;
    };
  });
