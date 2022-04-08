const calculateSqure = require("../JavaScript/promises/calculateSqure.js");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;

describe("Test calculateSqure multiple promises ", () => {
  it("Should return 4 in pass 2", function(){
    return calculateSqure(2).then((result)=>{
      expect(result).to.be.above(3);
      expect(result).to.be.equal(4);
    })
  });

  it("Should handle error if we pass string", function(){
    return calculateSqure('test').catch((reason)=>{
      expect(reason).to.not.equal(null);
      expect(reason.message).to.be.equal('Argument of type number is expected');
    })
  });
});