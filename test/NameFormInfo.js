var assert = require('chai').assert,
    GedcomX = require('gedcomx-js');

var json = {
  "order" : "http://familysearch.org/v1/Eurotypic"
};

describe('NameFormInfo', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.NameFormInfo(), GedcomX.NameFormInfo, 'An instance of NameFormInfo is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.NameFormInfo(), GedcomX.NameFormInfo, 'An instance of NameFormInfo is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    test(GedcomX.NameFormInfo(json));
  });
  
  it('Build', function(){
    test(GedcomX.NameFormInfo()
      .setOrder(json.order)
    );
  });
  
  it('toJSON', function(){
    assert.deepEqual(GedcomX.NameFormInfo(json).toJSON(), json);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.NameFormInfo();
    var obj2 = GedcomX.NameFormInfo(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});

function test(nameFormInfo){
  assert.equal(nameFormInfo.getOrder(), json.order);
}