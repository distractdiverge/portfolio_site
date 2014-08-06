'use strict';

/**
 * @ngdoc function
 * @name alexlapinski.controller:ProjectsController
 * @description
 * # Projects Controller
 * Controller of the projects for alexlapinski
 */
angular.module('alexlapinski')
  .controller('ProjectsController', function ($scope) {
    $scope.awesomeThings = [
      'ProjectTitle 1',
      'ProjectTitle 2',
      'ProjectTitle 3'
    ];
  });
