// document.querySelector('#category')
// .addEventListener('click', (event)=>{
//     if(event.target.tagName == 'LI'){
//         window.location.href = "/" +event.target.id;
//     }
// });

document.querySelector('#form')
.addEventListener('keyup', (event)=>{
    console.log(event);
    if(event.target.dataset.uppercase!= undefined){
        event.target.value = event.target.value.toUpperCase();
    }
})