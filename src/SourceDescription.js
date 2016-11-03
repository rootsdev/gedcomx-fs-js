/**
 * Extensions to SourceDescription
 */
module.exports = function(GedcomX){
  
  // Extend serialization properties
  GedcomX.SourceDescription.jsonProps.push('artifactMetadata');
  
  // Override init()
  var oldInit = GedcomX.SourceDescription.prototype.init;
  GedcomX.SourceDescription.prototype.init = function(json){
    oldInit.call(this, json);
    if(json){
      this.setArtifactMetadata(json.artifactMetadata);
    }
  };
  
  /**
   * Set the artifact metadata
   * 
   * @param {ArtifactMetadata[]} artifactMetadata
   * @return {SourceDescription} this
   */
  GedcomX.SourceDescription.prototype.setArtifactMetadata = function(artifactMetadata){
    return this._setArray(artifactMetadata, 'artifactMetadata', 'addArtifactMetadata');
  };
  
  /**
   * Add an artifact metadata
   * 
   * @param {ArtifactMetadata} artifactMetadata
   * @return {SourceDescription} this
   */
  GedcomX.SourceDescription.prototype.addArtifactMetadata = function(artifactMetadata){
    return this._arrayPush(artifactMetadata, 'artifactMetadata', GedcomX.ArtifactMetadata);
  };
  
  /**
   * Get the artifact metadata
   * 
   * @return {ArtifactMetadata[]} artifactMetadata
   */
  GedcomX.SourceDescription.prototype.getArtifactMetadata = function(){
    return this.artifactMetadata || [];
  };
  
};