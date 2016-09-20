'use strict';

/**
 * @ngdoc service
 * @name appVentasApp.registro
 * @description
 * # registro
 * Factory in the appVentasApp.
 */
angular.module('appVentasApp')
  .factory('RegistroService', function (localStorageService) {
    var registroService = {};
      registroService.key = "angular-registros";
      if(localStorageService.get(registroService.key)){
        registroService.registros = localStorageService.get(registroService.key);
      }else{
          registroService.registros = [];
      }
      registroService.registrar = function(nuevoRegistro){
        registroService.registros.push(nuevoRegistro);
        registroService.actualizarLocalStorage();
      };
      registroService.actualizarLocalStorage= function(){
        localStorageService.set(registroService.key,registroService.registros);
      };
      registroService.eliminarRegistro = function(item){
        registroService.registros = registroService.registros.filter(function(registro){
          return registro !== item;
        });
        registroService.actualizarLocalStorage();
        return registroService.obtenerTodos();
      };
      registroService.obtenerTodos = function(){
        return registroService.registros;
      }
      registroService.eliminarTodos = function(){
        registroService.registros = [];
        registroService.actualizarLocalStorage();
      }
      registroService.existeUsuario = function(username){
        var longitud = registroService.registros.length;
        var esta = false;
        for(var i=0;i < longitud;i++){
          if(registroService.registros[i].username !== username){
            continue;
          }else{
            esta = true;
          }
        }
        return esta;
      }
      return registroService;
  });
