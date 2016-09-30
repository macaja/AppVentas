'use strict';

describe('Service: autorizacion', function () {

  // load the service's module
  beforeEach(module('appVentasApp'));

  // instantiate service
  var autorizacion;
  beforeEach(inject(function (_autorizacion_) {
    autorizacion = _autorizacion_;
  }));

  it('should do something', function () {
    expect(!!autorizacion).toBe(true);
  });

});
