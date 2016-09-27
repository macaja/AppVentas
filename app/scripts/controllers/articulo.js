'use strict';

/**
 * @ngdoc function
 * @name appVentasApp.controller:ArticuloCtrl
 * @description
 * # ArticuloCtrl
 * Controller of the appVentasApp
 */
angular.module('appVentasApp')
  .controller('ArticuloCtrl', function ($scope,$http,$routeParams,ArticuloService) {
    $scope.articulo = ArticuloService.consultarArticulo($routeParams.id);
    console.log($scope.articulo.nombre);
    $scope.nombre = $routeParams.nombre;
  });
