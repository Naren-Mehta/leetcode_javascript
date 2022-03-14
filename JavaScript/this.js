
var x = 1;
var z =2;

function a(){
    var x =100;
    var z =200;
    console.log(this.x, this.z);
}

a();