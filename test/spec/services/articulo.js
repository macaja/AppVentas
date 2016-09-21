'use strict';

describe('Service: articulo', function () {

  // load the service's module
  beforeEach(module('appVentasApp'));

  // instantiate service
  var articulo;
  beforeEach(inject(function (_articulo_) {
    articulo = _articulo_;
  }));

  it('should do something', function () {
    expect(!!articulo).toBe(true);
  });

});
