let array = [6, 8 ,9, [4, 5, 6], [4, 5, 6, [7, 8, 9]]];

console.log("test")

function flattern(arr){
    var stack = [...arr];
    var res = [];

    while(stack.length){
        var next = stack.pop();
        if(Array.isArray(next)){
            stack.push(...next);
        }else{
            res.push(next);
        }
    }
    return res.reverse();
}

console.log(flattern(array));