module.exports = function(GedcomX){
  
  /**
   * @class Merge
   * @extends Base
   * @param {Object} [json]
   */ 
  var Merge = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof Merge)){
      return new Merge(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(Merge.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  Merge.prototype = Object.create(GedcomX.Base.prototype);

  Merge._gedxClass = Merge.prototype._gedxClass = 'GedcomX.Merge';
  
  Merge.jsonProps = [
    'resourcesToDelete', 
    'resourcesToCopy' 
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @param {Object} obj
   * @returns {Boolean}
   */
  Merge.isInstance = function(obj){
    return GedcomX.utils.isInstance(obj, this._gedxClass);
  };
  
  /**
   * Initialize from JSON
   * 
   * @param {Object}
   * @return Merge this
   */
  Merge.prototype.init = function(json){
    
    GedcomX.Base.prototype.init.call(this, json);
    
    if(json){
      this.setResourcesToDelete(json.resourcesToDelete); 
      this.setResourcesToCopy(json.resourcesToCopy); 
    }
    return this;
  };
  
  /**
   * Get the resources that will be deleted
   * 
   * @return {ResourceReference[]}
   */
  Merge.prototype.getResourcesToDelete = function(){
    return this.resourcesToDelete || [];
  };
  
  /**
   * Set the resources that will be deleted
   * 
   * @param {ResourceReference[]} resourcesToDelete
   * @returns {Merge} this
   */
  Merge.prototype.setResourcesToDelete = function(resourcesToDelete){
    return this._setArray(resourcesToDelete, 'resourcesToDelete', 'addResourceToDelete');
  };
  
  /**
   * Add a resources that will be deleted
   * 
   * @param {ResourceReference} resourcesToDelete
   * @returns {Merge} this
   */
  Merge.prototype.addResourceToDelete = function(resourceToDelete){
    return this._arrayPush(resourceToDelete, 'resourcesToDelete', GedcomX.ResourceReference);
  };    
  
  /**
   * Get the resources that will be copied
   * 
   * @return {ResourceReference[]}
   */
  Merge.prototype.getResourcesToCopy = function(){
    return this.resourcesToCopy || [];
  };
  
  /**
   * Set the resources that will be copied
   * 
   * @param {ResourceReference[]} resourcesToCopy
   * @returns {Merge} this
   */
  Merge.prototype.setResourcesToCopy = function(resourcesToCopy){
    return this._setArray(resourcesToCopy, 'resourcesToCopy', 'addResourceToCopy');
  };
  
  /**
   * Add a resource that will be copied
   * 
   * @param {ResourceReference} resourceToCopy
   * @returns {Merge} this
   */
  Merge.prototype.addResourceToCopy = function(resourceToCopy){
    return this._arrayPush(resourceToCopy, 'resourcesToCopy', GedcomX.ResourceReference);
  };    
  
  /**
   * Export the object as JSON
   * 
   * @return {Object} JSON object
   */
  Merge.prototype.toJSON = function(){
    return this._toJSON(GedcomX.Base, Merge.jsonProps);
  };
  
  GedcomX.Merge = Merge;
  
};