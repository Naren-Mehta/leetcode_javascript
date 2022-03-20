function calculateSqure(number, callback) {
    setTimeout(function () {
        if (typeof number != 'number') {
            callback(new Error('Argument of type number is expected'));
            return;
        }
        const result = number * number;
        callback(null, result);
    }, 2000);
}

calculateSqure('invalid', function (failure, success) {
    if(failure !== null){
        console.log('Caught error==> '+ String(failure));
        return;
    }
    console.log(success);
});