var assert = require('chai').assert,
    GedcomX = require('gedcomx-js');

var json = {
  "filename" : "GGLeavitt1988.jpg",
  "qualifiers" : [ {
    "name" : "http://familysearch.org/v1/Photo"
  } ],
  "width" : 1944,
  "height" : 1904,
  "size" : 1465548,
  "screeningState" : "http://gedcomx.org/Accepted"
};

describe('ArtifactMetadata', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.ArtifactMetadata(), GedcomX.ArtifactMetadata, 'An instance of ArtifactMetadata is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.ArtifactMetadata(), GedcomX.ArtifactMetadata, 'An instance of ArtifactMetadata is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    test(GedcomX.ArtifactMetadata(json));
  });
  
  it('Build', function(){
    test(GedcomX.ArtifactMetadata()
      .setFilename(json.filename)
      .setQualifiers(json.qualifiers)
      .setWidth(json.width)
      .setHeight(json.height)
      .setSize(json.size)
      .setScreeningState(json.screeningState)
    );
  });
  
  it('toJSON', function(){
    assert.deepEqual(GedcomX.ArtifactMetadata(json).toJSON(), json);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.ArtifactMetadata();
    var obj2 = GedcomX.ArtifactMetadata(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});

function test(meta){
  assert.equal(meta.getFilename(), json.filename);
  assert.equal(meta.getWidth(), json.width);
  assert.equal(meta.getHeight(), json.height);
  assert.equal(meta.getSize(), json.size);
  assert.equal(meta.getScreeningState(), json.screeningState);
  assert.equal(meta.getQualifiers().length, 1);
  assert.equal(meta.getQualifiers()[0].getName(), json.qualifiers[0].name);
}