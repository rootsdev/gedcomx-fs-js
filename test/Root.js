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
  
  describe('users', function(){
    
    var json = {
      "users" : [ {
        "id" : "cis.MMM.RX9",
        "contactName" : "Pete Townsend",
        "fullName" : "Pete Townsend",
        "email" : "peter@acme.org",
        "personId" : "JNM-VRQM",
        "treeUserId" : "PXRQ-FMXT"
      } ]
    };
    
    it('Create with JSON', function(){
      test(GedcomX(json));
    });
    
    it('Build', function(){
      test(GedcomX().addUser(
        GedcomX.User()
          .setId(json.users[0].id)
          .setContactName(json.users[0].contactName)
          .setFullName(json.users[0].fullName)
          .setEmail(json.users[0].email)
          .setPersonId(json.users[0].personId)
          .setTreeUserId(json.users[0].treeUserId)
      ));
    });
    
    it('toJSON', function(){
      assert.deepEqual(GedcomX(json).toJSON(), json);
    });
    
    function test(gedx){
      assert.equal(gedx.getUsers().length, 1);
      var user = gedx.getUsers()[0];
      assert.equal(user.getId(), json.users[0].id);
      assert.equal(user.getContactName(), json.users[0].contactName);
      assert.equal(user.getFullName(), json.users[0].fullName);
      assert.equal(user.getEmail(), json.users[0].email);
      assert.equal(user.getPersonId(), json.users[0].personId);
      assert.equal(user.getTreeUserId(), json.users[0].treeUserId);
    }
    
  });
  
  describe('mergeAnalyses', function(){
    
    var json = {
      "mergeAnalyses" : [ {
        "survivorResources" : [ {
          "resource" : "https://familysearch.org/platform/tree/persons/P12-345/conclusions/YZAB"
        }, {
          "resource" : "https://familysearch.org/platform/tree/persons/P12-345/conclusions/CDEF"
        } ],
        "duplicateResources" : [ {
          "resource" : "https://familysearch.org/platform/tree/persons/P54-321/conclusions/QRST"
        }, {
          "resource" : "https://familysearch.org/platform/tree/persons/P54-321/conclusions/UVWX"
        } ],
        "conflictingResources" : [ {
          "survivorResource" : {
            "resource" : "https://familysearch.org/platform/tree/persons/P12-345/conclusions/ABCD"
          },
          "duplicateResource" : {
            "resource" : "https://familysearch.org/platform/tree/persons/P54-321/conclusions/EFGH"
          }
        } ],
        "survivor" : {
          "resource" : "https://familysearch.org/platform/tree/persons/P12-345"
        },
        "duplicate" : {
          "resource" : "https://familysearch.org/platform/tree/persons/P54-321"
        }
      } ]
    };
    
    it('Create with JSON', function(){
      test(GedcomX(json));
    });
    
    it('Build', function(){
      test(GedcomX().addMergeAnalysis(
        GedcomX.MergeAnalysis()
          .addSurvivorResource(json.mergeAnalyses[0].survivorResources[0])
          .addDuplicateResource(json.mergeAnalyses[0].duplicateResources[0])
          .addConflictingResource(json.mergeAnalyses[0].conflictingResources[0])
          .setSurvivor(json.mergeAnalyses[0].survivor)
          .setDuplicate(json.mergeAnalyses[0].duplicate)
      ));
    });
    
    it('toJSON', function(){
      assert.deepEqual(GedcomX(json).toJSON(), json);
    });
    
    function test(gedx){
      assert.equal(gedx.getMergeAnalyses().length, 1);
      var analysis = gedx.getMergeAnalyses()[0];
      assert.deepEqual(analysis.getSurvivorResources()[0].toJSON(), json.mergeAnalyses[0].survivorResources[0]);
      assert.deepEqual(analysis.getDuplicateResources()[0].toJSON(), json.mergeAnalyses[0].duplicateResources[0]);
      assert.deepEqual(analysis.getConflictingResources()[0].toJSON(), json.mergeAnalyses[0].conflictingResources[0]);
      assert.deepEqual(analysis.getSurvivor().toJSON(), json.mergeAnalyses[0].survivor);
      assert.deepEqual(analysis.getDuplicate().toJSON(), json.mergeAnalyses[0].duplicate);
    }
    
  });
  
  describe('merges', function(){
    
    var json = {
      "merges" : [ {
        "resourcesToDelete" : [ {
          "resource" : "https://familysearch.org/platform/tree/persons/P12-345/conclusions/ABCD"
        } ],
        "resourcesToCopy" : [ {
          "resource" : "https://familysearch.org/platform/tree/persons/P54-321/conclusions/IJKL"
        } ]
      } ]
    };
    
    it('Create with JSON', function(){
      test(GedcomX(json));
    });
    
    it('Build', function(){
      test(GedcomX().addMerge(
        GedcomX.Merge()
          .addResourceToDelete(json.merges[0].resourcesToDelete[0])
          .addResourceToCopy(json.merges[0].resourcesToCopy[0])
      ));
    });
    
    it('toJSON', function(){
      assert.deepEqual(GedcomX(json).toJSON(), json);
    });
    
    function test(gedx){
      assert.equal(gedx.getMerges().length, 1);
      var merge = gedx.getMerges()[0];
      assert.deepEqual(merge.getResourcesToDelete()[0].toJSON(), json.merges[0].resourcesToDelete[0]);
      assert.deepEqual(merge.getResourcesToCopy()[0].toJSON(), json.merges[0].resourcesToCopy[0]);
    }
    
  });
  
  describe('errors', function(){
  
    var json = {
      "errors" : [ {
        "code" : 401,
        "message" : "Unable to  read tf person.",
        "stacktrace" : "GET http://tf.prod.us-east-1.prod.fslocal.org/tf/person/KWC8-LKC?oneHops=none returned a response status of 401 Unauthorized:\n{\n\"401\": \"Unauthorized\"\n}"
      } ]
    };
  
    it('Create with JSON', function(){
      test(GedcomX(json));
    });
    
    it('Build', function(){
      test(GedcomX().addError(new GedcomX.Error(json.errors[0])));
    });
    
    it('toJSON', function(){
      assert.deepEqual(GedcomX(json).toJSON(), json);
    });

    function test(gedx){
      assert.equal(gedx.getErrors().length, 1);
      var error = gedx.getErrors()[0];
      assert.equal(error.getCode(), json.errors[0].code);
      assert.equal(error.getLabel(), json.errors[0].label);
      assert.equal(error.getMessage(), json.errors[0].message);
      assert.equal(error.getStacktrace(), json.errors[0].stacktrace);
    }
    
  });
  
});