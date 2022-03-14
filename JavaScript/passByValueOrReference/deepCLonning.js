let obj = {
    a: 'a',
    b: 'b',
    c: {
        deep: "try me"
    },
    d: {
        e:{
            f: 'test'
        }
    }
}

let deepClone = JSON.parse(JSON.stringify(obj));

console.log('obj', obj);

console.log('deepClone ', deepClone);

console.log(deepClone == obj);

obj.c.deep = 'did it';

console.log(obj, deepClone);

obj.d.e.f ="changed";
console.log(obj, deepClone);




