var assert = require('chai').assert,
    GedcomX = require('gedcomx-js');

var json = {
  id : "cis.MMM.RX9",
  alternateEmail: 'other@acme.org',
  birthDate: '1968',
  contactName : "Pete Townsend",
  country: 'US',
  displayName: 'display',
  email : "peter@acme.org",
  familyName: 'Townsend',
  fullName: 'Pete Townsend',
  gender: 'Male',
  givenName: 'Pete',
  helperAccessPin: '1234',
  mailingAddress: 'mailing',
  mobilePhoneNumber: '1234567890',
  personId : "JNM-VRQM",
  phoneNumber: '9876543210',
  preferredLanguage: 'en-US',
  treeUserId : "PXRQ-FMXT"
};

describe('User', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.User(), GedcomX.User, 'An instance of User is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.User(), GedcomX.User, 'An instance of User is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    test(GedcomX.User(json));
  });
  
  it('Build', function(){
    test(GedcomX.User()
      .setId(json.id)
      .setAlternateEmail(json.alternateEmail)
      .setBirthDate(json.birthDate)
      .setContactName(json.contactName)
      .setCountry(json.country)
      .setDisplayName(json.displayName)
      .setEmail(json.email)
      .setFamilyName(json.familyName)
      .setFullName(json.fullName)
      .setGender(json.gender)
      .setGivenName(json.givenName)
      .setHelperAccessPin(json.helperAccessPin)
      .setMailingAddress(json.mailingAddress)
      .setMobilePhoneNumber(json.mobilePhoneNumber)
      .setPersonId(json.personId)
      .setPhoneNumber(json.phoneNumber)
      .setPreferredLanguage(json.preferredLanguage)
      .setTreeUserId(json.treeUserId)
    );
  });
  
  it('toJSON', function(){
    assert.deepEqual(GedcomX.User(json).toJSON(), json);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.User();
    var obj2 = GedcomX.User(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});

function test(user){
  assert.equal(user.getId(), json.id);
  assert.equal(user.getAlternateEmail(), json.alternateEmail);
  assert.equal(user.getBirthDate(), json.birthDate);
  assert.equal(user.getContactName(), json.contactName);
  assert.equal(user.getCountry(), json.country);
  assert.equal(user.getDisplayName(), json.displayName);
  assert.equal(user.getEmail(), json.email);
  assert.equal(user.getFamilyName(), json.familyName);
  assert.equal(user.getFullName(), json.fullName);
  assert.equal(user.getGender(), json.gender);
  assert.equal(user.getGivenName(), json.givenName);
  assert.equal(user.getHelperAccessPin(), json.helperAccessPin);
  assert.equal(user.getMailingAddress(), json.mailingAddress);
  assert.equal(user.getMobilePhoneNumber(), json.mobilePhoneNumber);
  assert.equal(user.getPersonId(), json.personId);
  assert.equal(user.getPhoneNumber(), json.phoneNumber);
  assert.equal(user.getPreferredLanguage(), json.preferredLanguage);
  assert.equal(user.getTreeUserId(), json.treeUserId);
}