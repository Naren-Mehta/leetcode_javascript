function a (){
    var x =10;
    console.log(this);
}
a();

// ==========================================================================
const person = {
    firstName: 'naren',
    lastName: 'mehta',
    fullName: function (){
        console.log(this);
        console.log(this.firstName+ ' ' + this.lastName);
    }
}

person.fullName();

// ==========================================================================

function b(){
    console.log('b ', this);
    function c(){
        console.log('c ', this);
    }
    c();

    var d = function(){
        console.log('d ', this);
    }
    d();
}

b();