var map = new Map();

map.set('test', 'abc1')

console.log(map.set('test1', 'abc'))

if(map.set('test', 'abc')){
    console.log("if---")
}else{
    console.log("else---")

}

console.log(map)
