var assert = require('chai').assert,
    GedcomX = require('gedcomx-js');

var json = {
  "collection" : "https://familysearch.org/platform/collections/records",
  "status" : "http://familysearch.org/v1/Pending"
};

describe('MatchInfo', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.MatchInfo(), GedcomX.MatchInfo, 'An instance of MatchInfo is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.MatchInfo(), GedcomX.MatchInfo, 'An instance of MatchInfo is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    test(GedcomX.MatchInfo(json));
  });
  
  it('Build', function(){
    test(GedcomX.MatchInfo()
      .setCollection(json.collection)
      .setStatus(json.status)
    );
  });
  
  it('toJSON', function(){
    assert.deepEqual(GedcomX.MatchInfo(json).toJSON(), json);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.MatchInfo();
    var obj2 = GedcomX.MatchInfo(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});

function test(matchInfo){
  assert.equal(matchInfo.getCollection(), json.collection);
  assert.equal(matchInfo.getStatus(), json.status);
}