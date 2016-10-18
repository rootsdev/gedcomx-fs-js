var assert = require('chai').assert,
    GedcomX = require('gedcomx-js');

var json = {
  "resolution" : "data:,Place%20Created",
  "status" : "data:,Resolved",
  "place" : {
    "resource" : "https://familysearch.org/platform/places/description/768459"
  },
  "details" : "A new place was created."
};

describe('FeedbackInfo', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.FeedbackInfo(), GedcomX.FeedbackInfo, 'An instance of FeedbackInfo is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.FeedbackInfo(), GedcomX.FeedbackInfo, 'An instance of FeedbackInfo is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    test(GedcomX.FeedbackInfo(json));
  });
  
  it('Build', function(){
    test(GedcomX.FeedbackInfo()
      .setResolution(json.resolution)
      .setStatus(json.status)
      .setPlace(json.place)
      .setDetails(json.details)
    );
  });
  
  it('toJSON', function(){
    assert.deepEqual(GedcomX.FeedbackInfo(json).toJSON(), json);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.FeedbackInfo();
    var obj2 = GedcomX.FeedbackInfo(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});

function test(feedback){
  assert.equal(feedback.getStatus(), json.status);
  assert.equal(feedback.getResolution(), json.resolution);
  assert.equal(feedback.getDetails(), json.details);
  assert.deepEqual(feedback.getPlace().toJSON(), json.place);
}