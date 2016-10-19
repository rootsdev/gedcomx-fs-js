module.exports = function(GedcomX){
  
  // Enable extensions. Atom extensions depend on RS and Records thus they are also enabled
  GedcomX.enableAtomExtensions();
  
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
  require('./Merge')(GedcomX);
  require('./MergeAnalysis')(GedcomX);
  require('./MergeConflict')(GedcomX);
  require('./SearchInfo')(GedcomX);
  require('./SourceReference')(GedcomX);
  require('./Tag')(GedcomX);
  require('./User')(GedcomX);
  
  // Property extensions
  require('./AtomEntry')(GedcomX);
  require('./Person')(GedcomX);
  require('./Root')(GedcomX);
  
};