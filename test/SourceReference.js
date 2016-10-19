var assert = require('chai').assert,
    GedcomX = require('gedcomx-js');

describe('SourceReference property extensions', function(){
  
  describe('tags', function(){
    
    var json = {
      "tags" : [ {
        "resource" : "http://gedcomx.org/Name"
      } ]
    };
  
    it('Create with JSON', function(){
      test(GedcomX.SourceReference(json));
    });
    
    it('Build', function(){
      test(GedcomX.SourceReference()
        .addTag(
          GedcomX.Tag()
            .setResource(json.tags[0].resource)
      ));
    });
    
    it('toJSON', function(){
      assert.deepEqual(GedcomX.SourceReference(json).toJSON(), json);
    });

    function test(sourceRef){
      assert.equal(sourceRef.getTags().length, 1);
      var tag = sourceRef.getTags()[0];
      assert.equal(tag.getResource(), json.tags[0].resource);
    }
    
  });
  
});