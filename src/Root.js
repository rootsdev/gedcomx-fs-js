/**
 * Extensions to Root
 */
module.exports = function(GedcomX){
  
  // Extend serialization properties
  GedcomX.Root.jsonProps.push('features','childAndParentsRelationships', 
    'discussions', 'users', 'mergeAnalyses', 'merges', 'errors');
  
  // Override init() so that we can deserialize normalized values
  var oldInit = GedcomX.Root.prototype.init;
  GedcomX.Root.prototype.init = function(json){
    oldInit.call(this, json);
    if(json){
      this.setFeatures(json.features);
      this.setChildAndParentsRelationships(json.childAndParentsRelationships);
      this.setDiscussions(json.discussions);
      this.setUsers(json.users);
      this.setMergeAnalyses(json.mergeAnalyses);
      this.setMerges(json.merges);
      this.setErrors(json.errors);
    }
  };
  
  /**
   * Set the features
   * 
   * @function setFeatures
   * @instance
   * @memberof Root
   * @param {FeatureSet[]} features
   * @return {Root} this
   */
  GedcomX.Root.prototype.setFeatures = function(features){
    return this._setArray(features, 'features', 'addFeature');
  };
  
  /**
   * Add a feature
   * 
   * @function addFeature
   * @instance
   * @memberof Root
   * @param {FeatureSet} feature
   * @return {Root} this
   */
  GedcomX.Root.prototype.addFeature = function(feature){
    return this._arrayPush(feature, 'features', GedcomX.FeatureSet);
  };
  
  /**
   * Get the features
   * 
   * @function getFeatures
   * @instance
   * @memberof Root
   * @return {FeatureSet[]} features
   */
  GedcomX.Root.prototype.getFeatures = function(){
    return this.features || [];
  };
  
  /**
   * Set the child and parents relationships
   * 
   * @function setChildAndParentsRelationships
   * @instance
   * @memberof Root
   * @param {ChildAndParentsRelationship[]} childAndParentRelationships
   * @return {Root} this
   */
  GedcomX.Root.prototype.setChildAndParentsRelationships = function(childAndParentsRelationships){
    return this._setArray(childAndParentsRelationships, 'childAndParentsRelationships', 'addChildAndParentsRelationship');
  };
  
  /**
   * Add a child and parents relationship
   * 
   * @function addChildAndParentsRelationship
   * @instance
   * @memberof Root
   * @param {ChildAndParentsRelationship} childAndParentsRelationship
   * @return {Root} this
   */
  GedcomX.Root.prototype.addChildAndParentsRelationship = function(childAndParentsRelationship){
    return this._arrayPush(childAndParentsRelationship, 'childAndParentsRelationships', GedcomX.ChildAndParentsRelationship);
  };
  
  /**
   * Get the child and parent relationships
   * 
   * @function getChildAndParentsRelationships
   * @instance
   * @memberof Root
   * @return {ChildAndParentsRelationship[]}
   */
  GedcomX.Root.prototype.getChildAndParentsRelationships = function(){
    return this.childAndParentsRelationships || [];
  };
  
  /**
   * Set the discussions
   * 
   * @function setDiscussions
   * @instance
   * @memberof Root
   * @param {Discussion[]} discussions
   * @return {Root} this
   */
  GedcomX.Root.prototype.setDiscussions = function(discussions){
    return this._setArray(discussions, 'discussions', 'addDiscussion');
  };
  
  /**
   * Add a discussion
   * 
   * @function addDiscussion
   * @instance
   * @memberof Root
   * @param {Discussion} discussion
   * @return {Root} this
   */
  GedcomX.Root.prototype.addDiscussion = function(discussion){
    return this._arrayPush(discussion, 'discussions', GedcomX.Discussion);
  };
  
  /**
   * Get the discussions
   * 
   * @function getDiscussions
   * @instance
   * @memberof Root
   * @return {Discussion[]} discussions
   */
  GedcomX.Root.prototype.getDiscussions = function(){
    return this.discussions || [];
  };
  
  /**
   * Set the users
   * 
   * @function setUsers
   * @instance
   * @memberof Root
   * @param {User[]} users
   * @return {Root} this
   */
  GedcomX.Root.prototype.setUsers = function(users){
    return this._setArray(users, 'users', 'addUser');
  };
  
  /**
   * Add a user
   * 
   * @function addUser
   * @instance
   * @memberof Root
   * @param {User} user
   * @return {Root} this
   */
  GedcomX.Root.prototype.addUser = function(user){
    return this._arrayPush(user, 'users', GedcomX.User);
  };
  
  /**
   * Get the users
   * 
   * @function getUsers
   * @instance
   * @memberof Root
   * @return {User[]} users
   */
  GedcomX.Root.prototype.getUsers = function(){
    return this.users || [];
  };
  
  /**
   * Set the merge analyses
   * 
   * @function setMergeAnalyses
   * @instance
   * @memberof Root
   * @param {MergeAnalysis[]} mergeAnalyses
   * @return {Root} this
   */
  GedcomX.Root.prototype.setMergeAnalyses = function(mergeAnalyses){
    return this._setArray(mergeAnalyses, 'mergeAnalyses', 'addMergeAnalysis');
  };
  
  /**
   * Add a merge analysis
   * 
   * @function addMergeAnalysis
   * @instance
   * @memberof Root
   * @param {MergeAnalysis} mergeAnalysis
   * @return {Root} this
   */
  GedcomX.Root.prototype.addMergeAnalysis = function(mergeAnalysis){
    return this._arrayPush(mergeAnalysis, 'mergeAnalyses', GedcomX.MergeAnalysis);
  };
  
  /**
   * Get the merge analyses
   * 
   * @function getMergeAnalyses
   * @instance
   * @memberof Root
   * @return {MergeAnalysis[]}
   */
  GedcomX.Root.prototype.getMergeAnalyses = function(){
    return this.mergeAnalyses || [];
  };
  
  /**
   * Set the merges
   * 
   * @function setMerges
   * @instance
   * @memberof Root
   * @param {Merge[]}
   * @return {Root} this
   */
  GedcomX.Root.prototype.setMerges = function(merges){
    return this._setArray(merges, 'merges', 'addMerge');
  };
  
  /**
   * Add a merge
   * 
   * @function addMerge
   * @instance
   * @memberof Root
   * @param {Merge}
   * @return {Root} this
   */
  GedcomX.Root.prototype.addMerge = function(merge){
    return this._arrayPush(merge, 'merges', GedcomX.Merge);
  };
  
  /**
   * Get the merges
   * 
   * @function getMerges
   * @instance
   * @memberof Root
   * @return {Merge[]}
   */
  GedcomX.Root.prototype.getMerges = function(){
    return this.merges || [];
  };
  
  /**
   * Get the errors
   * 
   * @function getMerges
   * @instance
   * @memberof Root
   * @return {Error[]}
   */
  GedcomX.Root.prototype.getErrors = function(){
    return this.errors || [];
  };
  
  /**
   * Set the errors
   * 
   * @function getMerges
   * @instance
   * @memberof Root
   * @param {Error[]} errors
   * @returns {Root} this
   */
  GedcomX.Root.prototype.setErrors = function(errors){
    return this._setArray(errors, 'errors', 'addError');
  };
  
  /**
   * Add a errors
   * 
   * @function getMerges
   * @instance
   * @memberof Root
   * @param {Error} error
   * @returns {Root} this
   */
  GedcomX.Root.prototype.addError = function(error){
    return this._arrayPush(error, 'errors', GedcomX.Error);
  };
  
};