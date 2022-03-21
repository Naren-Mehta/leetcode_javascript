// One Way

async function f() {
    try {
        const response = await fetch('https://some-host.com/wrong-url');

    } catch (e) {
        console.log('Some error: ' + e)
    }
}

f();




// 2nd way
async function f() {
    const response = await fetch('https://some-host.com/wrong-url');
}

f().catch(e => console.log('Custom error: '+ e));