'use strict';

/**
 * @ngdoc function
 * @name testAngularGeneratorApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the testAngularGeneratorApp
 */
angular.module('alexlapinski')
  .controller('ContactController', function ($scope) {
    $scope.awesomeThings = [
      '490 Penrose Ln.',
      'Warminster',
      'PA',
      '18974',
      '610 505-7902'
    ];
  });
