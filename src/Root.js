/**
 * Extensions to Root
 */
module.exports = function(GedcomX){
  
  // Extend serialization properties
  GedcomX.Root.jsonProps.push('features','childAndParentsRelationships', 'discussions');
  
  // Override init() so that we can deserialize normalized values
  var oldInit = GedcomX.Root.prototype.init;
  GedcomX.Root.prototype.init = function(json){
    oldInit.call(this, json);
    if(json){
      this.setFeatures(json.features);
      this.setChildAndParentsRelationships(json.childAndParentsRelationships);
      this.setDiscussions(json.discussions);
    }
  };
  
  /**
   * Set the features
   * 
   * @param {FeatureSet[]} features
   * @return {Root} this
   */
  GedcomX.Root.prototype.setFeatures = function(features){
    return this._setArray(features, 'features', 'addFeature');
  };
  
  /**
   * Add a feature
   * 
   * @param {FeatureSet} feature
   * @return {Root} this
   */
  GedcomX.Root.prototype.addFeature = function(feature){
    return this._arrayPush(feature, 'features', GedcomX.FeatureSet);
  };
  
  /**
   * Get the features
   * 
   * @return {FeatureSet[]} features
   */
  GedcomX.Root.prototype.getFeatures = function(){
    return this.features || [];
  };
  
  /**
   * Set the child and parents relationships
   * 
   * @param {ChildAndParentsRelationship[]} childAndParentRelationships
   * @return {Root} this
   */
  GedcomX.Root.prototype.setChildAndParentsRelationships = function(childAndParentsRelationships){
    return this._setArray(childAndParentsRelationships, 'childAndParentsRelationships', 'addChildAndParentsRelationship');
  };
  
  /**
   * Add a child and parents relationship
   * 
   * @param {ChildAndParentsRelationship} childAndParentsRelationship
   * @return {Root} this
   */
  GedcomX.Root.prototype.addChildAndParentsRelationship = function(childAndParentsRelationship){
    return this._arrayPush(childAndParentsRelationship, 'childAndParentsRelationships', GedcomX.ChildAndParentsRelationship);
  };
  
  /**
   * Get the child and parent relationships
   * 
   * @return {ChildAndParentsRelationship[]}
   */
  GedcomX.Root.prototype.getChildAndParentsRelationships = function(){
    return this.childAndParentsRelationships || [];
  };
  
  /**
   * Set the discussions
   * 
   * @param {Discussion[]} discussions
   * @return {Root} this
   */
  GedcomX.Root.prototype.setDiscussions = function(discussions){
    return this._setArray(discussions, 'discussions', 'addDiscussion');
  };
  
  /**
   * Add a discussion
   * 
   * @param {Discussion} discussion
   * @return {Root} this
   */
  GedcomX.Root.prototype.addDiscussion = function(discussion){
    return this._arrayPush(discussion, 'discussions', GedcomX.Discussion);
  };
  
  /**
   * Get the discussions
   * 
   * @return {Discussion[]} discussions
   */
  GedcomX.Root.prototype.getDiscussions = function(){
    return this.discussions || [];
  };
  
};