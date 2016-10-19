var assert = require('chai').assert,
    GedcomX = require('gedcomx-js');

var json = {
  "survivorResource" : {
    "resource" : "https://familysearch.org/platform/tree/persons/P12-345/conclusions/ABCD"
  },
  "duplicateResource" : {
    "resource" : "https://familysearch.org/platform/tree/persons/P54-321/conclusions/EFGH"
  }
};

describe('MergeConflict', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.MergeConflict(), GedcomX.MergeConflict, 'An instance of MergeConflict is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.MergeConflict(), GedcomX.MergeConflict, 'An instance of MergeConflict is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    test(GedcomX.MergeConflict(json));
  });
  
  it('Build', function(){
    test(GedcomX.MergeConflict()
      .setSurvivorResource(json.survivorResource)
      .setDuplicateResource(json.duplicateResource)
    );
  });
  
  it('toJSON', function(){
    assert.deepEqual(GedcomX.MergeConflict(json).toJSON(), json);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.MergeConflict();
    var obj2 = GedcomX.MergeConflict(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});

function test(conflict){
  assert.deepEqual(conflict.getSurvivorResource().toJSON(), json.survivorResource);
  assert.deepEqual(conflict.getDuplicateResource().toJSON(), json.duplicateResource);
}