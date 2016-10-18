module.exports = function(GedcomX){
  
  // New data types
  require('./ChangeInfo')(GedcomX);
  require('./ChildAndParentsRelationship')(GedcomX);
  require('./FeatureSet')(GedcomX);
  
  // Property extensions
  require('./Root')(GedcomX);
  require('./AtomEntry')(GedcomX);
  
};