/**
 * Extensions to AtomEntry
 */
module.exports = function(GedcomX){
  
  // Extend serialization properties
  GedcomX.AtomEntry.jsonProps.push('changeInfo');
  
  // Override init()
  var oldInit = GedcomX.AtomEntry.prototype.init;
  GedcomX.AtomEntry.prototype.init = function(json){
    oldInit.call(this, json);
    if(json){
      this.setChangeInfo(json.changeInfo);
    }
  };
  
  /**
   * Set the change info
   * 
   * @param {ChangeInfo[]} changeInfo
   * @return {AtomEntry} this
   */
  GedcomX.AtomEntry.prototype.setChangeInfo = function(changeInfo){
    return this._setArray(changeInfo, 'changeInfo', 'addChangeInfo');
  };
  
  /**
   * Add a change info
   * 
   * @param {ChangeInfo} changeInfo
   * @return {AtomEntry} this
   */
  GedcomX.AtomEntry.prototype.addChangeInfo = function(changeInfo){
    return this._arrayPush(changeInfo, 'changeInfo', GedcomX.ChangeInfo);
  };
  
  /**
   * Get the change info
   * 
   * @return {ChangeInfo[]} changeInfo
   */
  GedcomX.AtomEntry.prototype.getChangeInfo = function(){
    return this.changeInfo || [];
  };
  
};