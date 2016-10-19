module.exports = function(GedcomX){
  
  /**
   * Comment on a discussion
   * 
   * @class Comment
   * @extends ExtensibleData
   * @param {Object} [json]
   */ 
  var Comment = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof Comment)){
      return new Comment(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(Comment.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  Comment.prototype = Object.create(GedcomX.ExtensibleData.prototype);

  Comment._gedxClass = Comment.prototype._gedxClass = 'GedcomX.Comment';
  
  Comment.jsonProps = [
    'text', 
    'created', 
    'contributor' 
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @param {Object} obj
   * @returns {Boolean}
   */
  Comment.isInstance = function(obj){
    return GedcomX.utils.isInstance(obj, this._gedxClass);
  };
  
  /**
   * Initialize from JSON
   * 
   * @param {Object}
   * @return Comment this
   */
  Comment.prototype.init = function(json){
    
    GedcomX.ExtensibleData.prototype.init.call(this, json);
    
    if(json){
      this.setText(json.text); 
      this.setCreated(json.created); 
      this.setContributor(json.contributor); 
    }
    return this;
  };
  
  /**
   * Get the text
   * 
   * @returns {String} text
   */
  Comment.prototype.getText = function(){
    return this.text;
  };
  
  /**
   * Set the text
   * 
   * @param {String} text
   * @returns {Comment} this
   */
  Comment.prototype.setText = function(text){
    this.text = text;
    return this;
  };        
  
  /**
   * Get the created
   * 
   * @returns {Date} created
   */
  Comment.prototype.getCreated = function(){
    return this.created;
  };
  
  /**
   * Set the created
   * 
   * @param {Date|Integer} created
   * @returns {Comment} this
   */
  Comment.prototype.setCreated = function(created){
    if(created){
      this.created = new Date(created);
    }
    return this;
  };        
  
  /**
   * Get the contributor
   * 
   * @returns {ResourceReference} contributor
   */
  Comment.prototype.getContributor = function(){
    return this.contributor;
  };
  
  /**
   * Set the contributor
   * 
   * @param {ResourceReference} contributor
   * @returns {Comment} this
   */
  Comment.prototype.setContributor = function(contributor){
    if(contributor){
      this.contributor = GedcomX.ResourceReference(contributor);
    }
    return this;
  };    
  
  /**
   * Export the object as JSON
   * 
   * @return {Object} JSON object
   */
  Comment.prototype.toJSON = function(){
    return this._toJSON(GedcomX.ExtensibleData, Comment.jsonProps);
  };
  
  GedcomX.Comment = Comment;
  
};