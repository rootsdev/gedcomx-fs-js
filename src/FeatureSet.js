module.exports = function(GedcomX){
  
  /**
   * A description of a FamilySearch feature.
   * 
   * @class FeatureSet
   * @extends Base
   * @param {Object} [json]
   */ 
  var FeatureSet = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof FeatureSet)){
      return new FeatureSet(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(FeatureSet.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  FeatureSet.prototype = Object.create(GedcomX.Base.prototype);

  FeatureSet._gedxClass = FeatureSet.prototype._gedxClass = 'GedcomX.FeatureSet';
  
  FeatureSet.jsonProps = [
    'name', 
    'description', 
    'enabled', 
    'activationDate' 
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @memberof FeatureSet
   * @static
   * @param {Object} obj
   * @returns {Boolean}
   */
  FeatureSet.isInstance = function(obj){
    return GedcomX.utils.isInstance(obj, this._gedxClass);
  };
  
  /**
   * Initialize from JSON
   * 
   * @memberof FeatureSet
   * @param {Object}
   * @return FeatureSet this
   */
  FeatureSet.prototype.init = function(json){
    
    GedcomX.Base.prototype.init.call(this, json);
    
    if(json){
      this.setName(json.name); 
      this.setDescription(json.description); 
      this.setEnabled(json.enabled); 
      this.setActivationDate(json.activationDate); 
    }
    return this;
  };
  
  /**
   * Get the name
   * 
   * @memberof FeatureSet
   * @returns {String} name
   */
  FeatureSet.prototype.getName = function(){
    return this.name;
  };
  
  /**
   * Set the name
   * 
   * @memberof FeatureSet
   * @param {String} name
   * @returns {FeatureSet} this
   */
  FeatureSet.prototype.setName = function(name){
    this.name = name;
    return this;
  };        
  
  /**
   * Get the description
   * 
   * @memberof FeatureSet
   * @returns {String} description
   */
  FeatureSet.prototype.getDescription = function(){
    return this.description;
  };
  
  /**
   * Set the description
   * 
   * @memberof FeatureSet
   * @param {String} description
   * @returns {FeatureSet} this
   */
  FeatureSet.prototype.setDescription = function(description){
    this.description = description;
    return this;
  };        
  
  /**
   * Get the enabled flag
   * 
   * @memberof FeatureSet
   * @returns {Boolean} enabled
   */
  FeatureSet.prototype.getEnabled = function(){
    return this.enabled;
  };
  
  /**
   * Set the enabled
   * 
   * @memberof FeatureSet
   * @param {Boolean} enabled
   * @returns {FeatureSet} this
   */
  FeatureSet.prototype.setEnabled = function(enabled){
    this.enabled = enabled;
    return this;
  };        
  
  /**
   * Get the activationDate
   * 
   * @memberof FeatureSet
   * @returns {Date} activationDate
   */
  FeatureSet.prototype.getActivationDate = function(){
    return this.activationDate;
  };
  
  /**
   * Set the activationDate
   * 
   * @memberof FeatureSet
   * @param {Date|Integer} activationDate
   * @returns {FeatureSet} this
   */
  FeatureSet.prototype.setActivationDate = function(activationDate){
    if(activationDate){
      this.activationDate = new Date(activationDate);
    }
    return this;
  };        
  
  /**
   * Export the object as JSON
   * 
   * @memberof FeatureSet
   * @return {Object} JSON object
   */
  FeatureSet.prototype.toJSON = function(){
    return this._toJSON(GedcomX.Base, FeatureSet.jsonProps);
  };
  
  GedcomX.FeatureSet = FeatureSet;
  
};