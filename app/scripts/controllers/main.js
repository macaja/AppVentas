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
    $scope.articulos = [];
    $http.get('http://localhost:9000/articulos/obtenerArticulos')
    .then(function(response){
      $scope.articulos = response.data;
      swal("Articulos de bd", "Se obtuvieron los datos", "success");
    },function(response){
      swal("Error", "NO se pudo obtener articulos", "error");
    });
    $scope.ingresarArticulo = function(){
      var data = {
          nombre:$scope.nuevoArticulo.nombre,
          precio:$scope.nuevoArticulo.precio,
          descripcion:$scope.nuevoArticulo.descripcion,
          imagen:$scope.nuevoArticulo.imagen,
          cantidad:$scope.nuevoArticulo.cantidad,
          categoria:$scope.nuevoArticulo.categoria
      }
      $http.post('http://localhost:9000/articulos/agregarArticulo',data)
      .success(function(articulo,status,headers){
          swal("Articulo insertado!", "El articulo se ha insertado satisfactoriamente.", "success");
          $scope.nuevoArticulo = {};
      })
      .error(function(articulo,status,header){
        swal("ERROR", "No se ha podido ingresar el articulo correctamente", "error");
      });

    }
  });
