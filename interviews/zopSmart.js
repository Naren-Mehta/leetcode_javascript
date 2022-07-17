function printLight(color) {
  console.log(color);
}

function traficLightLogic() {

  setTimeout(() => {
    printLight("green");
  });

  setTimeout(() => {
    printLight("yellow");
  }, 3000);

  setTimeout(() => {
    printLight("red");
    setTimeout(() => {
      traficLightLogic();
    }, 5000);
  }, 5000);
}

traficLightLogic();
