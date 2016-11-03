var assert = require('chai').assert,
    GedcomX = require('gedcomx-js');

describe('SourceDescription property extensions', function(){
  
  describe('artifactMetadata', function(){
    
    var json = {
      "artifactMetadata" : [ {
        "filename" : "GGLeavitt1988.jpg",
        "qualifiers" : [ {
          "name" : "http://familysearch.org/v1/Photo"
        } ],
        "width" : 1944,
        "height" : 1904,
        "size" : 1465548,
        "screeningState" : "http://gedcomx.org/Accepted"
      } ]
    };
  
    it('Create with JSON', function(){
      test(GedcomX.SourceDescription(json));
    });
    
    it('Build', function(){
      test(GedcomX.SourceDescription()
        .addArtifactMetadata(
          GedcomX.ArtifactMetadata()
          .setFilename(json.artifactMetadata[0].filename)
          .setQualifiers(json.artifactMetadata[0].qualifiers)
          .setWidth(json.artifactMetadata[0].width)
          .setHeight(json.artifactMetadata[0].height)
          .setSize(json.artifactMetadata[0].size)
          .setScreeningState(json.artifactMetadata[0].screeningState)
      ));
    });
    
    it('toJSON', function(){
      assert.deepEqual(GedcomX.SourceDescription(json).toJSON(), json);
    });

    function test(sourceDescription){
      assert.equal(sourceDescription.getArtifactMetadata().length, 1);
      var meta = sourceDescription.getArtifactMetadata()[0];
      assert.equal(meta.getFilename(), json.artifactMetadata[0].filename);
      assert.equal(meta.getWidth(), json.artifactMetadata[0].width);
      assert.equal(meta.getHeight(), json.artifactMetadata[0].height);
      assert.equal(meta.getSize(), json.artifactMetadata[0].size);
      assert.equal(meta.getScreeningState(), json.artifactMetadata[0].screeningState);
      assert.equal(meta.getQualifiers().length, 1);
      assert.equal(meta.getQualifiers()[0].getName(), json.artifactMetadata[0].qualifiers[0].name);
    }
    
  });
  
});