module.exports = function(GedcomX){
  
  /**
   * Information about a search.
   * 
   * @class SearchInfo
   * @extends Base
   * @param {Object} [json]
   */ 
  var SearchInfo = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof SearchInfo)){
      return new SearchInfo(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(SearchInfo.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  SearchInfo.prototype = Object.create(GedcomX.Base.prototype);

  SearchInfo._gedxClass = SearchInfo.prototype._gedxClass = 'GedcomX.SearchInfo';
  
  SearchInfo.jsonProps = [
    'closeHits', 
    'totalHits' 
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @memberof SearchInfo
   * @static
   * @param {Object} obj
   * @returns {Boolean}
   */
  SearchInfo.isInstance = function(obj){
    return GedcomX.utils.isInstance(obj, this._gedxClass);
  };
  
  /**
   * Initialize from JSON
   * 
   * @memberof SearchInfo
   * @param {Object}
   * @return SearchInfo this
   */
  SearchInfo.prototype.init = function(json){
    
    GedcomX.Base.prototype.init.call(this, json);
    
    if(json){
      this.setCloseHits(json.closeHits); 
      this.setTotalHits(json.totalHits); 
    }
    return this;
  };
  
  /**
   * Get the closeHits
   * 
   * @memberof SearchInfo
   * @returns {Integer} closeHits
   */
  SearchInfo.prototype.getCloseHits = function(){
    return this.closeHits;
  };
  
  /**
   * Set the closeHits
   * 
   * @memberof SearchInfo
   * @param {Integer} closeHits
   * @returns {SearchInfo} this
   */
  SearchInfo.prototype.setCloseHits = function(closeHits){
    this.closeHits = closeHits;
    return this;
  };        
  
  /**
   * Get the totalHits
   * 
   * @memberof SearchInfo
   * @returns {Integer} totalHits
   */
  SearchInfo.prototype.getTotalHits = function(){
    return this.totalHits;
  };
  
  /**
   * Set the totalHits
   * 
   * @memberof SearchInfo
   * @param {Integer} totalHits
   * @returns {SearchInfo} this
   */
  SearchInfo.prototype.setTotalHits = function(totalHits){
    this.totalHits = totalHits;
    return this;
  };        
  
  /**
   * Export the object as JSON
   * 
   * @memberof SearchInfo
   * @return {Object} JSON object
   */
  SearchInfo.prototype.toJSON = function(){
    return this._toJSON(GedcomX.Base, SearchInfo.jsonProps);
  };
  
  GedcomX.SearchInfo = SearchInfo;
  
};