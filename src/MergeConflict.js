module.exports = function(GedcomX){
  
  /**
   * @class MergeConflict
   * @extends Base
   * @param {Object} [json]
   */ 
  var MergeConflict = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof MergeConflict)){
      return new MergeConflict(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(MergeConflict.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  MergeConflict.prototype = Object.create(GedcomX.Base.prototype);

  MergeConflict._gedxClass = MergeConflict.prototype._gedxClass = 'GedcomX.MergeConflict';
  
  MergeConflict.jsonProps = [
    'survivorResource', 
    'duplicateResource' 
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @param {Object} obj
   * @returns {Boolean}
   */
  MergeConflict.isInstance = function(obj){
    return GedcomX.utils.isInstance(obj, this._gedxClass);
  };
  
  /**
   * Initialize from JSON
   * 
   * @param {Object}
   * @return MergeConflict this
   */
  MergeConflict.prototype.init = function(json){
    
    GedcomX.Base.prototype.init.call(this, json);
    
    if(json){
      this.setSurvivorResource(json.survivorResource); 
      this.setDuplicateResource(json.duplicateResource); 
    }
    return this;
  };
  
  /**
   * Get the survivorResource
   * 
   * @returns {ResourceReference} survivorResource
   */
  MergeConflict.prototype.getSurvivorResource = function(){
    return this.survivorResource;
  };
  
  /**
   * Set the survivorResource
   * 
   * @param {ResourceReference} survivorResource
   * @returns {MergeConflict} this
   */
  MergeConflict.prototype.setSurvivorResource = function(survivorResource){
    if(survivorResource){
      this.survivorResource = GedcomX.ResourceReference(survivorResource);
    }
    return this;
  };    
  
  /**
   * Get the duplicateResource
   * 
   * @returns {ResourceReference} duplicateResource
   */
  MergeConflict.prototype.getDuplicateResource = function(){
    return this.duplicateResource;
  };
  
  /**
   * Set the duplicateResource
   * 
   * @param {ResourceReference} duplicateResource
   * @returns {MergeConflict} this
   */
  MergeConflict.prototype.setDuplicateResource = function(duplicateResource){
    if(duplicateResource){
      this.duplicateResource = GedcomX.ResourceReference(duplicateResource);
    }
    return this;
  };    
  
  /**
   * Export the object as JSON
   * 
   * @return {Object} JSON object
   */
  MergeConflict.prototype.toJSON = function(){
    return this._toJSON(GedcomX.Base, MergeConflict.jsonProps);
  };
  
  GedcomX.MergeConflict = MergeConflict;
  
};