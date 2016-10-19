module.exports = function(GedcomX){
  
  /**
   * Information about a change.
   * 
   * @class ChangeInfo
   * @extends Base
   * @param {Object} [json]
   */ 
  var ChangeInfo = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof ChangeInfo)){
      return new ChangeInfo(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(ChangeInfo.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  ChangeInfo.prototype = Object.create(GedcomX.Base.prototype);

  ChangeInfo._gedxClass = ChangeInfo.prototype._gedxClass = 'GedcomX.ChangeInfo';
  
  ChangeInfo.jsonProps = [
    'objectModifier', 
    'operation', 
    'reason', 
    'objectType', 
    'original', 
    'parent', 
    'removed', 
    'resulting' 
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @memberof ChangeInfo
   * @static
   * @param {Object} obj
   * @returns {Boolean}
   */
  ChangeInfo.isInstance = function(obj){
    return GedcomX.utils.isInstance(obj, this._gedxClass);
  };
  
  /**
   * Initialize from JSON
   * 
   * @memberof ChangeInfo
   * @param {Object}
   * @return ChangeInfo this
   */
  ChangeInfo.prototype.init = function(json){
    
    GedcomX.Base.prototype.init.call(this, json);
    
    if(json){
      this.setObjectModifier(json.objectModifier); 
      this.setOperation(json.operation); 
      this.setReason(json.reason); 
      this.setObjectType(json.objectType); 
      this.setOriginal(json.original); 
      this.setParent(json.parent); 
      this.setRemoved(json.removed); 
      this.setResulting(json.resulting); 
    }
    return this;
  };
  
  /**
   * Get the objectModifier
   * 
   * @memberof ChangeInfo
   * @returns {String} objectModifier
   */
  ChangeInfo.prototype.getObjectModifier = function(){
    return this.objectModifier;
  };
  
  /**
   * Set the objectModifier
   * 
   * @memberof ChangeInfo
   * @param {String} objectModifier
   * @returns {ChangeInfo} this
   */
  ChangeInfo.prototype.setObjectModifier = function(objectModifier){
    this.objectModifier = objectModifier;
    return this;
  };        
  
  /**
   * Get the operation
   * 
   * @memberof ChangeInfo
   * @returns {String} operation
   */
  ChangeInfo.prototype.getOperation = function(){
    return this.operation;
  };
  
  /**
   * Set the operation
   * 
   * @memberof ChangeInfo
   * @param {String} operation
   * @returns {ChangeInfo} this
   */
  ChangeInfo.prototype.setOperation = function(operation){
    this.operation = operation;
    return this;
  };        
  
  /**
   * Get the reason
   * 
   * @memberof ChangeInfo
   * @returns {String} reason
   */
  ChangeInfo.prototype.getReason = function(){
    return this.reason;
  };
  
  /**
   * Set the reason
   * 
   * @memberof ChangeInfo
   * @param {String} reason
   * @returns {ChangeInfo} this
   */
  ChangeInfo.prototype.setReason = function(reason){
    this.reason = reason;
    return this;
  };        
  
  /**
   * Get the objectType
   * 
   * @memberof ChangeInfo
   * @returns {String} objectType
   */
  ChangeInfo.prototype.getObjectType = function(){
    return this.objectType;
  };
  
  /**
   * Set the objectType
   * 
   * @memberof ChangeInfo
   * @param {String} objectType
   * @returns {ChangeInfo} this
   */
  ChangeInfo.prototype.setObjectType = function(objectType){
    this.objectType = objectType;
    return this;
  };        
  
  /**
   * Get the original
   * 
   * @memberof ChangeInfo
   * @returns {ResourceReference} original
   */
  ChangeInfo.prototype.getOriginal = function(){
    return this.original;
  };
  
  /**
   * Set the original
   * 
   * @memberof ChangeInfo
   * @param {ResourceReference} original
   * @returns {ChangeInfo} this
   */
  ChangeInfo.prototype.setOriginal = function(original){
    if(original){
      this.original = GedcomX.ResourceReference(original);
    }
    return this;
  };    
  
  /**
   * Get the parent
   * 
   * @memberof ChangeInfo
   * @returns {ResourceReference} parent
   */
  ChangeInfo.prototype.getParent = function(){
    return this.parent;
  };
  
  /**
   * Set the parent
   * 
   * @memberof ChangeInfo
   * @param {ResourceReference} parent
   * @returns {ChangeInfo} this
   */
  ChangeInfo.prototype.setParent = function(parent){
    if(parent){
      this.parent = GedcomX.ResourceReference(parent);
    }
    return this;
  };    
  
  /**
   * Get the removed
   * 
   * @memberof ChangeInfo
   * @returns {ResourceReference} removed
   */
  ChangeInfo.prototype.getRemoved = function(){
    return this.removed;
  };
  
  /**
   * Set the removed
   * 
   * @memberof ChangeInfo
   * @param {ResourceReference} removed
   * @returns {ChangeInfo} this
   */
  ChangeInfo.prototype.setRemoved = function(removed){
    if(removed){
      this.removed = GedcomX.ResourceReference(removed);
    }
    return this;
  };    
  
  /**
   * Get the resulting
   * 
   * @memberof ChangeInfo
   * @returns {ResourceReference} resulting
   */
  ChangeInfo.prototype.getResulting = function(){
    return this.resulting;
  };
  
  /**
   * Set the resulting
   * 
   * @memberof ChangeInfo
   * @param {ResourceReference} resulting
   * @returns {ChangeInfo} this
   */
  ChangeInfo.prototype.setResulting = function(resulting){
    if(resulting){
      this.resulting = GedcomX.ResourceReference(resulting);
    }
    return this;
  };    
  
  /**
   * Export the object as JSON
   * 
   * @memberof ChangeInfo
   * @return {Object} JSON object
   */
  ChangeInfo.prototype.toJSON = function(){
    return this._toJSON(GedcomX.Base, ChangeInfo.jsonProps);
  };
  
  GedcomX.ChangeInfo = ChangeInfo;
  
};