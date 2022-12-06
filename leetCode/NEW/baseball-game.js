var calPoints = function(operations) {
    let arr = [];
    operations.forEach(op => {
        if(!isNaN(op)){
            arr.push(parseInt(op));
        }else if(op === 'C'){
            arr.pop();
        } else if(op === 'D'){
            arr.push(arr[arr.length -1]*2);
        } else if(op === '+'){
            arr.push(arr[arr.length -1] + arr[arr.length -2]);
        }
        console.log(op, arr);
    });

    return arr.reduce((occ, curr) => occ + curr, 0);
};

const arr = ["1","C"]
const result = calPoints(arr);
console.log(result);
