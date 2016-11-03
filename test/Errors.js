var assert = require('chai').assert,
    GedcomX = require('gedcomx-js');

var json = {
  "errors" : [ {
    "code" : 401,
    "message" : "Unable to  read tf person.",
    "stacktrace" : "GET http://tf.prod.us-east-1.prod.fslocal.org/tf/person/KWC8-LKC?oneHops=none returned a response status of 401 Unauthorized:\n{\n\"401\": \"Unauthorized\"\n}"
  } ]
};

describe('Errors', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.Errors(), GedcomX.Errors, 'An instance of Errors is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.Errors(), GedcomX.Errors, 'An instance of Errors is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    test(GedcomX.Errors(json));
  });
  
  it('Build', function(){
    test(GedcomX.Errors().addError(new GedcomX.Error(json.errors[0])));
  });
  
  it('toJSON', function(){
    assert.deepEqual(GedcomX.Errors(json).toJSON(), json);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.Errors();
    var obj2 = GedcomX.Errors(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});

function test(errors){
  assert.equal(errors.getErrors().length, 1);
  var error = errors.getErrors()[0];
  assert.equal(error.getCode(), json.errors[0].code);
  assert.equal(error.getLabel(), json.errors[0].label);
  assert.equal(error.getMessage(), json.errors[0].message);
  assert.equal(error.getStacktrace(), json.errors[0].stacktrace);
}