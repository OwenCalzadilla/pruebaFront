'use strict';

describe('Service: jsonFactory', function () {

  // load the service's module
  beforeEach(module('app'));

  // instantiate service
  var jsonFactory;
  beforeEach(inject(function (_jsonFactory_) {
    jsonFactory = _jsonFactory_;
  }));

  it('should do something', function () {
    expect(!!jsonFactory).toBe(true);
  });

});
