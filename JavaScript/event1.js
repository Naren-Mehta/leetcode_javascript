

let x =true;

let a = setInterval(()=>{
    if(x){
        console.log('test');
    }
}, 200);

setTimeout(()=>{
    x= false;
   clearInterval(a);
}, 2000);