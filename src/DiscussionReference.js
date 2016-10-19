module.exports = function(GedcomX){
  
  /**
   * A reference to a discussion.
   * 
   * @class DiscussionReference
   * @extends ExtensibleData
   * @param {Object} [json]
   */ 
  var DiscussionReference = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof DiscussionReference)){
      return new DiscussionReference(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(DiscussionReference.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  DiscussionReference.prototype = Object.create(GedcomX.ExtensibleData.prototype);

  DiscussionReference._gedxClass = DiscussionReference.prototype._gedxClass = 'GedcomX.DiscussionReference';
  
  DiscussionReference.jsonProps = [
    'resource', 
    'resourceId', 
    'attribution' 
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @param {Object} obj
   * @returns {Boolean}
   */
  DiscussionReference.isInstance = function(obj){
    return GedcomX.utils.isInstance(obj, this._gedxClass);
  };
  
  /**
   * Initialize from JSON
   * 
   * @param {Object}
   * @return DiscussionReference this
   */
  DiscussionReference.prototype.init = function(json){
    
    GedcomX.ExtensibleData.prototype.init.call(this, json);
    
    if(json){
      this.setResource(json.resource); 
      this.setResourceId(json.resourceId); 
      this.setAttribution(json.attribution); 
    }
    return this;
  };
  
  /**
   * Get the resource
   * 
   * @returns {String} resource
   */
  DiscussionReference.prototype.getResource = function(){
    return this.resource;
  };
  
  /**
   * Set the resource
   * 
   * @param {String} resource
   * @returns {DiscussionReference} this
   */
  DiscussionReference.prototype.setResource = function(resource){
    this.resource = resource;
    return this;
  };        
  
  /**
   * Get the resourceId
   * 
   * @returns {String} resourceId
   */
  DiscussionReference.prototype.getResourceId = function(){
    return this.resourceId;
  };
  
  /**
   * Set the resourceId
   * 
   * @param {String} resourceId
   * @returns {DiscussionReference} this
   */
  DiscussionReference.prototype.setResourceId = function(resourceId){
    this.resourceId = resourceId;
    return this;
  };        
  
  /**
   * Get the attribution
   * 
   * @returns {Attribution} attribution
   */
  DiscussionReference.prototype.getAttribution = function(){
    return this.attribution;
  };
  
  /**
   * Set the attribution
   * 
   * @param {Attribution} attribution
   * @returns {DiscussionReference} this
   */
  DiscussionReference.prototype.setAttribution = function(attribution){
    if(attribution){
      this.attribution = GedcomX.Attribution(attribution);
    }
    return this;
  };    
  
  /**
   * Export the object as JSON
   * 
   * @return {Object} JSON object
   */
  DiscussionReference.prototype.toJSON = function(){
    return this._toJSON(GedcomX.ExtensibleData, DiscussionReference.jsonProps);
  };
  
  GedcomX.DiscussionReference = DiscussionReference;
  
};