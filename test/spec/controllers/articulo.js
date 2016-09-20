'use strict';

describe('Controller: ArticuloCtrl', function () {

  // load the controller's module
  beforeEach(module('appVentasApp'));

  var ArticuloCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArticuloCtrl = $controller('ArticuloCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ArticuloCtrl.awesomeThings.length).toBe(3);
  });
});
