module.exports = function(GedcomX){
  
  // Enable extensions. Atom extensions depend on RS and Records thus they are also enabled
  GedcomX.enableAtomExtensions();
  
  // New data types
  require('./ArtifactMetadata')(GedcomX);
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
  require('./NameFormInfo')(GedcomX);
  require('./Reservation')(GedcomX);
  require('./Ordinance')(GedcomX);
  require('./SearchInfo')(GedcomX);
  require('./SourceReference')(GedcomX);
  require('./Tag')(GedcomX);
  require('./User')(GedcomX);
  
  // Property extensions
  require('./AtomEntry')(GedcomX);
  require('./NameForm')(GedcomX);
  require('./Person')(GedcomX);
  require('./Root')(GedcomX);
  require('./SourceDescription')(GedcomX);
  
};