module.exports = function(GedcomX){
  
  /**
   * LDS ordinance
   * 
   * @class Ordinance
   * @extends Reservation
   * @param {Object} [json]
   */ 
  var Ordinance = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof Ordinance)){
      return new Ordinance(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(Ordinance.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  Ordinance.prototype = Object.create(GedcomX.Reservation.prototype);

  Ordinance._gedxClass = Ordinance.prototype._gedxClass = 'GedcomX.Ordinance';
  
  Ordinance.jsonProps = [
    'living', 
    'date', 
    'templeCode' 
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @memberof Ordinance
   * @static
   * @param {Object} obj
   * @returns {Boolean}
   */
  Ordinance.isInstance = function(obj){
    return GedcomX.utils.isInstance(obj, this._gedxClass);
  };
  
  /**
   * Initialize from JSON
   * 
   * @memberof Ordinance
   * @param {Object}
   * @return Ordinance this
   */
  Ordinance.prototype.init = function(json){
    
    GedcomX.Reservation.prototype.init.call(this, json);
    
    if(json){
      this.setLiving(json.living); 
      this.setDate(json.date); 
      this.setTempleCode(json.templeCode); 
    }
    return this;
  };
  
  /**
   * Get the living flag
   * 
   * @memberof Ordinance
   * @returns {Boolean} living
   */
  Ordinance.prototype.getLiving = function(){
    return this.living;
  };
  
  /**
   * Set the living
   * 
   * @memberof Ordinance
   * @param {Boolean} living
   * @returns {Ordinance} this
   */
  Ordinance.prototype.setLiving = function(living){
    this.living = living;
    return this;
  };        
  
  /**
   * Get the date
   * 
   * @memberof Ordinance
   * @returns {Date} date
   */
  Ordinance.prototype.getDate = function(){
    return this.date;
  };
  
  /**
   * Set the date
   * 
   * @memberof Ordinance
   * @param {Date} date
   * @returns {Ordinance} this
   */
  Ordinance.prototype.setDate = function(date){
    if(date){
      this.date = GedcomX.Date(date);
    }
    return this;
  };    
  
  /**
   * Get the templeCode
   * 
   * @memberof Ordinance
   * @returns {String} templeCode
   */
  Ordinance.prototype.getTempleCode = function(){
    return this.templeCode;
  };
  
  /**
   * Set the templeCode
   * 
   * @memberof Ordinance
   * @param {String} templeCode
   * @returns {Ordinance} this
   */
  Ordinance.prototype.setTempleCode = function(templeCode){
    this.templeCode = templeCode;
    return this;
  };        
  
  /**
   * Export the object as JSON
   * 
   * @memberof Ordinance
   * @return {Object} JSON object
   */
  Ordinance.prototype.toJSON = function(){
    return this._toJSON(GedcomX.Reservation, Ordinance.jsonProps);
  };
  
  GedcomX.Ordinance = Ordinance;
  
};