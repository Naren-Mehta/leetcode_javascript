function printCount(n){
    if(n<1) return;
    
    printCount(n-1);
    console.log(n);
}

printCount(5);

