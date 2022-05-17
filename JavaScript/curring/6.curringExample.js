// Curring in JS
// Question 5: Manipulatind DOM
// Use of Curring in your project

function updateElementText(id){
    return function(content){
        document.querySelector('#' +id).textContent = content;
    }
}

const updateHeader = updateElementText('header');
updateHeader("this is test message");