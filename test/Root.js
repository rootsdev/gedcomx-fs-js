var assert = require('chai').assert,
    GedcomX = require('gedcomx-js');

describe('Root GedcomX property extensions', function(){
  
  describe('features', function(){
    
    var json = {
      features: [
        {
          "name" : "consolidate-redundant-resources",
          "description" : "Resources that have been made redundant will be consolidated by returning a 301 (redirect) to the appropriate resources. These resources include: Person With Relationships, Spouse Relationships, Child Relationships, Parent Relationships, Source References, Discussion References, and Memory References.",
          "enabled" : false,
          "activationDate" : 1480982400000
        }  
      ]
    };
  
    it('Create with JSON', function(){
      test(GedcomX(json));
    });
    
    it('Build', function(){
      test(GedcomX().addFeature(
        GedcomX.FeatureSet()
          .setName(json.features[0].name)
          .setDescription(json.features[0].description)
          .setEnabled(json.features[0].enabled)
          .setActivationDate(json.features[0].activationDate)
      ));
    });
    
    it('toJSON', function(){
      assert.deepEqual(GedcomX(json).toJSON(), json);
    });

    function test(gedx){
      assert.equal(gedx.getFeatures().length, 1);
      var feature = gedx.getFeatures()[0];
      assert.equal(feature.getName(), json.features[0].name);
      assert.equal(feature.getDescription(), json.features[0].description);
      assert.equal(feature.getEnabled(), json.features[0].enabled);
      assert.equal(feature.getActivationDate().getTime(), json.features[0].activationDate);
    }
    
  });
  
  describe('childAndParentRelationships', function(){
    
    var json = {
      childAndParentsRelationships: [
        {
          "id" : "PPP0-PP0",
          "father" : {
            "resource" : "#PPP0-MP1",
            "resourceId" : "PPP0-MP1"
          },
          "child" : {
            "resource" : "https://familysearch.org/platform/tree/persons/PPP0-PP3",
            "resourceId" : "PPP0-PP3"
          },
          "fatherFacts" : [ {
            "type" : "http://gedcomx.org/AdoptiveParent"
          } ]
        }
      ]
    };
  
    it('Create with JSON', function(){
      test(GedcomX(json));
    });
    
    it('Build', function(){
      test(GedcomX().addChildAndParentsRelationship(
        GedcomX.ChildAndParentsRelationship()
          .setId(json.childAndParentsRelationships[0].id)
          .setFather(json.childAndParentsRelationships[0].father)
          .setChild(json.childAndParentsRelationships[0].child)
          .setFatherFacts(json.childAndParentsRelationships[0].fatherFacts)
      ));
    });
    
    it('toJSON', function(){
      assert.deepEqual(GedcomX(json).toJSON(), json);
    });
    
    function test(gedx){
      assert.equal(gedx.getChildAndParentsRelationships().length, 1);
      var capr = gedx.getChildAndParentsRelationships()[0];
      assert.equal(capr.getId(), json.childAndParentsRelationships[0].id);
      assert.deepEqual(capr.getFather().toJSON(), json.childAndParentsRelationships[0].father);
      assert.deepEqual(capr.getChild().toJSON(), json.childAndParentsRelationships[0].child);
      assert.deepEqual(capr.getFatherFacts()[0].toJSON(), json.childAndParentsRelationships[0].fatherFacts[0]);
    }
    
  });
  
});