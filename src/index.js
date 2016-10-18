module.exports = function(GedcomX){
  
  // New data types
  require('./ChangeInfo')(GedcomX);
  require('./ChildAndParentsRelationship')(GedcomX);
  require('./Comment')(GedcomX);
  require('./Discussion')(GedcomX);
  require('./FeatureSet')(GedcomX);
  
  // Property extensions
  require('./Root')(GedcomX);
  require('./AtomEntry')(GedcomX);
  
};