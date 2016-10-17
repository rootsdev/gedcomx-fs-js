module.exports = function(GedcomX){
  
  // New data types
  require('./FeatureSet')(GedcomX);
  
  // Property extensions
  require('./Root')(GedcomX);
  
};