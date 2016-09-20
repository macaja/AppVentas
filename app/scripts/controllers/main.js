'use strict';

/**
 * @ngdoc function
 * @name appVentasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appVentasApp
 */
angular.module('appVentasApp')
  .controller('MainCtrl', function ($scope,$http) {
    $scope.nombreArticulos = [];
    $http.get("https://api.github.com/users/macaja/repos")
    .success(function(data){
      //swal("Success", "Se obtuvieron los registros exitosamente", "success");
      $scope.articulos = data;
      for(var i = data.length -1;i>=0;i--){
        var repo = data[i];
        $scope.repositorios.push(repo.name);
      }
    })
    .error(function(err){
      swal("ERROR!", "Error al obtener recurso.", "error");
    });
  });
