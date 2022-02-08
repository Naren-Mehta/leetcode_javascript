let x = true;

setTimeout(()=>{
    x = false;
}, 2000);


while(x){
    console.log("test");
}