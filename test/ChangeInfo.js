var assert = require('chai').assert,
    GedcomX = require('gedcomx-js');

var json = {
  "objectModifier" : "modifier",
  "operation" : "operation",
  "reason" : "reason",
  "objectType" : "object type",
  "original" : {
    "resource" : "original-resource"
  },
  "parent" : {
    "resource" : "parent-resource"
  },
  "removed" : {
    "resource" : "removed-resource"
  },
  "resulting" : {
    "resource" : "resulting-resource"
  }
};

describe('ChangeInfo', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.ChangeInfo(), GedcomX.ChangeInfo, 'An instance of ChangeInfo is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.ChangeInfo(), GedcomX.ChangeInfo, 'An instance of ChangeInfo is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    test(GedcomX.ChangeInfo(json));
  });
  
  it('Build', function(){
    test(GedcomX.ChangeInfo()
      .setObjectModifier(json.objectModifier)
      .setOperation(json.operation)
      .setReason(json.reason)
      .setObjectType(json.objectType)
      .setOriginal(json.original)
      .setParent(json.parent)
      .setRemoved(json.removed)
      .setResulting(json.resulting)
    );
  });
  
  it('toJSON', function(){
    assert.deepEqual(GedcomX.ChangeInfo(json).toJSON(), json);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.ChangeInfo();
    var obj2 = GedcomX.ChangeInfo(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});

function test(change){
  assert.equal(change.getObjectModifier(), json.objectModifier);
  assert.equal(change.getOperation(), json.operation);
  assert.equal(change.getReason(), json.reason);
  assert.equal(change.getObjectType(), json.objectType);
  assert.deepEqual(change.getOriginal().toJSON(), json.original);
  assert.deepEqual(change.getParent().toJSON(), json.parent);
  assert.deepEqual(change.getRemoved().toJSON(), json.removed);
  assert.deepEqual(change.getResulting().toJSON(), json.resulting);
}