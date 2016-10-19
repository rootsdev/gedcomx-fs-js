/**
 * Extensions to AtomFeed
 */
module.exports = function(GedcomX){
  
  // Extend serialization properties
  GedcomX.AtomFeed.jsonProps.push('searchInfo');
  
  // Override init()
  var oldInit = GedcomX.AtomFeed.prototype.init;
  GedcomX.AtomFeed.prototype.init = function(json){
    oldInit.call(this, json);
    if(json){
      this.setSearchInfo(json.searchInfo);
    }
  };
  
  /**
   * Set the search info
   * 
   * @param {SearchInfo[]} searchInfo
   * @return {AtomFeed} this
   */
  GedcomX.AtomFeed.prototype.setSearchInfo = function(searchInfo){
    return this._setArray(searchInfo, 'searchInfo', 'addSearchInfo');
  };
  
  /**
   * Add a search info
   * 
   * @param {SearchInfo} searchInfo
   * @return {AtomFeed} this
   */
  GedcomX.AtomFeed.prototype.addSearchInfo = function(searchInfo){
    return this._arrayPush(searchInfo, 'searchInfo', GedcomX.SearchInfo);
  };
  
  /**
   * Get the search info
   * 
   * @return {SearchInfo[]} searchInfo
   */
  GedcomX.AtomFeed.prototype.getSearchInfo = function(){
    return this.searchInfo || [];
  };
  
};