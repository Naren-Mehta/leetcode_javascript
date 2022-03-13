'use strict';
let x = this;

console.log('x', x);

function test(){
    console.log('this  -- ', this);
}
test();

var person = {
    name: 'naren',
    myArrowFun: ()=>{
        console.log('arrow fun ', this);
    },
    myNormalFun: function(){
        console.log('normal fun ', this);
    }
}
person.myNormalFun();
person.myArrowFun();
