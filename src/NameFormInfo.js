module.exports = function(GedcomX){
  
  /**
   * Extra information about a name form.
   * 
   * @class NameFormInfo
   * @extends Base
   * @param {Object} [json]
   */ 
  var NameFormInfo = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof NameFormInfo)){
      return new NameFormInfo(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(NameFormInfo.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  NameFormInfo.prototype = Object.create(GedcomX.Base.prototype);

  NameFormInfo._gedxClass = NameFormInfo.prototype._gedxClass = 'GedcomX.NameFormInfo';
  
  NameFormInfo.jsonProps = [
    'order' 
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @memberof NameFormInfo
   * @static
   * @param {Object} obj
   * @returns {Boolean}
   */
  NameFormInfo.isInstance = function(obj){
    return GedcomX.utils.isInstance(obj, this._gedxClass);
  };
  
  /**
   * Initialize from JSON
   * 
   * @memberof NameFormInfo
   * @param {Object}
   * @return NameFormInfo this
   */
  NameFormInfo.prototype.init = function(json){
    
    GedcomX.Base.prototype.init.call(this, json);
    
    if(json){
      this.setOrder(json.order); 
    }
    return this;
  };
  
  /**
   * Get the order
   * 
   * @memberof NameFormInfo
   * @returns {String} order
   */
  NameFormInfo.prototype.getOrder = function(){
    return this.order;
  };
  
  /**
   * Set the order
   * 
   * @memberof NameFormInfo
   * @param {String} order
   * @returns {NameFormInfo} this
   */
  NameFormInfo.prototype.setOrder = function(order){
    this.order = order;
    return this;
  };        
  
  /**
   * Export the object as JSON
   * 
   * @memberof NameFormInfo
   * @return {Object} JSON object
   */
  NameFormInfo.prototype.toJSON = function(){
    return this._toJSON(GedcomX.Base, NameFormInfo.jsonProps);
  };
  
  GedcomX.NameFormInfo = NameFormInfo;
  
};