const getFruits = [
  Promise.resolve("apple"),
  Promise.resolve("banana"),
  Promise.resolve("orange"),
];

async function logFruits(){
    const oldTime = new Date().getTime();
    for await(const fruit of getFruits){
        console.log(fruit);
    }
    const newTime = new Date().getTime();

    console.log(newTime-oldTime);
}


logFruits();
