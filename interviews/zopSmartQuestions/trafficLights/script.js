const mapper = {
  red: document.getElementById("red"),
  yellow: document.getElementById("yellow"),
  green: document.getElementById("green"),
};

function resetLight() {
  for (let key in mapper) {
    mapper[key].style.backgroundColor = "black";
  }
}

function printLight(color) {
  console.log(color);
  const ele = mapper[color];
  ele.style.backgroundColor = color;
}

function logic(time, color) {
  setTimeout(() => {
    resetLight();
    printLight(color);

    if (color === "red") {
      setTimeout(() => {
        traficLightLogic();
      }, 5000);
    }
  }, time);
}

function traficLightLogic() {
  logic(0, "green");
  logic(3000, "yellow");
  logic(5000, "red");
}

traficLightLogic();
