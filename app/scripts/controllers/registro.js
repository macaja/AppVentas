'use strict';

/**
 * @ngdoc function
 * @name appVentasApp.controller:RegistroCtrl
 * @description
 * # RegistroCtrl
 * Controller of the appVentasApp
 */
angular.module('appVentasApp')
  .controller('RegistroCtrl', function ($scope,RegistroService) {
      $scope.registros = RegistroService.obtenerTodos();
      $scope.registrar = function(){
        var existe = RegistroService.existeUsuario($scope.nuevoRegistro.username);
        if(existe == false){
          RegistroService.registrar($scope.nuevoRegistro);
          swal("Bien","Usuario ingresado exitosamente", "success");
        }else{
          swal("Ohh!","El usuario ya existe", "error");
        }
        $scope.nuevoRegistro = {};
      }
      $scope.eliminarItem = function(item){
        $scope.registros = RegistroService.eliminarRegistro(item);
      }
      $scope.eliminarTodos = function(){
        RegistroService.eliminarTodos();
        $scope.registros = RegistroService.obtenerTodos();
  			swal("Bien","Se eliminaron los registros", "success");
      }
  });
