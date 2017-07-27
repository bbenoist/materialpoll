'use strict';

/**
 * @ngdoc overview
 * @name materialPollApp
 * @description
 * # materialPollApp
 *
 * Main module of the application.
 */
angular
  .module('materialPollApp', [
    'ngAnimate',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('/:id', {
        url: '/:id',
        templateUrl: 'views/vote.html',
        controller: 'VoteCtrl'
      })
      .state('/:id/v', {
        url: '/:id/v',
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl'
      });
  })
  .constant('myConfig', {
    'backend': 'http://server:9090/api/poll/',
    'version': 0.3
  });
