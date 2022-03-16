function updateFont(fontSize) {
  return function () {
    document.getElementById("details").style.fontSize = fontSize + "px";
  };
}

const mapper = {
  font12: updateFont(12),
  font14: updateFont(14),
  font16: updateFont(16),
};

function changeFont(value) {
  mapper[value] && mapper[value]();
}
