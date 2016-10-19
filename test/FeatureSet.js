var assert = require('chai').assert,
    GedcomX = require('gedcomx-js');

var json = {
  "name" : "consolidate-redundant-resources",
  "description" : "Resources that have been made redundant will be consolidated by returning a 301 (redirect) to the appropriate resources. These resources include: Person With Relationships, Spouse Relationships, Child Relationships, Parent Relationships, Source References, Discussion References, and Memory References.",
  "enabled" : false,
  "activationDate" : 1480982400000
};

describe('FeatureSet', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.FeatureSet(), GedcomX.FeatureSet, 'An instance of FeatureSet is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.FeatureSet(), GedcomX.FeatureSet, 'An instance of FeatureSet is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    test(GedcomX.FeatureSet(json));
  });
  
  it('Build', function(){
    test(GedcomX.FeatureSet()
      .setName(json.name)
      .setDescription(json.description)
      .setEnabled(json.enabled)
      .setActivationDate(json.activationDate)
    );
  });
  
  it('toJSON', function(){
    assert.deepEqual(GedcomX.FeatureSet(json).toJSON(), json);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.FeatureSet();
    var obj2 = GedcomX.FeatureSet(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});

function test(feature){
  assert.equal(feature.getName(), json.name);
  assert.equal(feature.getDescription(), json.description);
  assert.equal(feature.getEnabled(), json.enabled);
  assert.equal(feature.getActivationDate().getTime(), json.activationDate);
}