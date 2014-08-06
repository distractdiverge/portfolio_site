'use strict';

/**
 * @ngdoc overview
 * @name testAngularGeneratorApp
 * @description
 * # testAngularGeneratorApp
 *
 * Main module of the application.
 */
angular
  .module('alexlapinski', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/resume.html',
        controller: 'ResumeController'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactController'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
