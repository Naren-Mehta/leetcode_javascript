function print(i, n){
    if(i > n){
        return;
    }

    console.log("Naren");
    print(i+1, n);
}

print(1, 10);