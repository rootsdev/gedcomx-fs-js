/**
 * Extensions to NameForm
 */
module.exports = function(GedcomX){
  
  // Extend serialization properties
  GedcomX.NameForm.jsonProps.push('nameFormInfo');
  
  // Override init()
  var oldInit = GedcomX.NameForm.prototype.init;
  GedcomX.NameForm.prototype.init = function(json){
    oldInit.call(this, json);
    if(json){
      this.setNameFormInfo(json.nameFormInfo);
    }
  };
  
  /**
   * Set the NameFormInfo
   * 
   * @param {NameFormInfo[]} nameFormInfo
   * @return {NameForm} this
   */
  GedcomX.NameForm.prototype.setNameFormInfo = function(nameFormInfo){
    return this._setArray(nameFormInfo, 'nameFormInfo', 'addNameFormInfo');
  };
  
  /**
   * Add a NameFormInfo
   * 
   * @param {NameFormInfo} nameFormInfo
   * @return {NameForm} this
   */
  GedcomX.NameForm.prototype.addNameFormInfo = function(nameFormInfo){
    return this._arrayPush(nameFormInfo, 'nameFormInfo', GedcomX.NameFormInfo);
  };
  
  /**
   * Get the NameFormInfo
   * 
   * @return {NameFormInfo[]} nameFormInfo
   */
  GedcomX.NameForm.prototype.getNameFormInfo = function(){
    return this.nameFormInfo || [];
  };
  
};