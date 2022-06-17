function printName(i, n){
    if(i > n) return;
    console.log("Test");
    printName(i+1, n);
}

printName(1,5);