
document.querySelector('#grandparent')
.addEventListener('click', (e)=>{
    console.log("=Grandparent=");
    e.stopPropagation();
}, true);


document.querySelector('#parent')
.addEventListener('click', (e)=>{
    console.log("=parent=");
}, true);


document.querySelector('#child')
.addEventListener('click', (e)=>{
    console.log("=child=");
}, true);