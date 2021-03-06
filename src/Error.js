module.exports = function(GedcomX){
  
  /**
   * A common representation of an error on the FamilySearch platform.
   * 
   * @class Error
   * @extends Base
   * @param {Object} [json]
   */ 
  var Error = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof Error)){
      return new Error(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(Error.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  Error.prototype = Object.create(GedcomX.Base.prototype);

  Error._gedxClass = Error.prototype._gedxClass = 'GedcomX.Error';
  
  Error.jsonProps = [
    'code', 
    'label', 
    'message', 
    'stacktrace' 
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @memberof Error
   * @static
   * @param {Object} obj
   * @returns {Boolean}
   */
  Error.isInstance = function(obj){
    return GedcomX.utils.isInstance(obj, this._gedxClass);
  };
  
  /**
   * Initialize from JSON
   * 
   * @memberof Error
   * @param {Object}
   * @return Error this
   */
  Error.prototype.init = function(json){
    
    GedcomX.Base.prototype.init.call(this, json);
    
    if(json){
      this.setCode(json.code); 
      this.setLabel(json.label); 
      this.setMessage(json.message); 
      this.setStacktrace(json.stacktrace); 
    }
    return this;
  };
  
  /**
   * Get the code
   * 
   * @memberof Error
   * @returns {Integer} code
   */
  Error.prototype.getCode = function(){
    return this.code;
  };
  
  /**
   * Set the code
   * 
   * @memberof Error
   * @param {Integer} code
   * @returns {Error} this
   */
  Error.prototype.setCode = function(code){
    this.code = code;
    return this;
  };        
  
  /**
   * Get the label
   * 
   * @memberof Error
   * @returns {String} label
   */
  Error.prototype.getLabel = function(){
    return this.label;
  };
  
  /**
   * Set the label
   * 
   * @memberof Error
   * @param {String} label
   * @returns {Error} this
   */
  Error.prototype.setLabel = function(label){
    this.label = label;
    return this;
  };        
  
  /**
   * Get the message
   * 
   * @memberof Error
   * @returns {String} message
   */
  Error.prototype.getMessage = function(){
    return this.message;
  };
  
  /**
   * Set the message
   * 
   * @memberof Error
   * @param {String} message
   * @returns {Error} this
   */
  Error.prototype.setMessage = function(message){
    this.message = message;
    return this;
  };        
  
  /**
   * Get the stacktrace
   * 
   * @memberof Error
   * @returns {String} stacktrace
   */
  Error.prototype.getStacktrace = function(){
    return this.stacktrace;
  };
  
  /**
   * Set the stacktrace
   * 
   * @memberof Error
   * @param {String} stacktrace
   * @returns {Error} this
   */
  Error.prototype.setStacktrace = function(stacktrace){
    this.stacktrace = stacktrace;
    return this;
  };        
  
  /**
   * Export the object as JSON
   * 
   * @memberof Error
   * @return {Object} JSON object
   */
  Error.prototype.toJSON = function(){
    return this._toJSON(GedcomX.Base, Error.jsonProps);
  };
  
  GedcomX.Error = Error;
  
};