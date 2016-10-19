var assert = require('chai').assert,
    GedcomX = require('gedcomx-js');

var json = {
  "totalHits" : 2,
  "closeHits" : 1
};

describe('SearchInfo', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.SearchInfo(), GedcomX.SearchInfo, 'An instance of SearchInfo is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.SearchInfo(), GedcomX.SearchInfo, 'An instance of SearchInfo is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    test(GedcomX.SearchInfo(json));
  });
  
  it('Build', function(){
    test(GedcomX.SearchInfo()
      .setTotalHits(json.totalHits)
      .setCloseHits(json.closeHits)
    );
  });
  
  it('toJSON', function(){
    assert.deepEqual(GedcomX.SearchInfo(json).toJSON(), json);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.SearchInfo();
    var obj2 = GedcomX.SearchInfo(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});

function test(searchInfo){
  assert.equal(searchInfo.getTotalHits(), json.totalHits);
  assert.equal(searchInfo.getCloseHits(), json.closeHits);
}