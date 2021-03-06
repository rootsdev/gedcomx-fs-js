module.exports = function(GedcomX){
  
  /**
   * @class MatchInfo
   * @extends Base
   * @param {Object} [json]
   */ 
  var MatchInfo = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof MatchInfo)){
      return new MatchInfo(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(MatchInfo.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  MatchInfo.prototype = Object.create(GedcomX.Base.prototype);

  MatchInfo._gedxClass = MatchInfo.prototype._gedxClass = 'GedcomX.MatchInfo';
  
  MatchInfo.jsonProps = [
    'status', 
    'collection' 
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @memberof MatchInfo
   * @static
   * @param {Object} obj
   * @returns {Boolean}
   */
  MatchInfo.isInstance = function(obj){
    return GedcomX.utils.isInstance(obj, this._gedxClass);
  };
  
  /**
   * Initialize from JSON
   * 
   * @memberof MatchInfo
   * @param {Object}
   * @return MatchInfo this
   */
  MatchInfo.prototype.init = function(json){
    
    GedcomX.Base.prototype.init.call(this, json);
    
    if(json){
      this.setStatus(json.status); 
      this.setCollection(json.collection); 
    }
    return this;
  };
  
  /**
   * Get the status
   * 
   * @memberof MatchInfo
   * @returns {String} status
   */
  MatchInfo.prototype.getStatus = function(){
    return this.status;
  };
  
  /**
   * Set the status
   * 
   * @memberof MatchInfo
   * @param {String} status
   * @returns {MatchInfo} this
   */
  MatchInfo.prototype.setStatus = function(status){
    this.status = status;
    return this;
  };        
  
  /**
   * Get the collection
   * 
   * @memberof MatchInfo
   * @returns {String} collection
   */
  MatchInfo.prototype.getCollection = function(){
    return this.collection;
  };
  
  /**
   * Set the collection
   * 
   * @memberof MatchInfo
   * @param {String} collection
   * @returns {MatchInfo} this
   */
  MatchInfo.prototype.setCollection = function(collection){
    this.collection = collection;
    return this;
  };        
  
  /**
   * Export the object as JSON
   * 
   * @memberof MatchInfo
   * @return {Object} JSON object
   */
  MatchInfo.prototype.toJSON = function(){
    return this._toJSON(GedcomX.Base, MatchInfo.jsonProps);
  };
  
  GedcomX.MatchInfo = MatchInfo;
  
};