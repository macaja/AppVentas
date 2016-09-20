'use strict';

describe('Directive: imagen', function () {

  // load the directive's module
  beforeEach(module('appVentasApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<imagen></imagen>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the imagen directive');
  }));
});
