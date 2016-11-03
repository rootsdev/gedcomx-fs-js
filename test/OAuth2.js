var assert = require('chai').assert,
    GedcomX = require('gedcomx-js');

var json = {
  "access_token" : "2YoTnFdFEjr1zCsicMWpAA",
  "token_type" : "family_search",
  "error" : "invalid_request",
  "error_description" : "Oauth2 error: multiple parameter values: grant_type"
};

describe('OAuth2', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.OAuth2(), GedcomX.OAuth2, 'An instance of OAuth2 is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.OAuth2(), GedcomX.OAuth2, 'An instance of OAuth2 is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    test(GedcomX.OAuth2(json));
  });
  
  it('Build', function(){
    test(GedcomX.OAuth2()
      .setAccessToken(json.access_token)
      .setTokenType(json.token_type)
      .setError(json.error)
      .setErrorDescription(json.error_description)
    );
  });
  
  it('toJSON', function(){
    assert.deepEqual(GedcomX.OAuth2(json).toJSON(), json);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.OAuth2();
    var obj2 = GedcomX.OAuth2(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});

function test(oauth){
  assert.equal(oauth.getAccessToken(), json.access_token);
  assert.equal(oauth.getTokenType(), json.token_type);
  assert.equal(oauth.getError(), json.error);
  assert.equal(oauth.getErrorDescription(), json.error_description);
}