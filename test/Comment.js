var assert = require('chai').assert,
    GedcomX = require('gedcomx-js');

var json = {
  "text" : "Just a comment.",
  "contributor" : {
    "resource" : "https://familysearch.org/platform/users/agents/JNYR-KJP",
    "resourceId" : "JNYR-KJP"
  },
  "created" : 1475597267811
};

describe('Comment', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.Comment(), GedcomX.Comment, 'An instance of Comment is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.Comment(), GedcomX.Comment, 'An instance of Comment is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    test(GedcomX.Comment(json));
  });
  
  it('Build', function(){
    test(GedcomX.Comment()
      .setText(json.text)
      .setContributor(json.contributor)
      .setCreated(json.created)
    );
  });
  
  it('toJSON', function(){
    assert.deepEqual(GedcomX.Comment(json).toJSON(), json);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.Comment();
    var obj2 = GedcomX.Comment(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});

function test(comment){
  assert.equal(comment.getText(), json.text);
  assert.deepEqual(comment.getContributor().toJSON(), json.contributor);
  assert.equal(comment.getCreated().getTime(), json.created);
}