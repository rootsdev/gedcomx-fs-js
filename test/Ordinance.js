var assert = require('chai').assert,
    GedcomX = require('gedcomx-js');

var json = {
  "living": false,
  "type" : "http://lds.org/Baptism",
  "status" : "http://familysearch.org/v1/Completed",
  "date" : {
    "formal" : "+2011-12-21"
  },
  "templeCode" : "NZEAL",
  "spouse" : {
    "resource" : "https://familysearch.org/platform/tree/persons/LCXV-DST",
  },
  "father" : {
    "resource" : "https://familysearch.org/platform/tree/persons/LDJP-635",
  },
  "mother" : {
    "resource" : "https://familysearch.org/platform/tree/persons/LDJP-6WB",
  },
  "assignee": {
    "resource": "http://lds.org"
  }
};

describe('Ordinance', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.Ordinance(), GedcomX.Ordinance, 'An instance of Ordinance is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.Ordinance(), GedcomX.Ordinance, 'An instance of Ordinance is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    test(GedcomX.Ordinance(json));
  });
  
  it('Build', function(){
    test(GedcomX.Ordinance()
      .setLiving(json.living)
      .setType(json.type)
      .setStatus(json.status)
      .setDate(json.date)
      .setTempleCode(json.templeCode)
      .setSpouse(json.spouse)
      .setFather(json.father)
      .setMother(json.mother)
      .setAssignee(json.assignee)
    );
  });
  
  it('toJSON', function(){
    assert.deepEqual(GedcomX.Ordinance(json).toJSON(), json);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.Ordinance();
    var obj2 = GedcomX.Ordinance(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});

function test(ordinance){
  assert.equal(ordinance.getLiving(), json.living);
  assert.equal(ordinance.getType(), json.type);
  assert.equal(ordinance.getStatus(), json.status);
  assert.equal(ordinance.getDate().getFormal(), json.date.formal);
  assert.equal(ordinance.getTempleCode(), json.templeCode);
  assert.equal(ordinance.getSpouse().getResource(), json.spouse.resource);
  assert.equal(ordinance.getFather().getResource(), json.father.resource);
  assert.equal(ordinance.getMother().getResource(), json.mother.resource);
  assert.equal(ordinance.getAssignee().getResource(), json.assignee.resource);
}