const print = (i, n) =>{
    if(i > n){
        return;
    }

    console.log(i);

    print(i+1, n)
}

print(1, 10);