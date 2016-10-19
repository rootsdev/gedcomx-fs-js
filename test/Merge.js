var assert = require('chai').assert,
    GedcomX = require('gedcomx-js');

var json ={
  "resourcesToDelete" : [ {
    "resource" : "https://familysearch.org/platform/tree/persons/P12-345/conclusions/ABCD"
  } ],
  "resourcesToCopy" : [ {
    "resource" : "https://familysearch.org/platform/tree/persons/P54-321/conclusions/IJKL"
  } ]
};

describe('Merge', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.Merge(), GedcomX.Merge, 'An instance of Merge is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.Merge(), GedcomX.Merge, 'An instance of Merge is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    test(GedcomX.Merge(json));
  });
  
  it('Build', function(){
    test(GedcomX.Merge()
      .addResourceToDelete(json.resourcesToDelete[0])
      .addResourceToCopy(json.resourcesToCopy[0])
    );
  });
  
  it('toJSON', function(){
    assert.deepEqual(GedcomX.Merge(json).toJSON(), json);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.Merge();
    var obj2 = GedcomX.Merge(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});

function test(merge){
  assert.deepEqual(merge.getResourcesToDelete()[0].toJSON(), json.resourcesToDelete[0]);
  assert.deepEqual(merge.getResourcesToCopy()[0].toJSON(), json.resourcesToCopy[0]);
}