var assert = require('chai').assert,
    GedcomX = require('gedcomx-js');

var json = {
  "id" : "dis-MMMM-MMM",
  "title" : "1900 US Census, Ethel Hollivet",
  "details" : "Ethel Hollivet (line 75) with husband Albert Hollivet (line 74); also in the dwelling: step-father Joseph E Watkins (line 72), mother Lina Watkins (line 73), and grandmother -- Lina's mother -- Mary Sasnett (line 76).  ",
  "contributor" : {
    "resource" : "https://familysearch.org/platform/users/agents/JNYR-KJP",
    "resourceId" : "JNYR-KJP"
  },
  "created" : 1475597268000,
  "modified" : 1475597268000,
  "numberOfComments" : 2
};

describe('Discussion', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.Discussion(), GedcomX.Discussion, 'An instance of Discussion is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.Discussion(), GedcomX.Discussion, 'An instance of Discussion is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    test(GedcomX.Discussion(json));
  });
  
  it('Build', function(){
    test(GedcomX.Discussion()
      .setId(json.id)
      .setTitle(json.title)
      .setDetails(json.details)
      .setContributor(json.contributor)
      .setCreated(json.created)
      .setModified(json.modified)
      .setNumberOfComments(json.numberOfComments)
    );
  });
  
  it('toJSON', function(){
    assert.deepEqual(GedcomX.Discussion(json).toJSON(), json);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.Discussion();
    var obj2 = GedcomX.Discussion(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});

function test(discussion){
  assert.equal(discussion.getId(), json.id);
  assert.equal(discussion.getTitle(), json.title);
  assert.equal(discussion.getDetails(), json.details);
  assert.equal(discussion.getCreated().getTime(), json.created);
  assert.equal(discussion.getModified().getTime(), json.modified);
  assert.deepEqual(discussion.getContributor().toJSON(), json.contributor);
  assert.equal(discussion.getNumberOfComments(), json.numberOfComments);
}