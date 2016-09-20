'use strict';

/**
 * @ngdoc directive
 * @name appVentasApp.directive:imagen
 * @description
 * # imagen
 */
angular.module('appVentasApp')
  .directive('backImg', function () {
    return function(scope,element,attrs){
      attrs.$observe('backImg',function(value){
        element.css({
          "background":"url("+value+")",
          "background-size":"cover",
          "background-position":"center"
        });
      });
    }
  });
