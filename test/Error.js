var assert = require('chai').assert,
    GedcomX = require('gedcomx-js');

var json = {
  "code" : 401,
  "label": "Unauthorized",
  "message" : "Unable to  read tf person.",
  "stacktrace" : "GET http://tf.prod.us-east-1.prod.fslocal.org/tf/person/KWC8-LKC?oneHops=none returned a response status of 401 Unauthorized:\n{\n\"401\": \"Unauthorized\"\n}"
};

describe('Error', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.Error(), GedcomX.Error, 'An instance of Error is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.Error(), GedcomX.Error, 'An instance of Error is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    test(GedcomX.Error(json));
  });
  
  it('Build', function(){
    test(GedcomX.Error()
      .setCode(json.code)
      .setLabel(json.label)
      .setMessage(json.message)
      .setStacktrace(json.stacktrace)
    );
  });
  
  it('toJSON', function(){
    assert.deepEqual(GedcomX.Error(json).toJSON(), json);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.Error();
    var obj2 = GedcomX.Error(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});

function test(error){
  assert.equal(error.getCode(), json.code);
  assert.equal(error.getLabel(), json.label);
  assert.equal(error.getMessage(), json.message);
  assert.equal(error.getStacktrace(), json.stacktrace);
}