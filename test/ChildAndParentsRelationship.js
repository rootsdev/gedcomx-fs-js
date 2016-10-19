var assert = require('chai').assert,
    GedcomX = require('gedcomx-js');

var json = {
  "father" : {
    "resource" : "father-resource"
  },
  "mother" : {
    "resource" : "mother-resource"
  },
  "child" : {
    "resource" : "child-resource"
  },
  fatherFacts: [
    {
      type: 'http://gedcomx.org/BiologicalParent'
    }  
  ],
  motherFacts: [
    {
      type: 'http://gedcomx.org/FosterParent'
    }  
  ]
};

describe('ChildAndParentsRelationship', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.ChildAndParentsRelationship(), GedcomX.ChildAndParentsRelationship, 'An instance of ChildAndParentsRelationship is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.ChildAndParentsRelationship(), GedcomX.ChildAndParentsRelationship, 'An instance of ChildAndParentsRelationship is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    test(GedcomX.ChildAndParentsRelationship(json));
  });
  
  it('Build', function(){
    test(GedcomX.ChildAndParentsRelationship()
      .setFather(json.father)
      .setMother(json.mother)
      .setChild(json.child)
      .addFatherFact(GedcomX.Fact().setType('http://gedcomx.org/BiologicalParent'))
      .addMotherFact(GedcomX.Fact().setType('http://gedcomx.org/FosterParent'))
    );
  });
  
  it('toJSON', function(){
    assert.deepEqual(GedcomX.ChildAndParentsRelationship(json).toJSON(), json);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.ChildAndParentsRelationship();
    var obj2 = GedcomX.ChildAndParentsRelationship(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});

function test(capr){
  assert.deepEqual(capr.getFather().toJSON(), json.father);
  assert.deepEqual(capr.getMother().toJSON(), json.mother);
  assert.deepEqual(capr.getChild().toJSON(), json.child);
  assert.equal(capr.getFatherFacts().length, 1);
  assert.equal(capr.getFatherFacts()[0].getType(), 'http://gedcomx.org/BiologicalParent');
  assert.equal(capr.getMotherFacts().length, 1);
  assert.equal(capr.getMotherFacts()[0].getType(), 'http://gedcomx.org/FosterParent');
}