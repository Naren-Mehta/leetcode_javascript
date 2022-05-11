let p = new Promise((resolve, reject) => {
    resolve(2)
})
.then(res => res)
.catch(rej => rej)


//1st question: output of below line
// console.log(p);


setTimeout(function() {
    console.log(p);
}, 10);