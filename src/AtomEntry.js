/**
 * Extensions to AtomEntry
 */
module.exports = function(GedcomX){
  
  // Extend serialization properties
  GedcomX.AtomEntry.jsonProps.push('changeInfo', 'matchInfo');
  
  // Override init()
  var oldInit = GedcomX.AtomEntry.prototype.init;
  GedcomX.AtomEntry.prototype.init = function(json){
    oldInit.call(this, json);
    if(json){
      this.setChangeInfo(json.changeInfo);
      this.setMatchInfo(json.matchInfo);
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
  
  /**
   * Set the match info
   * 
   * @param {MatchInfo[]} matchInfo
   * @return {AtomEntry} this
   */
  GedcomX.AtomEntry.prototype.setMatchInfo = function(matchInfo){
    return this._setArray(matchInfo, 'matchInfo', 'addMatchInfo');
  };
  
  /**
   * Add a match info
   * 
   * @param {MatchInfo} matchInfo
   * @return {AtomEntry} this
   */
  GedcomX.AtomEntry.prototype.addMatchInfo = function(matchInfo){
    return this._arrayPush(matchInfo, 'matchInfo', GedcomX.MatchInfo);
  };
  
  /**
   * Get the match info
   * 
   * @return {MatchInfo[]} matchInfo
   */
  GedcomX.AtomEntry.prototype.getMatchInfo = function(){
    return this.matchInfo || [];
  };
  
};