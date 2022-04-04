const calculateSqure = require("../JavaScript/promises/calculateSqure.js");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;

describe("Way 1: Test calculateSqure method Promise ", () => {
  it("Should return 4 in pass 2", function(){
      this.timeout(4000);
    return expect(calculateSqure(2)).to.eventually.be.equal(4);
  });

  // it('Should become fulfilled when passed number 2', () =>{
  //     return expect(calculateSqure(2)).to.be.fulfilled;
  // });

  // it('Should become rejected when passed string value', () =>{
  //     return expect(calculateSqure('test')).to.be.rejected;
  // })
});

// describe('Way 2: Test calculateSqure method Promise ', (done)=>{
//     it('Should return 4 in pass 2', ()=>{
//         expect(calculateSqure(2)).to.eventually.be.equal(4).notify(done);
//     });

//     it('Should become fulfilled when passed number 2', (done)=>{
//         expect(calculateSqure(2)).to.be.fulfilled.notify(done);
//     });

//     it('Should become rejected when passed string value', (done)=>{
//         expect(calculateSqure('test')).to.be.rejected.notify(done);
//     })
// });
