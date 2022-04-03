
// var x =100;
// function getSpecificNumber() {
//     return new Promise((resolve, reject) => {

//             x =500;
//         setTimeout(()=> resolve(42), 5000);


//     });
// }

// //via old way
// function f1(){
//     getSpecificNumber().then(value => console.log(value));
// }

// f1();

// console.log(x);



// // via await : await only work with async functions
// async function f(){
//     console.log("====start===========")
//     const specificNumber = await getSpecificNumber();
//     console.log(specificNumber); 

// }

// f();

//==========================================================================================================


//Old way
// function getRandomDogImage() {

//     var message ="";

//     fetch('https://dog.ceo/api/breeds/image/random')
//         .then(response => response.json())
//         .then(data => {
//             console.log("==========="+data.message);
//             message = data.message;
//         });

//         console.log("======================="+message)
// }

// getRandomDogImage();




// via async and await
async function getRandomDogImage1(){
    var message = "";
    let response = await fetch('https://dog.ceo/api/breeds/image/random');
    let value = await response.json();
    message = value.message;
    console.log(value.message);

    console.log("========="+message);

}

getRandomDogImage1();




// // await without async : will throw an syntax error: Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules
// function getRandomDogImage2(){
//     let response = await fetch('https://dog.ceo/api/breeds/image/random');
//     let value = await response.json();
//     console.log(value.message);
// }
// getRandomDogImage2(); // SyntaxError: await is only valid in async function