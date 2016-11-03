module.exports = function(GedcomX){
  
  /**
   * A list of errors.
   * 
   * @class Errors
   * @extends Base
   * @param {Object} [json]
   */ 
  var Errors = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof Errors)){
      return new Errors(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(Errors.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  Errors.prototype = Object.create(GedcomX.Base.prototype);

  Errors._gedxClass = Errors.prototype._gedxClass = 'GedcomX.Errors';
  
  Errors.jsonProps = [
    'errors'
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @memberof Errors
   * @static
   * @param {Object} obj
   * @returns {Boolean}
   */
  Errors.isInstance = function(obj){
    return GedcomX.utils.isInstance(obj, this._gedxClass);
  };
  
  /**
   * Initialize from JSON
   * 
   * @memberof Errors
   * @param {Object}
   * @return Errors this
   */
  Errors.prototype.init = function(json){
    
    GedcomX.Base.prototype.init.call(this, json);
    
    if(json){
      this.setErrors(json.errors); 
    }
    return this;
  };
  
  /**
   * Get the errors
   * 
   * @memberof Errors
   * @return {Error[]}
   */
  Errors.prototype.getErrors = function(){
    return this.errors || [];
  };
  
  /**
   * Set the errors
   * 
   * @memberof Errors
   * @param {Error[]} errors
   * @returns {Errors} this
   */
  Errors.prototype.setErrors = function(errors){
    return this._setArray(errors, 'errors', 'addError');
  };
  
  /**
   * Add a errors
   * 
   * @memberof Errors
   * @param {Error} error
   * @returns {Errors} this
   */
  Errors.prototype.addError = function(error){
    return this._arrayPush(error, 'errors', GedcomX.Error);
  };
  
  /**
   * Export the object as JSON
   * 
   * @memberof Errors
   * @return {Object} JSON object
   */
  Errors.prototype.toJSON = function(){
    return this._toJSON(GedcomX.Base, Errors.jsonProps);
  };
  
  GedcomX.Errors = Errors;
  
};