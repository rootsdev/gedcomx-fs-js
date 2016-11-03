module.exports = function(GedcomX){
  
  /**
   * LDS ordinance reservation
   * 
   * @class Reservation
   * @extends Conclusion
   * @param {Object} [json]
   */ 
  var Reservation = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof Reservation)){
      return new Reservation(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(Reservation.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  Reservation.prototype = Object.create(GedcomX.Conclusion.prototype);

  Reservation._gedxClass = Reservation.prototype._gedxClass = 'GedcomX.Reservation';
  
  Reservation.jsonProps = [
    'type', 
    'status', 
    'spouse', 
    'father', 
    'mother', 
    'assignee' 
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @memberof Reservation
   * @static
   * @param {Object} obj
   * @returns {Boolean}
   */
  Reservation.isInstance = function(obj){
    return GedcomX.utils.isInstance(obj, this._gedxClass);
  };
  
  /**
   * Initialize from JSON
   * 
   * @memberof Reservation
   * @param {Object}
   * @return Reservation this
   */
  Reservation.prototype.init = function(json){
    
    GedcomX.Conclusion.prototype.init.call(this, json);
    
    if(json){
      this.setType(json.type); 
      this.setStatus(json.status); 
      this.setSpouse(json.spouse); 
      this.setFather(json.father); 
      this.setMother(json.mother); 
      this.setAssignee(json.assignee); 
    }
    return this;
  };
  
  /**
   * Get the type
   * 
   * @memberof Reservation
   * @returns {String} type
   */
  Reservation.prototype.getType = function(){
    return this.type;
  };
  
  /**
   * Set the type
   * 
   * @memberof Reservation
   * @param {String} type
   * @returns {Reservation} this
   */
  Reservation.prototype.setType = function(type){
    this.type = type;
    return this;
  };        
  
  /**
   * Get the status
   * 
   * @memberof Reservation
   * @returns {String} status
   */
  Reservation.prototype.getStatus = function(){
    return this.status;
  };
  
  /**
   * Set the status
   * 
   * @memberof Reservation
   * @param {String} status
   * @returns {Reservation} this
   */
  Reservation.prototype.setStatus = function(status){
    this.status = status;
    return this;
  };        
  
  /**
   * Get the spouse
   * 
   * @memberof Reservation
   * @returns {ResourceReference} spouse
   */
  Reservation.prototype.getSpouse = function(){
    return this.spouse;
  };
  
  /**
   * Set the spouse
   * 
   * @memberof Reservation
   * @param {ResourceReference} spouse
   * @returns {Reservation} this
   */
  Reservation.prototype.setSpouse = function(spouse){
    if(spouse){
      this.spouse = GedcomX.ResourceReference(spouse);
    }
    return this;
  };    
  
  /**
   * Get the father
   * 
   * @memberof Reservation
   * @returns {ResourceReference} father
   */
  Reservation.prototype.getFather = function(){
    return this.father;
  };
  
  /**
   * Set the father
   * 
   * @memberof Reservation
   * @param {ResourceReference} father
   * @returns {Reservation} this
   */
  Reservation.prototype.setFather = function(father){
    if(father){
      this.father = GedcomX.ResourceReference(father);
    }
    return this;
  };    
  
  /**
   * Get the mother
   * 
   * @memberof Reservation
   * @returns {ResourceReference} mother
   */
  Reservation.prototype.getMother = function(){
    return this.mother;
  };
  
  /**
   * Set the mother
   * 
   * @memberof Reservation
   * @param {ResourceReference} mother
   * @returns {Reservation} this
   */
  Reservation.prototype.setMother = function(mother){
    if(mother){
      this.mother = GedcomX.ResourceReference(mother);
    }
    return this;
  };    
  
  /**
   * Get the assignee
   * 
   * @memberof Reservation
   * @returns {ResourceReference} assignee
   */
  Reservation.prototype.getAssignee = function(){
    return this.assignee;
  };
  
  /**
   * Set the assignee
   * 
   * @memberof Reservation
   * @param {ResourceReference} assignee
   * @returns {Reservation} this
   */
  Reservation.prototype.setAssignee = function(assignee){
    if(assignee){
      this.assignee = GedcomX.ResourceReference(assignee);
    }
    return this;
  };    
  
  /**
   * Export the object as JSON
   * 
   * @memberof Reservation
   * @return {Object} JSON object
   */
  Reservation.prototype.toJSON = function(){
    return this._toJSON(GedcomX.Conclusion, Reservation.jsonProps);
  };
  
  GedcomX.Reservation = Reservation;
  
};