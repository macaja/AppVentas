'use strict';

/**
 * @ngdoc service
 * @name appVentasApp.articulo
 * @description
 * # articulo
 * Factory in the appVentasApp.
 */
angular.module('appVentasApp')
  .factory('ArticuloService', function (localStorageService) {
    var articuloService = {};
    articuloService.key = "angular-articulos";
    if(localStorageService.get(articuloService.key)){
      articuloService.articulos = localStorageService.get(articuloService.key);
    }else{
        articuloService.articulos = [];
    }
    articuloService.ingresar = function(nuevoArticulo){
      articuloService.articulos.push(nuevoArticulo);
      articuloService.actualizarLocalStorage();
    };
    articuloService.actualizarLocalStorage= function(){
      localStorageService.set(articuloService.key,articuloService.articulos);
    };
    articuloService.eliminarRegistro = function(item){
      articuloService.articulos = articuloService.articulos.filter(function(articulo){
        return articulo !== item;
      });
      articuloService.actualizarLocalStorage();
      return articuloService.obtenerTodos();
    };
    articuloService.obtenerTodos = function(){
      return articuloService.articulos;
    }
    articuloService.eliminarTodos = function(){
      articuloService.articulos = [];
      articuloService.actualizarLocalStorage();
    }
    articuloService.consultarArticulo = function(id){
      var articulo = {};
      var lon = articuloService.articulos.length;
      for(var i = 0;i<lon;i++ ){
        if(id === articuloService.articulos[i].id){
          articulo.nombre = articuloService.articulos[i].nombre;
          articulo.imagen = articuloService.articulos[i].imagen;
          articulo.descripcion = articuloService.articulos[i].descripcion;
          articulo.precio = articuloService.articulos[i].precio;
        }else{
          continue;
        }
      }
      return articulo;
    }
    return articuloService;
  });
