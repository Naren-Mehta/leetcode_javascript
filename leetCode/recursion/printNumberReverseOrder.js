function printCount(n){
    if(n<1) return;
    console.log(n);
    
    printCount(n-1);
}

printCount(5);

