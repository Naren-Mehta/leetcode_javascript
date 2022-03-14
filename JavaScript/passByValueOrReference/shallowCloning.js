let obj = {
    a: 'a',
    b: 'b',
    c: {
        deep: "try me"
    }
}

var clone = Object.assign({}, obj);
var clone1 = {... obj};

console.log(obj);
console.log(clone);
console.log(clone1);

obj.c.deep = 'changed';

console.log(obj);
console.log(clone);
console.log(clone1);
