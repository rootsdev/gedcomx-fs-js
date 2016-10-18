var assert = require('chai').assert,
    GedcomX = require('gedcomx-js');

describe('AtomFeed property extensions', function(){
  
  describe('searchInfo', function(){
    
    var json = {
      "searchInfo" : [ {
        "totalHits" : 2,
        "closeHits" : 1
      } ]
    };
  
    it('Create with JSON', function(){
      test(GedcomX.AtomFeed(json));
    });
    
    it('Build', function(){
      test(GedcomX.AtomFeed()
        .addSearchInfo(
          GedcomX.SearchInfo()
          .setTotalHits(json.searchInfo[0].totalHits)
          .setCloseHits(json.searchInfo[0].closeHits)
      ));
    });
    
    it('toJSON', function(){
      assert.deepEqual(GedcomX.AtomFeed(json).toJSON(), json);
    });

    function test(feed){
      assert.equal(feed.getSearchInfo().length, 1);
      var search = feed.getSearchInfo()[0];
      assert.equal(search.getTotalHits(), json.searchInfo[0].totalHits);
      assert.equal(search.getCloseHits(), json.searchInfo[0].closeHits);
    }
    
  });
  
});