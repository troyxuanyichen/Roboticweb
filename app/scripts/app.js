'use strict';

/**
 * @ngdoc overview
 * @name brainCoWebApp
 * @description
 * # brainCoWebApp
 *
 * Main module of the application.
 */
angular
  .module('brainCoWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
/*
        views: {
          content: {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
          }
        }
*/
      })
      .state('pledge', {
        url: '/pledge',
        templateUrl: 'views/pledge.html',
        controller: 'PledgeCtrl',
/*
        views: {
          content: {
            templateUrl: 'views/pledge.html',
            controller: 'PledgeCtrl',
            controllerAs: 'pledge'
          }
        }
*/
      });

    $urlRouterProvider.otherwise('/')
  });
