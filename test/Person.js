var assert = require('chai').assert,
    GedcomX = require('gedcomx-js');

describe('Person property extensions', function(){
  
  describe('discussion-references', function(){
    
    var json = {
      "discussion-references" : [ {
        "id" : "1234abc",
        "resource" : "http://familysearch.org/platform/discussions67890",
        "resourceId" : "67890"
      } ]
    };
  
    it('Create with JSON', function(){
      test(GedcomX.Person(json));
    });
    
    it('Build', function(){
      test(GedcomX.Person()
        .addDiscussionReference(
          GedcomX.DiscussionReference()
          .setId(json['discussion-references'][0].id)
          .setResource(json['discussion-references'][0].resource)
          .setResourceId(json['discussion-references'][0].resourceId)
      ));
    });
    
    it('toJSON', function(){
      assert.deepEqual(GedcomX.Person(json).toJSON(), json);
    });

    function test(person){
      assert.equal(person.getDiscussionReferences().length, 1);
      var ref = person.getDiscussionReferences()[0];
      assert.equal(ref.getId(), json['discussion-references'][0].id);
      assert.equal(ref.getResource(), json['discussion-references'][0].resource);
      assert.equal(ref.getResourceId(), json['discussion-references'][0].resourceId);
    }
    
  });
  
  describe('ordinances', function(){
    
    var json = {
      "ordinances" : [ {
        "type" : "http://lds.org/Confirmation",
        "status" : "http://familysearch.org/v1/Completed",
        "templeCode" : "NZEAL"
      } ]
    };
  
    it('Create with JSON', function(){
      test(GedcomX.Person(json));
    });
    
    it('Build', function(){
      test(GedcomX.Person()
        .addOrdinance(
          GedcomX.Ordinance()
          .setType(json.ordinances[0].type)
          .setStatus(json.ordinances[0].status)
          .setTempleCode(json.ordinances[0].templeCode)
      ));
    });
    
    it('toJSON', function(){
      assert.deepEqual(GedcomX.Person(json).toJSON(), json);
    });

    function test(person){
      assert.equal(person.getOrdinances().length, 1);
      var ordinance = person.getOrdinances()[0];
      assert.equal(ordinance.getType(), json.ordinances[0].type);
      assert.equal(ordinance.getStatus(), json.ordinances[0].status);
      assert.equal(ordinance.getTempleCode(), json.ordinances[0].templeCode);
    }
    
  });
  
});