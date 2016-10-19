module.exports = function(GedcomX){
  
  /**
   * A tag in the FamilySearch system.
   * 
   * @class Tag
   * @extends Base
   * @param {Object} [json]
   */ 
  var Tag = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof Tag)){
      return new Tag(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(Tag.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  Tag.prototype = Object.create(GedcomX.Base.prototype);

  Tag._gedxClass = Tag.prototype._gedxClass = 'GedcomX.Tag';
  
  Tag.jsonProps = [
    'resource' 
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @param {Object} obj
   * @returns {Boolean}
   */
  Tag.isInstance = function(obj){
    return GedcomX.utils.isInstance(obj, this._gedxClass);
  };
  
  /**
   * Initialize from JSON
   * 
   * @param {Object}
   * @return Tag this
   */
  Tag.prototype.init = function(json){
    
    GedcomX.Base.prototype.init.call(this, json);
    
    if(json){
      this.setResource(json.resource); 
    }
    return this;
  };
  
  /**
   * Get the resource
   * 
   * @returns {String} resource
   */
  Tag.prototype.getResource = function(){
    return this.resource;
  };
  
  /**
   * Set the resource
   * 
   * @param {String} resource
   * @returns {Tag} this
   */
  Tag.prototype.setResource = function(resource){
    this.resource = resource;
    return this;
  };        
  
  /**
   * Export the object as JSON
   * 
   * @return {Object} JSON object
   */
  Tag.prototype.toJSON = function(){
    return this._toJSON(GedcomX.Base, Tag.jsonProps);
  };
  
  GedcomX.Tag = Tag;
  
};