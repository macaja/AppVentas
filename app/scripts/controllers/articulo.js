'use strict';

/**
 * @ngdoc function
 * @name appVentasApp.controller:ArticuloCtrl
 * @description
 * # ArticuloCtrl
 * Controller of the appVentasApp
 */
angular.module('appVentasApp')
  .controller('ArticuloCtrl', function ($scope,$http,$routeParams) {
    $scope.articulo = {};
    $http.get("https://api.github.com/repos/macaja/"+$routeParams.name)
    .success(function(data){
      $scope.articulo = data;
    })
    .error(function(err){
      swal("ERROR!", "Error al obtener recurso.", "error");
    });
  });
