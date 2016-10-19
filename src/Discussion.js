module.exports = function(GedcomX){
  
  /**
   * @class Discussion
   * @extends ExtensibleData
   * @param {Object} [json]
   */ 
  var Discussion = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof Discussion)){
      return new Discussion(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(Discussion.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  Discussion.prototype = Object.create(GedcomX.ExtensibleData.prototype);

  Discussion._gedxClass = Discussion.prototype._gedxClass = 'GedcomX.Discussion';
  
  Discussion.jsonProps = [
    'title', 
    'details', 
    'created', 
    'contributor', 
    'modified', 
    'numberOfComments', 
    'comments' 
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @memberof Discussion
   * @static
   * @param {Object} obj
   * @returns {Boolean}
   */
  Discussion.isInstance = function(obj){
    return GedcomX.utils.isInstance(obj, this._gedxClass);
  };
  
  /**
   * Initialize from JSON
   * 
   * @memberof Discussion
   * @param {Object}
   * @return Discussion this
   */
  Discussion.prototype.init = function(json){
    
    GedcomX.ExtensibleData.prototype.init.call(this, json);
    
    if(json){
      this.setTitle(json.title); 
      this.setDetails(json.details); 
      this.setCreated(json.created); 
      this.setContributor(json.contributor); 
      this.setModified(json.modified); 
      this.setNumberOfComments(json.numberOfComments); 
      this.setComments(json.comments); 
    }
    return this;
  };
  
  /**
   * Get the title
   * 
   * @memberof Discussion
   * @returns {String} title
   */
  Discussion.prototype.getTitle = function(){
    return this.title;
  };
  
  /**
   * Set the title
   * 
   * @memberof Discussion
   * @param {String} title
   * @returns {Discussion} this
   */
  Discussion.prototype.setTitle = function(title){
    this.title = title;
    return this;
  };        
  
  /**
   * Get the details
   * 
   * @memberof Discussion
   * @returns {String} details
   */
  Discussion.prototype.getDetails = function(){
    return this.details;
  };
  
  /**
   * Set the details
   * 
   * @memberof Discussion
   * @param {String} details
   * @returns {Discussion} this
   */
  Discussion.prototype.setDetails = function(details){
    this.details = details;
    return this;
  };        
  
  /**
   * Get the created
   * 
   * @memberof Discussion
   * @returns {Date} created
   */
  Discussion.prototype.getCreated = function(){
    return this.created;
  };
  
  /**
   * Set the created
   * 
   * @memberof Discussion
   * @param {Date|Integer} created
   * @returns {Discussion} this
   */
  Discussion.prototype.setCreated = function(created){
    if(created){
      this.created = new Date(created);
    }
    return this;
  };        
  
  /**
   * Get the contributor
   * 
   * @memberof Discussion
   * @returns {ResourceReference} contributor
   */
  Discussion.prototype.getContributor = function(){
    return this.contributor;
  };
  
  /**
   * Set the contributor
   * 
   * @memberof Discussion
   * @param {ResourceReference} contributor
   * @returns {Discussion} this
   */
  Discussion.prototype.setContributor = function(contributor){
    if(contributor){
      this.contributor = GedcomX.ResourceReference(contributor);
    }
    return this;
  };    
  
  /**
   * Get the modified
   * 
   * @memberof Discussion
   * @returns {Date} modified
   */
  Discussion.prototype.getModified = function(){
    return this.modified;
  };
  
  /**
   * Set the modified
   * 
   * @memberof Discussion
   * @param {Date|Integer} modified
   * @returns {Discussion} this
   */
  Discussion.prototype.setModified = function(modified){
    if(modified){
      this.modified = new Date(modified);
    }
    return this;
  };        
  
  /**
   * Get the numberOfComments
   * 
   * @memberof Discussion
   * @returns {Integer} numberOfComments
   */
  Discussion.prototype.getNumberOfComments = function(){
    return this.numberOfComments;
  };
  
  /**
   * Set the numberOfComments
   * 
   * @memberof Discussion
   * @param {Integer} numberOfComments
   * @returns {Discussion} this
   */
  Discussion.prototype.setNumberOfComments = function(numberOfComments){
    this.numberOfComments = numberOfComments;
    return this;
  };        
  
  /**
   * Get the comments
   * 
   * @memberof Discussion
   * @return {Comment[]}
   */
  Discussion.prototype.getComments = function(){
    return this.comments || [];
  };
  
  /**
   * Set the comments
   * 
   * @memberof Discussion
   * @param {Comment[]} comments
   * @returns {Discussion} this
   */
  Discussion.prototype.setComments = function(comments){
    return this._setArray(comments, 'comments', 'addComment');
  };
  
  /**
   * Add a comment
   * 
   * @memberof Discussion
   * @param {Comment} comment
   * @returns {Discussion} this
   */
  Discussion.prototype.addComment = function(comment){
    return this._arrayPush(comment, 'comments', GedcomX.Comment);
  };    
  
  /**
   * Export the object as JSON
   * 
   * @memberof Discussion
   * @return {Object} JSON object
   */
  Discussion.prototype.toJSON = function(){
    return this._toJSON(GedcomX.ExtensibleData, Discussion.jsonProps);
  };
  
  GedcomX.Discussion = Discussion;
  
};