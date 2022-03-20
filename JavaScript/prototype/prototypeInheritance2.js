const o = {
    a: 2,
    b: 10,
    m: function (){
        return this.a + 1;
    }
};

console.log(o.m());

const p = Object.create(o);
p.a = 4;
console.log(p.m());
console.log(p.a, p.b);

