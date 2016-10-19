module.exports = function(GedcomX){
  
  /**
   * @class
   * @extends Base
   * @param {Object} [json]
   */ 
  var MergeAnalysis = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof MergeAnalysis)){
      return new MergeAnalysis(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(MergeAnalysis.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  MergeAnalysis.prototype = Object.create(GedcomX.Base.prototype);

  MergeAnalysis._gedxClass = MergeAnalysis.prototype._gedxClass = 'GedcomX.MergeAnalysis';
  
  MergeAnalysis.jsonProps = [
    'survivorResources', 
    'duplicateResources', 
    'conflictingResources', 
    'survivor', 
    'duplicate' 
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @param {Object} obj
   * @returns {Boolean}
   */
  MergeAnalysis.isInstance = function(obj){
    return GedcomX.utils.isInstance(obj, this._gedxClass);
  };
  
  /**
   * Initialize from JSON
   * 
   * @param {Object}
   * @return MergeAnalysis this
   */
  MergeAnalysis.prototype.init = function(json){
    
    GedcomX.Base.prototype.init.call(this, json);
    
    if(json){
      this.setSurvivorResources(json.survivorResources); 
      this.setDuplicateResources(json.duplicateResources); 
      this.setConflictingResources(json.conflictingResources); 
      this.setSurvivor(json.survivor); 
      this.setDuplicate(json.duplicate); 
    }
    return this;
  };
  
  /**
   * Get the survivorResources
   * 
   * @return {ResourceReference[]}
   */
  MergeAnalysis.prototype.getSurvivorResources = function(){
    return this.survivorResources || [];
  };
  
  /**
   * Set the survivorResources
   * 
   * @param {ResourceReference[]} survivorResources
   * @returns {MergeAnalysis} this
   */
  MergeAnalysis.prototype.setSurvivorResources = function(survivorResources){
    return this._setArray(survivorResources, 'survivorResources', 'addSurvivorResource');
  };
  
  /**
   * Add a survivorResource
   * 
   * @param {ResourceReference} survivorResource
   * @returns {MergeAnalysis} this
   */
  MergeAnalysis.prototype.addSurvivorResource = function(survivorResource){
    return this._arrayPush(survivorResource, 'survivorResources', GedcomX.ResourceReference);
  };    
  
  /**
   * Get the duplicateResources
   * 
   * @return {ResourceReference[]}
   */
  MergeAnalysis.prototype.getDuplicateResources = function(){
    return this.duplicateResources || [];
  };
  
  /**
   * Set the duplicateResources
   * 
   * @param {ResourceReference[]} duplicateResources
   * @returns {MergeAnalysis} this
   */
  MergeAnalysis.prototype.setDuplicateResources = function(duplicateResources){
    return this._setArray(duplicateResources, 'duplicateResources', 'addDuplicateResource');
  };
  
  /**
   * Add a duplicateResource
   * 
   * @param {ResourceReference} duplicateResource
   * @returns {MergeAnalysis} this
   */
  MergeAnalysis.prototype.addDuplicateResource = function(duplicateResource){
    return this._arrayPush(duplicateResource, 'duplicateResources', GedcomX.ResourceReference);
  };    
  
  /**
   * Get the conflictingResources
   * 
   * @return {MergeConflict[]}
   */
  MergeAnalysis.prototype.getConflictingResources = function(){
    return this.conflictingResources || [];
  };
  
  /**
   * Set the conflictingResources
   * 
   * @param {MergeConflict[]} conflictingResources
   * @returns {MergeAnalysis} this
   */
  MergeAnalysis.prototype.setConflictingResources = function(conflictingResources){
    return this._setArray(conflictingResources, 'conflictingResources', 'addConflictingResource');
  };
  
  /**
   * Add a conflictingResource
   * 
   * @param {MergeConflict} conflictingResource
   * @returns {MergeAnalysis} this
   */
  MergeAnalysis.prototype.addConflictingResource = function(conflictingResource){
    return this._arrayPush(conflictingResource, 'conflictingResources', GedcomX.MergeConflict);
  };    
  
  /**
   * Get the survivor
   * 
   * @returns {ResourceReference} survivor
   */
  MergeAnalysis.prototype.getSurvivor = function(){
    return this.survivor;
  };
  
  /**
   * Set the survivor
   * 
   * @param {ResourceReference} survivor
   * @returns {MergeAnalysis} this
   */
  MergeAnalysis.prototype.setSurvivor = function(survivor){
    if(survivor){
      this.survivor = GedcomX.ResourceReference(survivor);
    }
    return this;
  };    
  
  /**
   * Get the duplicate
   * 
   * @returns {ResourceReference} duplicate
   */
  MergeAnalysis.prototype.getDuplicate = function(){
    return this.duplicate;
  };
  
  /**
   * Set the duplicate
   * 
   * @param {ResourceReference} duplicate
   * @returns {MergeAnalysis} this
   */
  MergeAnalysis.prototype.setDuplicate = function(duplicate){
    if(duplicate){
      this.duplicate = GedcomX.ResourceReference(duplicate);
    }
    return this;
  };    
  
  /**
   * Export the object as JSON
   * 
   * @return {Object} JSON object
   */
  MergeAnalysis.prototype.toJSON = function(){
    return this._toJSON(GedcomX.Base, MergeAnalysis.jsonProps);
  };
  
  GedcomX.MergeAnalysis = MergeAnalysis;
  
};