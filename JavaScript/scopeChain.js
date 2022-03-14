var x = 1;

function a() {
    var y = 2;
    console.log(x, y)

    function b() {
        var z = 3;
        console.log(x, y, z)

        function c() {
            var w = 4;
            console.log(x, y, z, w)
            console.log(this.parent)
        }
        c();
    }
    b();
}

console.log(x);
a();