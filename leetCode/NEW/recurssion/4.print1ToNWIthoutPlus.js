const print = (i, n) =>{
    if(i < 1){
        return;
    }
    print(i-1, n)
    console.log(i);

}

print(10, 10);