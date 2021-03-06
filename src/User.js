module.exports = function(GedcomX){
  
  /**
   * FamilySearch user.
   * 
   * @class User
   * @extends ExtensibleData
   * @param {Object} [json]
   */ 
  var User = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof User)){
      return new User(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(User.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  User.prototype = Object.create(GedcomX.ExtensibleData.prototype);

  User._gedxClass = User.prototype._gedxClass = 'GedcomX.User';
  
  User.jsonProps = [
    'alternateEmail', 
    'birthDate', 
    'contactName', 
    'country', 
    'displayName', 
    'email', 
    'familyName', 
    'fullName', 
    'gender', 
    'givenName', 
    'helperAccessPin', 
    'mailingAddress', 
    'mobilePhoneNumber', 
    'personId', 
    'phoneNumber', 
    'preferredLanguage', 
    'treeUserId' 
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @memberof User
   * @static
   * @param {Object} obj
   * @returns {Boolean}
   */
  User.isInstance = function(obj){
    return GedcomX.utils.isInstance(obj, this._gedxClass);
  };
  
  /**
   * Initialize from JSON
   * 
   * @memberof User
   * @param {Object}
   * @return User this
   */
  User.prototype.init = function(json){
    
    GedcomX.ExtensibleData.prototype.init.call(this, json);
    
    if(json){
      this.setAlternateEmail(json.alternateEmail); 
      this.setBirthDate(json.birthDate); 
      this.setContactName(json.contactName); 
      this.setCountry(json.country); 
      this.setDisplayName(json.displayName); 
      this.setEmail(json.email); 
      this.setFamilyName(json.familyName); 
      this.setFullName(json.fullName); 
      this.setGender(json.gender); 
      this.setGivenName(json.givenName); 
      this.setHelperAccessPin(json.helperAccessPin); 
      this.setMailingAddress(json.mailingAddress); 
      this.setMobilePhoneNumber(json.mobilePhoneNumber); 
      this.setPersonId(json.personId); 
      this.setPhoneNumber(json.phoneNumber); 
      this.setPreferredLanguage(json.preferredLanguage); 
      this.setTreeUserId(json.treeUserId); 
    }
    return this;
  };
  
  /**
   * Get the alternateEmail
   * 
   * @memberof User
   * @returns {String} alternateEmail
   */
  User.prototype.getAlternateEmail = function(){
    return this.alternateEmail;
  };
  
  /**
   * Set the alternateEmail
   * 
   * @memberof User
   * @param {String} alternateEmail
   * @returns {User} this
   */
  User.prototype.setAlternateEmail = function(alternateEmail){
    this.alternateEmail = alternateEmail;
    return this;
  };        
  
  /**
   * Get the birthDate
   * 
   * @memberof User
   * @returns {String} birthDate
   */
  User.prototype.getBirthDate = function(){
    return this.birthDate;
  };
  
  /**
   * Set the birthDate
   * 
   * @memberof User
   * @param {String} birthDate
   * @returns {User} this
   */
  User.prototype.setBirthDate = function(birthDate){
    this.birthDate = birthDate;
    return this;
  };        
  
  /**
   * Get the contactName
   * 
   * @memberof User
   * @returns {String} contactName
   */
  User.prototype.getContactName = function(){
    return this.contactName;
  };
  
  /**
   * Set the contactName
   * 
   * @memberof User
   * @param {String} contactName
   * @returns {User} this
   */
  User.prototype.setContactName = function(contactName){
    this.contactName = contactName;
    return this;
  };        
  
  /**
   * Get the country
   * 
   * @memberof User
   * @returns {String} country
   */
  User.prototype.getCountry = function(){
    return this.country;
  };
  
  /**
   * Set the country
   * 
   * @memberof User
   * @param {String} country
   * @returns {User} this
   */
  User.prototype.setCountry = function(country){
    this.country = country;
    return this;
  };        
  
  /**
   * Get the displayName
   * 
   * @memberof User
   * @returns {String} displayName
   */
  User.prototype.getDisplayName = function(){
    return this.displayName;
  };
  
  /**
   * Set the displayName
   * 
   * @memberof User
   * @param {String} displayName
   * @returns {User} this
   */
  User.prototype.setDisplayName = function(displayName){
    this.displayName = displayName;
    return this;
  };        
  
  /**
   * Get the email
   * 
   * @memberof User
   * @returns {String} email
   */
  User.prototype.getEmail = function(){
    return this.email;
  };
  
  /**
   * Set the email
   * 
   * @memberof User
   * @param {String} email
   * @returns {User} this
   */
  User.prototype.setEmail = function(email){
    this.email = email;
    return this;
  };        
  
  /**
   * Get the familyName
   * 
   * @memberof User
   * @returns {String} familyName
   */
  User.prototype.getFamilyName = function(){
    return this.familyName;
  };
  
  /**
   * Set the familyName
   * 
   * @memberof User
   * @param {String} familyName
   * @returns {User} this
   */
  User.prototype.setFamilyName = function(familyName){
    this.familyName = familyName;
    return this;
  };        
  
  /**
   * Get the fullName
   * 
   * @memberof User
   * @returns {String} fullName
   */
  User.prototype.getFullName = function(){
    return this.fullName;
  };
  
  /**
   * Set the fullName
   * 
   * @memberof User
   * @param {String} fullName
   * @returns {User} this
   */
  User.prototype.setFullName = function(fullName){
    this.fullName = fullName;
    return this;
  };        
  
  /**
   * Get the gender
   * 
   * @memberof User
   * @returns {String} gender
   */
  User.prototype.getGender = function(){
    return this.gender;
  };
  
  /**
   * Set the gender
   * 
   * @memberof User
   * @param {String} gender
   * @returns {User} this
   */
  User.prototype.setGender = function(gender){
    this.gender = gender;
    return this;
  };        
  
  /**
   * Get the givenName
   * 
   * @memberof User
   * @returns {String} givenName
   */
  User.prototype.getGivenName = function(){
    return this.givenName;
  };
  
  /**
   * Set the givenName
   * 
   * @memberof User
   * @param {String} givenName
   * @returns {User} this
   */
  User.prototype.setGivenName = function(givenName){
    this.givenName = givenName;
    return this;
  };        
  
  /**
   * Get the helperAccessPin
   * 
   * @memberof User
   * @returns {String} helperAccessPin
   */
  User.prototype.getHelperAccessPin = function(){
    return this.helperAccessPin;
  };
  
  /**
   * Set the helperAccessPin
   * 
   * @memberof User
   * @param {String} helperAccessPin
   * @returns {User} this
   */
  User.prototype.setHelperAccessPin = function(helperAccessPin){
    this.helperAccessPin = helperAccessPin;
    return this;
  };        
  
  /**
   * Get the mailingAddress
   * 
   * @memberof User
   * @returns {String} mailingAddress
   */
  User.prototype.getMailingAddress = function(){
    return this.mailingAddress;
  };
  
  /**
   * Set the mailingAddress
   * 
   * @memberof User
   * @param {String} mailingAddress
   * @returns {User} this
   */
  User.prototype.setMailingAddress = function(mailingAddress){
    this.mailingAddress = mailingAddress;
    return this;
  };        
  
  /**
   * Get the mobilePhoneNumber
   * 
   * @memberof User
   * @returns {String} mobilePhoneNumber
   */
  User.prototype.getMobilePhoneNumber = function(){
    return this.mobilePhoneNumber;
  };
  
  /**
   * Set the mobilePhoneNumber
   * 
   * @memberof User
   * @param {String} mobilePhoneNumber
   * @returns {User} this
   */
  User.prototype.setMobilePhoneNumber = function(mobilePhoneNumber){
    this.mobilePhoneNumber = mobilePhoneNumber;
    return this;
  };        
  
  /**
   * Get the personId
   * 
   * @memberof User
   * @returns {String} personId
   */
  User.prototype.getPersonId = function(){
    return this.personId;
  };
  
  /**
   * Set the personId
   * 
   * @memberof User
   * @param {String} personId
   * @returns {User} this
   */
  User.prototype.setPersonId = function(personId){
    this.personId = personId;
    return this;
  };        
  
  /**
   * Get the phoneNumber
   * 
   * @memberof User
   * @returns {String} phoneNumber
   */
  User.prototype.getPhoneNumber = function(){
    return this.phoneNumber;
  };
  
  /**
   * Set the phoneNumber
   * 
   * @memberof User
   * @param {String} phoneNumber
   * @returns {User} this
   */
  User.prototype.setPhoneNumber = function(phoneNumber){
    this.phoneNumber = phoneNumber;
    return this;
  };        
  
  /**
   * Get the preferredLanguage
   * 
   * @memberof User
   * @returns {String} preferredLanguage
   */
  User.prototype.getPreferredLanguage = function(){
    return this.preferredLanguage;
  };
  
  /**
   * Set the preferredLanguage
   * 
   * @memberof User
   * @param {String} preferredLanguage
   * @returns {User} this
   */
  User.prototype.setPreferredLanguage = function(preferredLanguage){
    this.preferredLanguage = preferredLanguage;
    return this;
  };        
  
  /**
   * Get the treeUserId
   * 
   * @memberof User
   * @returns {String} treeUserId
   */
  User.prototype.getTreeUserId = function(){
    return this.treeUserId;
  };
  
  /**
   * Set the treeUserId
   * 
   * @memberof User
   * @param {String} treeUserId
   * @returns {User} this
   */
  User.prototype.setTreeUserId = function(treeUserId){
    this.treeUserId = treeUserId;
    return this;
  };        
  
  /**
   * Export the object as JSON
   * 
   * @memberof User
   * @return {Object} JSON object
   */
  User.prototype.toJSON = function(){
    return this._toJSON(GedcomX.ExtensibleData, User.jsonProps);
  };
  
  GedcomX.User = User;
  
};