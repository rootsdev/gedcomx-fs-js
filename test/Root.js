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
  
  describe('discussions', function(){
    
    var json = {
      "discussions" : [ {
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
      } ]
    };
  
    it('Create with JSON', function(){
      test(GedcomX(json));
    });
    
    it('Build', function(){
      test(GedcomX().addDiscussion(
        GedcomX.Discussion()
          .setId(json.discussions[0].id)
          .setTitle(json.discussions[0].title)
          .setDetails(json.discussions[0].details)
          .setContributor(json.discussions[0].contributor)
          .setCreated(json.discussions[0].created)
          .setModified(json.discussions[0].modified)
          .setNumberOfComments(json.discussions[0].numberOfComments)
      ));
    });
    
    it('toJSON', function(){
      assert.deepEqual(GedcomX(json).toJSON(), json);
    });

    function test(gedx){
      assert.equal(gedx.getDiscussions().length, 1);
      var discussion = gedx.getDiscussions()[0];
      assert.equal(discussion.getId(), json.discussions[0].id);
      assert.equal(discussion.getTitle(), json.discussions[0].title);
      assert.equal(discussion.getDetails(), json.discussions[0].details);
      assert.equal(discussion.getCreated().getTime(), json.discussions[0].created);
      assert.equal(discussion.getModified().getTime(), json.discussions[0].modified);
      assert.deepEqual(discussion.getContributor().toJSON(), json.discussions[0].contributor);
      assert.equal(discussion.getNumberOfComments(), json.discussions[0].numberOfComments);
    }
    
  });
  
});