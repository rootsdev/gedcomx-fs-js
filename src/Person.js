/**
 * Extensions to Person
 */
module.exports = function(GedcomX){
  
  // Extend serialization properties
  GedcomX.Person.jsonProps.push('discussion-references');
  
  // Override init() so that we can deserialize normalized values
  var oldInit = GedcomX.Person.prototype.init;
  GedcomX.Person.prototype.init = function(json){
    oldInit.call(this, json);
    if(json){
      this.setDiscussionReferences(json['discussion-references']);
    }
  };
  
  /**
   * Set the discussion references
   * 
   * @function setDiscussionReferences
   * @instance
   * @memberof Person
   * @param {DiscussionReference[]} discussionReferences
   * @return {Person} this
   */
  GedcomX.Person.prototype.setDiscussionReferences = function(discussionReferences){
    return this._setArray(discussionReferences, 'discussion-references', 'addDiscussionReference');
  };
  
  /**
   * Add a discussion reference
   * 
   * @function addDiscussionReference
   * @instance
   * @memberof Person
   * @param {DiscussionReference} discussionReference
   * @return {Person} this
   */
  GedcomX.Person.prototype.addDiscussionReference = function(discussionReference){
    return this._arrayPush(discussionReference, 'discussion-references', GedcomX.DiscussionReference);
  };
  
  /**
   * Get the discussion references
   * 
   * @function getDiscussionReferences
   * @instance
   * @memberof Person
   * @return {DiscussionReference[]} discussionReferences
   */
  GedcomX.Person.prototype.getDiscussionReferences = function(){
    return this['discussion-references'] || [];
  };
  
};