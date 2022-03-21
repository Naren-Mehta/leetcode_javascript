function printNumber1(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log('PrintName1 is Done');
            resolve(1);
        }, 1000)
    });
}

function printNumber2(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log('PrintName2 is Done');
            resolve(2);
        }, 1000)
    });
}


//Sequential
async function oneByOne(){
    let first = await printNumber1();
    let second = await printNumber2();

    console.log(first, second);
}

// oneByOne();


//Parallel
async function inParallel(){
    const promis1 = printNumber1();
    const promis2 = printNumber2();

    // const number1 = await(promis1);
    // const number2 = await(promis2);
    // console.log(number1, number2);

    // or
    // const [number1, number2] = [await promis1, await promis2];
    // console.log(number1, number2);

    // or 
    console.log(await promis1, await promis2);
}

inParallel();

