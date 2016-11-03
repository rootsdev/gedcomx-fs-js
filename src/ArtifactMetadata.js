module.exports = function(GedcomX){
  
  /**
   * A representation of metadata about an artifact such as a memory.
   * 
   * @class ArtifactMetadata
   * @extends Base
   * @param {Object} [json]
   */ 
  var ArtifactMetadata = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof ArtifactMetadata)){
      return new ArtifactMetadata(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(ArtifactMetadata.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  ArtifactMetadata.prototype = Object.create(GedcomX.Base.prototype);

  ArtifactMetadata._gedxClass = ArtifactMetadata.prototype._gedxClass = 'GedcomX.ArtifactMetadata';
  
  ArtifactMetadata.jsonProps = [
    'filename', 
    'qualifiers', 
    'width', 
    'height', 
    'size', 
    'screeningState', 
    'editable' 
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @memberof ArtifactMetadata
   * @static
   * @param {Object} obj
   * @returns {Boolean}
   */
  ArtifactMetadata.isInstance = function(obj){
    return GedcomX.utils.isInstance(obj, this._gedxClass);
  };
  
  /**
   * Initialize from JSON
   * 
   * @memberof ArtifactMetadata
   * @param {Object}
   * @return ArtifactMetadata this
   */
  ArtifactMetadata.prototype.init = function(json){
    
    GedcomX.Base.prototype.init.call(this, json);
    
    if(json){
      this.setFilename(json.filename); 
      this.setQualifiers(json.qualifiers); 
      this.setWidth(json.width); 
      this.setHeight(json.height); 
      this.setSize(json.size); 
      this.setScreeningState(json.screeningState); 
      this.setEditable(json.editable); 
    }
    return this;
  };
  
  /**
   * Get the filename
   * 
   * @memberof ArtifactMetadata
   * @returns {String} filename
   */
  ArtifactMetadata.prototype.getFilename = function(){
    return this.filename;
  };
  
  /**
   * Set the filename
   * 
   * @memberof ArtifactMetadata
   * @param {String} filename
   * @returns {ArtifactMetadata} this
   */
  ArtifactMetadata.prototype.setFilename = function(filename){
    this.filename = filename;
    return this;
  };        
  
  /**
   * Get the qualifiers
   * 
   * @memberof ArtifactMetadata
   * @return {Qualifier[]}
   */
  ArtifactMetadata.prototype.getQualifiers = function(){
    return this.qualifiers || [];
  };
  
  /**
   * Set the qualifiers
   * 
   * @memberof ArtifactMetadata
   * @param {Qualifier[]} qualifiers
   * @returns {ArtifactMetadata} this
   */
  ArtifactMetadata.prototype.setQualifiers = function(qualifiers){
    return this._setArray(qualifiers, 'qualifiers', 'addQualifier');
  };
  
  /**
   * Add a qualifier
   * 
   * @memberof ArtifactMetadata
   * @param {Qualifier} qualifier
   * @returns {ArtifactMetadata} this
   */
  ArtifactMetadata.prototype.addQualifier = function(qualifier){
    return this._arrayPush(qualifier, 'qualifiers', GedcomX.Qualifier);
  };    
  
  /**
   * Get the width
   * 
   * @memberof ArtifactMetadata
   * @returns {Number} width
   */
  ArtifactMetadata.prototype.getWidth = function(){
    return this.width;
  };
  
  /**
   * Set the width
   * 
   * @memberof ArtifactMetadata
   * @param {Number} width
   * @returns {ArtifactMetadata} this
   */
  ArtifactMetadata.prototype.setWidth = function(width){
    this.width = width;
    return this;
  };        
  
  /**
   * Get the height
   * 
   * @memberof ArtifactMetadata
   * @returns {Number} height
   */
  ArtifactMetadata.prototype.getHeight = function(){
    return this.height;
  };
  
  /**
   * Set the height
   * 
   * @memberof ArtifactMetadata
   * @param {Number} height
   * @returns {ArtifactMetadata} this
   */
  ArtifactMetadata.prototype.setHeight = function(height){
    this.height = height;
    return this;
  };        
  
  /**
   * Get the size
   * 
   * @memberof ArtifactMetadata
   * @returns {Number} size
   */
  ArtifactMetadata.prototype.getSize = function(){
    return this.size;
  };
  
  /**
   * Set the size
   * 
   * @memberof ArtifactMetadata
   * @param {Number} size
   * @returns {ArtifactMetadata} this
   */
  ArtifactMetadata.prototype.setSize = function(size){
    this.size = size;
    return this;
  };        
  
  /**
   * Get the screeningState
   * 
   * @memberof ArtifactMetadata
   * @returns {String} screeningState
   */
  ArtifactMetadata.prototype.getScreeningState = function(){
    return this.screeningState;
  };
  
  /**
   * Set the screeningState
   * 
   * @memberof ArtifactMetadata
   * @param {String} screeningState
   * @returns {ArtifactMetadata} this
   */
  ArtifactMetadata.prototype.setScreeningState = function(screeningState){
    this.screeningState = screeningState;
    return this;
  };        
  
  /**
   * Get the editable flag
   * 
   * @memberof ArtifactMetadata
   * @returns {Boolean} editable
   */
  ArtifactMetadata.prototype.getEditable = function(){
    return this.editable;
  };
  
  /**
   * Set the editable
   * 
   * @memberof ArtifactMetadata
   * @param {Boolean} editable
   * @returns {ArtifactMetadata} this
   */
  ArtifactMetadata.prototype.setEditable = function(editable){
    this.editable = editable;
    return this;
  };        
  
  /**
   * Export the object as JSON
   * 
   * @memberof ArtifactMetadata
   * @return {Object} JSON object
   */
  ArtifactMetadata.prototype.toJSON = function(){
    return this._toJSON(GedcomX.Base, ArtifactMetadata.jsonProps);
  };
  
  GedcomX.ArtifactMetadata = ArtifactMetadata;
  
};