
let personalPtototype = {
    greet(){
        console.log(`Hello`)
    }
}

const naren = Object.create(personalPtototype);
console.log(naren);
naren.greet()