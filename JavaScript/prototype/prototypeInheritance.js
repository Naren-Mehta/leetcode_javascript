const F = function(){
    this.a = 1;
    this.b = 2; 
}

const o = new F();

console.log(o); // {a:1, b:1}

F.prototype.b = 3;
F.prototype.c = 4;

console.log(F.prototype); // {b:3, c:4}

console.log(o.a);
console.log(o.b);
console.log(o.c);
console.log(o.d);

console.log(o)

