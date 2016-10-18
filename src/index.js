module.exports = function(GedcomX){
  
  // New data types
  require('./ChangeInfo')(GedcomX);
  require('./ChildAndParentsRelationship')(GedcomX);
  require('./Comment')(GedcomX);
  require('./Discussion')(GedcomX);
  require('./DiscussionReference')(GedcomX);
  require('./Error')(GedcomX);
  require('./FeatureSet')(GedcomX);
  require('./FeedbackInfo')(GedcomX);
  require('./MatchInfo')(GedcomX);
  
  // Property extensions
  require('./AtomEntry')(GedcomX);
  require('./Person')(GedcomX);
  require('./Root')(GedcomX);
  
};