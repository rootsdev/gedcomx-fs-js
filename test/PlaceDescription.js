var assert = require('chai').assert,
    GedcomX = require('gedcomx-js');

describe('PlaceDescription property extensions', function(){
  
  describe('artifactMetadata', function(){
    
    var json = {
      "feedbackInfo" : [ {
        "resolution" : "data:,Place%20Created",
        "status" : "data:,Resolved",
        "place" : {
          "resource" : "https://familysearch.org/platform/places/description/768459"
        },
        "details" : "A new place was created."
      } ]
    };
  
    it('Create with JSON', function(){
      test(GedcomX.PlaceDescription(json));
    });
    
    it('Build', function(){
      test(GedcomX.PlaceDescription()
        .addFeedbackInfo(
          GedcomX.FeedbackInfo()
          .setResolution(json.feedbackInfo[0].resolution)
          .setStatus(json.feedbackInfo[0].status)
          .setPlace(json.feedbackInfo[0].place)
          .setDetails(json.feedbackInfo[0].details)
      ));
    });
    
    it('toJSON', function(){
      assert.deepEqual(GedcomX.PlaceDescription(json).toJSON(), json);
    });

    function test(placeDescription){
      assert.equal(placeDescription.getFeedbackInfo().length, 1);
      var feedback = placeDescription.getFeedbackInfo()[0];
      assert.equal(feedback.getStatus(), json.feedbackInfo[0].status);
      assert.equal(feedback.getResolution(), json.feedbackInfo[0].resolution);
      assert.equal(feedback.getDetails(), json.feedbackInfo[0].details);
      assert.deepEqual(feedback.getPlace().toJSON(), json.feedbackInfo[0].place);
    }
    
  });
  
});