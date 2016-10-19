module.exports = function(GedcomX){
  
  /**
   * Information about feedback for places.
   * 
   * @class FeedbackInfo
   * @extends Base
   * @param {Object} [json]
   */ 
  var FeedbackInfo = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof FeedbackInfo)){
      return new FeedbackInfo(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(FeedbackInfo.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  FeedbackInfo.prototype = Object.create(GedcomX.Base.prototype);

  FeedbackInfo._gedxClass = FeedbackInfo.prototype._gedxClass = 'GedcomX.FeedbackInfo';
  
  FeedbackInfo.jsonProps = [
    'status', 
    'resolution', 
    'details', 
    'place' 
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @memberof FeedbackInfo
   * @static
   * @param {Object} obj
   * @returns {Boolean}
   */
  FeedbackInfo.isInstance = function(obj){
    return GedcomX.utils.isInstance(obj, this._gedxClass);
  };
  
  /**
   * Initialize from JSON
   * 
   * @memberof FeedbackInfo
   * @param {Object}
   * @return FeedbackInfo this
   */
  FeedbackInfo.prototype.init = function(json){
    
    GedcomX.Base.prototype.init.call(this, json);
    
    if(json){
      this.setStatus(json.status); 
      this.setResolution(json.resolution); 
      this.setDetails(json.details); 
      this.setPlace(json.place); 
    }
    return this;
  };
  
  /**
   * Get the status
   * 
   * @memberof FeedbackInfo
   * @returns {String} status
   */
  FeedbackInfo.prototype.getStatus = function(){
    return this.status;
  };
  
  /**
   * Set the status
   * 
   * @memberof FeedbackInfo
   * @param {String} status
   * @returns {FeedbackInfo} this
   */
  FeedbackInfo.prototype.setStatus = function(status){
    this.status = status;
    return this;
  };        
  
  /**
   * Get the resolution
   * 
   * @memberof FeedbackInfo
   * @returns {String} resolution
   */
  FeedbackInfo.prototype.getResolution = function(){
    return this.resolution;
  };
  
  /**
   * Set the resolution
   * 
   * @memberof FeedbackInfo
   * @param {String} resolution
   * @returns {FeedbackInfo} this
   */
  FeedbackInfo.prototype.setResolution = function(resolution){
    this.resolution = resolution;
    return this;
  };        
  
  /**
   * Get the details
   * 
   * @memberof FeedbackInfo
   * @returns {String} details
   */
  FeedbackInfo.prototype.getDetails = function(){
    return this.details;
  };
  
  /**
   * Set the details
   * 
   * @memberof FeedbackInfo
   * @param {String} details
   * @returns {FeedbackInfo} this
   */
  FeedbackInfo.prototype.setDetails = function(details){
    this.details = details;
    return this;
  };        
  
  /**
   * Get the place
   * 
   * @memberof FeedbackInfo
   * @returns {ResourceReference} place
   */
  FeedbackInfo.prototype.getPlace = function(){
    return this.place;
  };
  
  /**
   * Set the place
   * 
   * @memberof FeedbackInfo
   * @param {ResourceReference} place
   * @returns {FeedbackInfo} this
   */
  FeedbackInfo.prototype.setPlace = function(place){
    if(place){
      this.place = GedcomX.ResourceReference(place);
    }
    return this;
  };    
  
  /**
   * Export the object as JSON
   * 
   * @memberof FeedbackInfo
   * @return {Object} JSON object
   */
  FeedbackInfo.prototype.toJSON = function(){
    return this._toJSON(GedcomX.Base, FeedbackInfo.jsonProps);
  };
  
  GedcomX.FeedbackInfo = FeedbackInfo;
  
};