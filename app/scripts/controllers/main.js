'use strict';

/**
 * @ngdoc function
 * @name appVentasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appVentasApp
 */
angular.module('appVentasApp')
  .controller('MainCtrl', function ($scope,$http,ArticuloService) {
    $scope.articulos = ArticuloService.obtenerTodos();
    $scope.nuevoArticulo = {};
    $scope.nuevoArticulo.id = $scope.articulos.length + 1;
    $scope.ingresarArticulo = function(){
      ArticuloService.ingresar($scope.nuevoArticulo);
			swal("Articulo insertado!", "El articulo se ha insertado satisfactoriamente.", "success");
      $scope.nuevoArticulo = {};
    }
    $scope.categorias = [
        {nombre : "Vehiculos"},
        {nombre : "Inmuebles"},
        {nombre : "Telefonos"},
        {nombre : "Computadores"},
        {nombre : "Videojuegos"},
        {nombre : "Deportes"},
        {nombre : "Ropa"}
    ];
  });
