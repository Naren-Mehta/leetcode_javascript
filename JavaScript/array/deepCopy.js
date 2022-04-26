const obj = {
    name: 'naren',
    address: {
        add: 'test'
    },
    marks: [1,2,3,[4,5,6, [7,8,9], 10]]
}

//Shallow copy
// const newObj = Object.assign({}, obj);
// console.log(newObj);

// newObj.address.add = 'test1';
// console.log(newObj);
// console.log(obj);



//deep copy
const newObj = JSON.parse(JSON.stringify(obj));
newObj.address.add = 'test1';
console.log('new obj ', newObj);
console.log('old obj ', obj);


