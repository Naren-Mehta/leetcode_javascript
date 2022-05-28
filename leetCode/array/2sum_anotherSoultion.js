let arr = [1, 2, 3, 4, 5, 6];

function findSum(arr, sum) {
    let obj = {};
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = i;
    }

    for (let i = 0; i < arr.length; i++) {
        let neededValue = sum - arr[i];
        if (obj[neededValue] && obj[neededValue] != i) {
            pairs.push([arr[i], neededValue]);
            obj[neededValue] = undefined;
            obj[arr[i]] = undefined;
        }
    }

    return pairs;
}

console.log(findSum(arr, 7))
