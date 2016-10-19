var assert = require('chai').assert,
    GedcomX = require('gedcomx-js');

var json = {
  "resource": "http://gedcomx.org/Birth"
};

describe('Tag', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.Tag(), GedcomX.Tag, 'An instance of Tag is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.Tag(), GedcomX.Tag, 'An instance of Tag is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    test(GedcomX.Tag(json));
  });
  
  it('Build', function(){
    test(GedcomX.Tag()
      .setResource(json.resource)
    );
  });
  
  it('toJSON', function(){
    assert.deepEqual(GedcomX.Tag(json).toJSON(), json);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.Tag();
    var obj2 = GedcomX.Tag(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});

function test(tag){
  assert.equal(tag.getResource(), json.resource);
}