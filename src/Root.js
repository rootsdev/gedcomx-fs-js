/**
 * Extensions to Root
 */
module.exports = function(GedcomX){
  
  // Extend serialization properties
  GedcomX.Root.jsonProps.push('features');
  
  // Override init() so that we can deserialize normalized values
  var oldInit = GedcomX.Root.prototype.init;
  GedcomX.Root.prototype.init = function(json){
    oldInit.call(this, json);
    if(json){
      this.setFeatures(json.features);
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
  
};