module.exports = function(GedcomX){
  
  /**
   * The FamilySearch-proprietary model for a relationship between a child and a pair of parents.
   * 
   * @class
   * @extends Subject
   * @param {Object} [json]
   */ 
  var ChildAndParentsRelationship = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof ChildAndParentsRelationship)){
      return new ChildAndParentsRelationship(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(ChildAndParentsRelationship.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  ChildAndParentsRelationship.prototype = Object.create(GedcomX.Subject.prototype);

  ChildAndParentsRelationship._gedxClass = ChildAndParentsRelationship.prototype._gedxClass = 'GedcomX.ChildAndParentsRelationship';
  
  ChildAndParentsRelationship.jsonProps = [
    'father', 
    'mother', 
    'child', 
    'fatherFacts', 
    'motherFacts' 
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @param {Object} obj
   * @returns {Boolean}
   */
  ChildAndParentsRelationship.isInstance = function(obj){
    return GedcomX.utils.isInstance(obj, this._gedxClass);
  };
  
  /**
   * Initialize from JSON
   * 
   * @param {Object}
   * @return ChildAndParentsRelationship this
   */
  ChildAndParentsRelationship.prototype.init = function(json){
    
    GedcomX.Subject.prototype.init.call(this, json);
    
    if(json){
      this.setFather(json.father); 
      this.setMother(json.mother); 
      this.setChild(json.child); 
      this.setFatherFacts(json.fatherFacts); 
      this.setMotherFacts(json.motherFacts); 
    }
    return this;
  };
  
  /**
   * Get the father
   * 
   * @returns {ResourceReference} father
   */
  ChildAndParentsRelationship.prototype.getFather = function(){
    return this.father;
  };
  
  /**
   * Set the father
   * 
   * @param {ResourceReference} father
   * @returns {ChildAndParentsRelationship} this
   */
  ChildAndParentsRelationship.prototype.setFather = function(father){
    if(father){
      this.father = GedcomX.ResourceReference(father);
    }
    return this;
  };    
  
  /**
   * Get the mother
   * 
   * @returns {ResourceReference} mother
   */
  ChildAndParentsRelationship.prototype.getMother = function(){
    return this.mother;
  };
  
  /**
   * Set the mother
   * 
   * @param {ResourceReference} mother
   * @returns {ChildAndParentsRelationship} this
   */
  ChildAndParentsRelationship.prototype.setMother = function(mother){
    if(mother){
      this.mother = GedcomX.ResourceReference(mother);
    }
    return this;
  };    
  
  /**
   * Get the child
   * 
   * @returns {ResourceReference} child
   */
  ChildAndParentsRelationship.prototype.getChild = function(){
    return this.child;
  };
  
  /**
   * Set the child
   * 
   * @param {ResourceReference} child
   * @returns {ChildAndParentsRelationship} this
   */
  ChildAndParentsRelationship.prototype.setChild = function(child){
    if(child){
      this.child = GedcomX.ResourceReference(child);
    }
    return this;
  };    
  
  /**
   * Get the fatherFacts
   * 
   * @return {Fact[]}
   */
  ChildAndParentsRelationship.prototype.getFatherFacts = function(){
    return this.fatherFacts || [];
  };
  
  /**
   * Set the fatherFacts
   * 
   * @param {Fact[]} fatherFacts
   * @returns {ChildAndParentsRelationship} this
   */
  ChildAndParentsRelationship.prototype.setFatherFacts = function(fatherFacts){
    return this._setArray(fatherFacts, 'fatherFacts', 'addFatherFact');
  };
  
  /**
   * Add a fatherFact
   * 
   * @param {Fact} fatherFact
   * @returns {ChildAndParentsRelationship} this
   */
  ChildAndParentsRelationship.prototype.addFatherFact = function(fatherFact){
    return this._arrayPush(fatherFact, 'fatherFacts', GedcomX.Fact);
  };    
  
  /**
   * Get the motherFacts
   * 
   * @return {Fact[]}
   */
  ChildAndParentsRelationship.prototype.getMotherFacts = function(){
    return this.motherFacts || [];
  };
  
  /**
   * Set the motherFacts
   * 
   * @param {Fact[]} motherFacts
   * @returns {ChildAndParentsRelationship} this
   */
  ChildAndParentsRelationship.prototype.setMotherFacts = function(motherFacts){
    return this._setArray(motherFacts, 'motherFacts', 'addMotherFact');
  };
  
  /**
   * Add a motherFact
   * 
   * @param {Fact} motherFact
   * @returns {ChildAndParentsRelationship} this
   */
  ChildAndParentsRelationship.prototype.addMotherFact = function(motherFact){
    return this._arrayPush(motherFact, 'motherFacts', GedcomX.Fact);
  };    
  
  /**
   * Export the object as JSON
   * 
   * @return {Object} JSON object
   */
  ChildAndParentsRelationship.prototype.toJSON = function(){
    return this._toJSON(GedcomX.Subject, ChildAndParentsRelationship.jsonProps);
  };
  
  GedcomX.ChildAndParentsRelationship = ChildAndParentsRelationship;
  
};