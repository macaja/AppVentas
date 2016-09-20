'use strict';

/**
 * @ngdoc overview
 * @name appVentasApp
 * @description
 * # appVentasApp
 *
 * Main module of the application.
 */
angular
  .module('appVentasApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/registro', {
        templateUrl: 'views/registro.html',
        controller: 'RegistroCtrl',
        controllerAs: 'registro'
      })
      .when('/articulo/:name', {
        templateUrl: 'views/articulo.html',
        controller: 'ArticuloCtrl',
        controllerAs: 'articulo'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
