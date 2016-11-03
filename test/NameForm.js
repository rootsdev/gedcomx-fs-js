var assert = require('chai').assert,
    GedcomX = require('gedcomx-js');

describe('NameForm property extensions', function(){
  
  describe('nameFormInfo', function(){
    
    var json = {
      "nameFormInfo" : [ {
        "order" : "http://familysearch.org/v1/Eurotypic"
      } ]
    };
  
    it('Create with JSON', function(){
      test(GedcomX.NameForm(json));
    });
    
    it('Build', function(){
      test(GedcomX.NameForm()
        .addNameFormInfo(
          GedcomX.NameFormInfo()
          .setOrder(json.nameFormInfo[0].order)
      ));
    });
    
    it('toJSON', function(){
      assert.deepEqual(GedcomX.NameForm(json).toJSON(), json);
    });

    function test(nameForm){
      assert.equal(nameForm.getNameFormInfo().length, 1);
      var nameFormInfo = nameForm.getNameFormInfo()[0];
      assert.equal(nameFormInfo.getOrder(), json.nameFormInfo[0].order);
    }
    
  });
  
});