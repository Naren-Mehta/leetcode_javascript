const calculateSqure = require('../callBackHell.js');
const expect = require('chai').expect;



describe('Test Callback hell', ()=>{
    it('Should return 4 if pass 2  ', ()=>{
        calculateSqure(2, (error, result)=>{
            expect(result).to.equal(4);
        });
    });
});