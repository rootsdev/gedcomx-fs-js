module.exports = function(GedcomX){
  
  /**
   * OAuth 2 token responses
   * 
   * @class OAuth2
   * @extends Base
   * @param {Object} [json]
   */ 
  var OAuth2 = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof OAuth2)){
      return new OAuth2(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(OAuth2.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  OAuth2.prototype = Object.create(GedcomX.Base.prototype);

  OAuth2._gedxClass = OAuth2.prototype._gedxClass = 'GedcomX.OAuth2';
  
  OAuth2.jsonProps = [
    'access_token',
    'token_type',
    'error',
    'error_description'
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @memberof OAuth2
   * @static
   * @param {Object} obj
   * @returns {Boolean}
   */
  OAuth2.isInstance = function(obj){
    return GedcomX.utils.isInstance(obj, this._gedxClass);
  };
  
  /**
   * Initialize from JSON
   * 
   * @memberof OAuth2
   * @param {Object}
   * @return OAuth2 this
   */
  OAuth2.prototype.init = function(json){
    
    GedcomX.Base.prototype.init.call(this, json);
    
    if(json){
      this.setAccessToken(json.access_token); 
      this.setTokenType(json.token_type);
      this.setError(json.error);
      this.setErrorDescription(json.error_description);
    }
    return this;
  };
  
  /**
   * Get the access token
   * 
   * @memberof OAuth2
   * @returns {String} access_token
   */
  OAuth2.prototype.getAccessToken = function(){
    return this.access_token;
  };
  
  /**
   * Set the access token
   * 
   * @memberof OAuth2
   * @param {String} access_token
   * @returns {OAuth2} this
   */
  OAuth2.prototype.setAccessToken = function(access_token){
    this.access_token = access_token;
    return this;
  };
  
  /**
   * Get the token type
   * 
   * @memberof OAuth2
   * @returns {String} token_type
   */
  OAuth2.prototype.getTokenType = function(){
    return this.token_type;
  };
  
  /**
   * Set the token type
   * 
   * @memberof OAuth2
   * @param {String} token_type
   * @returns {OAuth2} this
   */
  OAuth2.prototype.setTokenType = function(token_type){
    this.token_type = token_type;
    return this;
  };
  
  /**
   * Get the error
   * 
   * @memberof OAuth2
   * @returns {String} error
   */
  OAuth2.prototype.getError = function(){
    return this.error;
  };
  
  /**
   * Set the error
   * 
   * @memberof OAuth2
   * @param {String} error
   * @returns {OAuth2} this
   */
  OAuth2.prototype.setError = function(error){
    this.error = error;
    return this;
  };
  
  /**
   * Get the error description
   * 
   * @memberof OAuth2
   * @returns {String} error_description
   */
  OAuth2.prototype.getErrorDescription = function(){
    return this.error_description;
  };
  
  /**
   * Set the error description
   * 
   * @memberof OAuth2
   * @param {String} error_description
   * @returns {OAuth2} this
   */
  OAuth2.prototype.setErrorDescription = function(error_description){
    this.error_description = error_description;
    return this;
  };
  
  /**
   * Export the object as JSON
   * 
   * @memberof OAuth2
   * @return {Object} JSON object
   */
  OAuth2.prototype.toJSON = function(){
    return this._toJSON(GedcomX.Base, OAuth2.jsonProps);
  };
  
  GedcomX.OAuth2 = OAuth2;
  
};