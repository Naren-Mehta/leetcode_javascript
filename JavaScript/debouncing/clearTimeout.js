const myTimeout = setTimeout(myGreating, 3000);

function myGreating() {
  console.log("Happy Birthday to You !!");
}

function myStopFunction() {
  clearTimeout(myTimeout);
}

myStopFunction();

