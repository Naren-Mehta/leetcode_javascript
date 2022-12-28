function print(i, n){
    if(i > n){
        return;
    }

    print(i+1, n);
    console.log(i);
}

print(1, 10);