
function test(){
    let x = y = 20;
    x++;
    return x;
}
test();
console.log(typeof x, typeof y)

console.log(typeof newLetVariable === 'undefined')
console.log(typeof newConstVariable === 'undefined')
