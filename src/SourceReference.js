/**
 * Extensions to SourceReference
 */
module.exports = function(GedcomX){
  
  // Extend serialization properties
  GedcomX.SourceReference.jsonProps.push('tags');
  
  // Override init()
  var oldInit = GedcomX.SourceReference.prototype.init;
  GedcomX.SourceReference.prototype.init = function(json){
    oldInit.call(this, json);
    if(json){
      this.setTags(json.tags);
    }
  };
  
  /**
   * Set the tags
   * 
   * @param {Tag[]} tags
   * @return {SourceReference} this
   */
  GedcomX.SourceReference.prototype.setTags = function(tags){
    return this._setArray(tags, 'tags', 'addTag');
  };
  
  /**
   * Add a tag
   * 
   * @param {Tag} tags
   * @return {SourceReference} this
   */
  GedcomX.SourceReference.prototype.addTag = function(tags){
    return this._arrayPush(tags, 'tags', GedcomX.Tag);
  };
  
  /**
   * Get the tags
   * 
   * @return {Tag[]} tags
   */
  GedcomX.SourceReference.prototype.getTags = function(){
    return this.tags || [];
  };
  
};