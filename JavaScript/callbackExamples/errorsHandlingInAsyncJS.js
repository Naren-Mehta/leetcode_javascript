function calculateSqure(number, callback) {
    setTimeout(function () {
        if (typeof number != 'number') {
            throw new Error('Argument of type number is expected');
        }
        const result = number * number;
        callback(result);
    }, 2000);
}

try {
    console.log("===================try Start================")
    calculateSqure('invalid');
    console.log("===================try end================")
} catch (error) {
    console.log("===================catch================")
    console.log("error", error);
}

console.log("===================After================")