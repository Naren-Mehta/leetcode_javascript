const calculateSqure = require('../JavaScript/callbackExamples/callBackHell.js');
const expect = require('chai').expect;



describe('Test Callback hell', ()=>{
    it('Should return 4 if pass 2  ', (done)=>{
        calculateSqure(2, (error, result)=>{
            console.log("call back called");
            expect(result).to.equal(4);
            done();
        });
    });

    it('Should return error if we passed String as a argument  ', (done)=>{
        calculateSqure('test', (error, result)=>{
            expect(error).to.not.equal(null);
            expect(error.message).to.equal('Argument of type number is expected');
            done();
        });
    });
});