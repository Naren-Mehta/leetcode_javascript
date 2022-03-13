
var obj = {
    name: 'naren'
};
var arr = [1, 2, 3];

function fun (){
    console.log("Test");
}



const myDate = new Date();
let object = myDate;

do {
    object = Object.getPrototypeOf(object);
    console.log(object)
}
while(object);