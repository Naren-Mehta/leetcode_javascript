function abc(){
    setTimeout(()=>{
     console.log("===setTimeout==")
    },0);
 
    queueMicrotask(()=>{
     console.log("===queueMicrotask==")
    });
 
    Promise.resolve().then((v)=>{
     console.log("===Promise.resolve====");
    });
 }

 abc();