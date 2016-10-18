/**
 * Extensions to Root
 */
module.exports = function(GedcomX){
  
  // Extend serialization properties
  GedcomX.Root.jsonProps.push('features','childAndParentsRelationships', 
    'discussions', 'feedbackInfo', 'users');
  
  // Override init() so that we can deserialize normalized values
  var oldInit = GedcomX.Root.prototype.init;
  GedcomX.Root.prototype.init = function(json){
    oldInit.call(this, json);
    if(json){
      this.setFeatures(json.features);
      this.setChildAndParentsRelationships(json.childAndParentsRelationships);
      this.setDiscussions(json.discussions);
      this.setFeedbackInfo(json.feedbackInfo);
      this.setUsers(json.users);
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
  
  /**
   * Set the feedback info
   * 
   * @param {FeedbackInfo[]} feedbackInfo
   * @return {Root} this
   */
  GedcomX.Root.prototype.setFeedbackInfo = function(feedbackInfo){
    return this._setArray(feedbackInfo, 'feedbackInfo', 'addFeedbackInfo');
  };
  
  /**
   * Add a feedback info
   * 
   * @param {FeedbackInfo} feedbackInfo
   * @return {Root} this
   */
  GedcomX.Root.prototype.addFeedbackInfo = function(feedbackInfo){
    return this._arrayPush(feedbackInfo, 'feedbackInfo', GedcomX.FeedbackInfo);
  };
  
  /**
   * Get the feedback info
   * 
   * @return {FeedbackInfo[]} feedbackInfo
   */
  GedcomX.Root.prototype.getFeedbackInfo = function(){
    return this.feedbackInfo || [];
  };
  
  /**
   * Set the users
   * 
   * @param {User[]} users
   * @return {Root} this
   */
  GedcomX.Root.prototype.setUsers = function(users){
    return this._setArray(users, 'users', 'addUser');
  };
  
  /**
   * Add a user
   * 
   * @param {User} user
   * @return {Root} this
   */
  GedcomX.Root.prototype.addUser = function(user){
    return this._arrayPush(user, 'users', GedcomX.User);
  };
  
  /**
   * Get the users
   * 
   * @return {User[]} users
   */
  GedcomX.Root.prototype.getUsers = function(){
    return this.users || [];
  };
  
};