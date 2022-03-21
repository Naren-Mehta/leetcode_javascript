// function getSpecificNumber() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> resolve(42), 2000);
//     });
// }

// //via old way
// function f1(){
//     getSpecificNumber().then(value => console.log(value));
// }

// f1();



// // via await : await only work with async functions
// async function f(){
//     const specificNumber = await getSpecificNumber();
//     console.log(specificNumber); 
// }

// f();

//==========================================================================================================


//Old way
// function getRandomDogImage() {
//     fetch('https://dog.ceo/api/breeds/image/random')
//         .then(response => response.json())
//         .then(data => console.log(data.message));
// }

// getRandomDogImage();




// via async and await
// async function getRandomDogImage1(){
//     let response = await fetch('https://dog.ceo/api/breeds/image/random');
//     let value = await response.json();
//     console.log(value.message);
// }

// getRandomDogImage1();




// await without async : will throw an syntax error: Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules
function getRandomDogImage2(){
    let response = await fetch('https://dog.ceo/api/breeds/image/random');
    let value = await response.json();
    console.log(value.message);
}
getRandomDogImage2(); // SyntaxError: await is only valid in async function