
// document.querySelector('#grandparent')
// .addEventListener('click', (e)=>{
//     console.log("=Grandparent=");
//     e.stopPropagation();
//     console.log("===stopped====")
// });


// document.querySelector('#parent')
// .addEventListener('click', (e)=>{
//     console.log("=parent=");
// });


// document.querySelector('#child')
// .addEventListener('click', (e)=>{
//     console.log("=child=");
// });



// or we can add false


document.querySelector('#grandparent')
.addEventListener('click', (e)=>{
    console.log("=Grandparent=");
    console.log("===stopped====")
}, false);


document.querySelector('#parent')
.addEventListener('click', (e)=>{
    console.log("=parent=");
}, false);


document.querySelector('#child')
.addEventListener('click', (e)=>{
    console.log("=child=");
}, false);