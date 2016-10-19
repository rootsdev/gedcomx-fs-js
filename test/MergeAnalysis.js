var assert = require('chai').assert,
    GedcomX = require('gedcomx-js');

var json = {
  "survivorResources" : [ {
    "resource" : "https://familysearch.org/platform/tree/persons/P12-345/conclusions/YZAB"
  } ],
  "duplicateResources" : [ {
    "resource" : "https://familysearch.org/platform/tree/persons/P54-321/conclusions/QRST"
  } ],
  "conflictingResources" : [ {
    "survivorResource" : {
      "resource" : "https://familysearch.org/platform/tree/persons/P12-345/conclusions/ABCD"
    },
    "duplicateResource" : {
      "resource" : "https://familysearch.org/platform/tree/persons/P54-321/conclusions/EFGH"
    }
  } ],
  "survivor" : {
    "resource" : "https://familysearch.org/platform/tree/persons/P12-345"
  },
  "duplicate" : {
    "resource" : "https://familysearch.org/platform/tree/persons/P54-321"
  }
};

describe('MergeAnalysis', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.MergeAnalysis(), GedcomX.MergeAnalysis, 'An instance of MergeAnalysis is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.MergeAnalysis(), GedcomX.MergeAnalysis, 'An instance of MergeAnalysis is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    test(GedcomX.MergeAnalysis(json));
  });
  
  it('Build', function(){
    test(GedcomX.MergeAnalysis()
      .addSurvivorResource(json.survivorResources[0])
      .addDuplicateResource(json.duplicateResources[0])
      .addConflictingResource(json.conflictingResources[0])
      .setSurvivor(json.survivor)
      .setDuplicate(json.duplicate)
    );
  });
  
  it('toJSON', function(){
    assert.deepEqual(GedcomX.MergeAnalysis(json).toJSON(), json);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.MergeAnalysis();
    var obj2 = GedcomX.MergeAnalysis(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});

function test(analysis){
  assert.deepEqual(analysis.getSurvivorResources()[0].toJSON(), json.survivorResources[0]);
  assert.deepEqual(analysis.getDuplicateResources()[0].toJSON(), json.duplicateResources[0]);
  assert.deepEqual(analysis.getConflictingResources()[0].toJSON(), json.conflictingResources[0]);
  assert.deepEqual(analysis.getSurvivor().toJSON(), json.survivor);
  assert.deepEqual(analysis.getDuplicate().toJSON(), json.duplicate);
}