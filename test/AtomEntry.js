var assert = require('chai').assert,
    GedcomX = require('gedcomx-js');

describe('AtomEntry property extensions', function(){
  
  describe('changeInfo', function(){
    
    var json = {
      changeInfo: [
        {
          "objectModifier" : "modifier",
          "operation" : "operation",
          "reason" : "reason",
          "objectType" : "object type"
        }
      ]
    };
  
    it('Create with JSON', function(){
      test(GedcomX.AtomEntry(json));
    });
    
    it('Build', function(){
      test(GedcomX.AtomEntry()
        .addChangeInfo(
          GedcomX.ChangeInfo()
          .setObjectModifier(json.changeInfo[0].objectModifier)
          .setOperation(json.changeInfo[0].operation)
          .setReason(json.changeInfo[0].reason)
          .setObjectType(json.changeInfo[0].objectType)
      ));
    });
    
    it('toJSON', function(){
      assert.deepEqual(GedcomX.AtomEntry(json).toJSON(), json);
    });

    function test(entry){
      assert.equal(entry.getChangeInfo().length, 1);
      var change = entry.getChangeInfo()[0];
      assert.equal(change.getObjectModifier(), json.changeInfo[0].objectModifier);
      assert.equal(change.getOperation(), json.changeInfo[0].operation);
      assert.equal(change.getReason(), json.changeInfo[0].reason);
      assert.equal(change.getObjectType(), json.changeInfo[0].objectType);
    }
    
  });
  
  describe('matchInfo', function(){
    
    var json = {
      "matchInfo" : [ {
        "collection" : "https://familysearch.org/platform/collections/records",
        "status" : "http://familysearch.org/v1/Pending"
      } ]
    };
  
    it('Create with JSON', function(){
      test(GedcomX.AtomEntry(json));
    });
    
    it('Build', function(){
      test(GedcomX.AtomEntry()
        .addMatchInfo(
          GedcomX.MatchInfo()
            .setCollection(json.matchInfo[0].collection)
            .setStatus(json.matchInfo[0].status)
      ));
    });
    
    it('toJSON', function(){
      assert.deepEqual(GedcomX.AtomEntry(json).toJSON(), json);
    });

    function test(entry){
      assert.equal(entry.getMatchInfo().length, 1);
      var match = entry.getMatchInfo()[0];
      assert.equal(match.getCollection(), json.matchInfo[0].collection);
      assert.equal(match.getStatus(), json.matchInfo[0].status);
    }
    
  });
  
});