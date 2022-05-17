// function parent() {
//   x =10;
//   return function child() {
//     console.log("===",x);
//   };
//   var x;
// }

// // const ch = parent();
// // ch();

// // for(var i =0; i <5; i++){
// // 		setTimeout(() => console.log(i), 0)
// // 	}

// function myAll(...promises) {
//     return new Promise((resolve,reject)=>{

//         let arr = [], fail;
//         for (let i = 0; i < promises.length; i++) {
//              console.log(promises[i]);

//             Promise.resolve(promises[i]).then(value=>arr[i] = value).catch(reject=>{
//                 fail = true;
//             }
//             );

//             if (fail) {
//                 reject('Error');
//             }
//         }
//         resolve(arr);
//     }
//     );
// }

// // Promise.all([]).then();

// // Promise.prototype.myAll = myAll;

// const promise1 = new Promise((res,rej)=>res('Promise 1'));

// const promise2 = 33;

// const promise3 = new Promise((res,rej)=>rej('Promise 3'));

// const myPromise = myAll(promise1, promise2, promise3);
// myPromise.then(value=>{
//     console.log(value);
// }
// ).catch(reject=>{
//     console.log(reject);
// }
// );



console.log("a")
setTimeout(() => console.log("b"), 0);
Promise.resolve(() => console.log("c")).then((res) => res());
console.log("d");


// ['a','b','c'] ==> {
// 						  0: 'a',
// 						  1: 'b',
// 						  2: 'c'
// 						}
// convert array to object

// const arrayToObject = ['a','b','c'].reduce((acc, current, index) =>{
//     acc[index] = current;
//     return acc;
// }, {});

// console.log("arrayToObject ",arrayToObject)


// var x =  ['a','b','c'];
// console.log({...x});


//

// const add =function(a){
//     return function (b){
//         return b ? add(a+b): a;
//     }
// }

// console.log(add(5)(2)(4)(8)())

// add(5)(2)(4)(8)()