

// function polindrom (str){
//     var len = str.length;

//     if(!str){
//         return false;
//     }

//     if(len == 1){
//         return true;
//     }
    
//     var mid = parseInt(len/2);
//     for(var i=0;i<=mid;i++){
//         if(str.charAt(i) !== str.charAt(len-1-i)){
//             return false;
//         }
//     }
//     return true;
    
// }

// polindrom(121);


// function uniqueArr(arr){
//     // let map ={};
//     let newArr =[];
//     for(var i=0;i<arr.length;i++){
//         if(newArr.indexOf(arr[i]) ==-1){
//             // map[arr[i]] = true;
//             newArr.push(arr[i]);
//         }
//     }

//     // var newArr=[];
//     // for(var i in map){
//     //     newArr.push(i);
//     // }

//     return newArr;

// }

// var arr =[5,7,3,5,7,9];

// uniqueArr(arr);

// function print(num){

//     if(num ==0){
//         return;
//     }

//     print(num-1);
//     console.log(num);
    
// }

// print(5);


//
// let buttonOne = document.getElementsByClassName('a')[0];
// buttonOne.addEventListener('click', (event)=>{
//    console.log("clicked",event.target.parentElement); 
// });

let ele = document.querySelectorAll(".a .b")
console.log(ele[0]);

