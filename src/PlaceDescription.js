/**
 * Extensions to PlaceDescription
 */
module.exports = function(GedcomX){
  
  // Extend serialization properties
  GedcomX.PlaceDescription.jsonProps.push('feedbackInfo');
  
  // Override init()
  var oldInit = GedcomX.PlaceDescription.prototype.init;
  GedcomX.PlaceDescription.prototype.init = function(json){
    oldInit.call(this, json);
    if(json){
      this.setFeedbackInfo(json.feedbackInfo);
    }
  };
  
  /**
   * Set the feedback info
   * 
   * @function setFeedbackInfo
   * @instance
   * @memberof PlaceDescription
   * @param {FeedbackInfo[]} feedbackInfo
   * @return {PlaceDescription} this
   */
  GedcomX.PlaceDescription.prototype.setFeedbackInfo = function(feedbackInfo){
    return this._setArray(feedbackInfo, 'feedbackInfo', 'addFeedbackInfo');
  };
  
  /**
   * Add a feedback info
   * 
   * @function addFeedbackInfo
   * @instance
   * @memberof PlaceDescription
   * @param {FeedbackInfo} feedbackInfo
   * @return {PlaceDescription} this
   */
  GedcomX.PlaceDescription.prototype.addFeedbackInfo = function(feedbackInfo){
    return this._arrayPush(feedbackInfo, 'feedbackInfo', GedcomX.FeedbackInfo);
  };
  
  /**
   * Get the feedback info
   * 
   * @function getFeedbackInfo
   * @instance
   * @memberof PlaceDescription
   * @return {FeedbackInfo[]} feedbackInfo
   */
  GedcomX.PlaceDescription.prototype.getFeedbackInfo = function(){
    return this.feedbackInfo || [];
  };
  
};