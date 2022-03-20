
// var updateFont12 = function(){
//     document.getElementById('details').style.fontSize = '12px';
// }

// var updateFont14 = function(){
//     document.getElementById('details').style.fontSize = '14px';
// }

// var updateFont16 = function(){
//     document.getElementById('details').style.fontSize = '16px';
// }

//2. ============================================================

// var updateFonts = function(fontSize){
//     return function(){
//         document.getElementById('details').style.fontSize = fontSize;
//     }
// }

// var updateFont12 = updateFonts('12px');
// var updateFont14 = updateFonts('14px');
// var updateFont16 = updateFonts('16px');

//3. ============================================================


var updateFonts = function(fontSize){
    return function(){
        document.getElementById('details').style.fontSize = fontSize;
    }
}

var mapper = {
    font12: updateFonts('12px'),
    font14: updateFonts('14px'),
    font16: updateFonts('16px')

}
var updateFontsFromUI = function (value){
    mapper[value]();
}







