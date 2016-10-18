var assert = require('chai').assert,
    GedcomX = require('gedcomx-js');

var json = {
  "id" : "1234abc",
  "resource" : "http://familysearch.org/platform/discussions67890",
  "resourceId" : "67890",
  attribution: {
    changeMessage: 'Adding a discussion'
  }
};

describe('DiscussionReference', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.DiscussionReference(), GedcomX.DiscussionReference, 'An instance of DiscussionReference is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.DiscussionReference(), GedcomX.DiscussionReference, 'An instance of DiscussionReference is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    test(GedcomX.DiscussionReference(json));
  });
  
  it('Build', function(){
    test(GedcomX.DiscussionReference()
      .setId(json.id)
      .setResource(json.resource)
      .setResourceId(json.resourceId)
      .setAttribution(GedcomX.Attribution().setChangeMessage('Adding a discussion'))
    );
  });
  
  it('toJSON', function(){
    assert.deepEqual(GedcomX.DiscussionReference(json).toJSON(), json);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.DiscussionReference();
    var obj2 = GedcomX.DiscussionReference(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});

function test(ref){
  assert.equal(ref.getId(), json.id);
  assert.equal(ref.getResource(), json.resource);
  assert.equal(ref.getResourceId(), json.resourceId);
  assert.deepEqual(ref.getAttribution().toJSON(), json.attribution);
}