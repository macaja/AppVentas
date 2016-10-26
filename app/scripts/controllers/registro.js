'use strict';

/**
 * @ngdoc function
 * @name appVentasApp.controller:RegistroCtrl
 * @description
 * # RegistroCtrl
 * Controller of the appVentasApp
 */
angular.module('appVentasApp')
  .controller('RegistroCtrl', function ($scope,$http,RegistroService) {
      //$scope.registros = RegistroService.obtenerTodos();
      $scope.validar = false;
      $scope.registrarUsuario = function(){
        if($scope.nuevoRegistro.password == $scope.nuevoRegistro.confirmPassword){
          var data = {
              username:$scope.nuevoRegistro.username,
              password:$scope.nuevoRegistro.password
          }
          $http.post('http://localhost:9000/usuarios/registrarUsuario',data)
          .success(function(response){
              swal(response.status, response.message , "success");
              console.log(data.statusText);
              $scope.nuevoRegistro = {};
              $scope.validar = false;
          })
          .error(function(response){
            swal(response.status, response.message, "error");
          });
        }else{
          $scope.validar = true;
        }

      }
  });
