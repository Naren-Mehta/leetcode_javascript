function x(callback) {
  console.log("this is x method");
  callback();
}

x(function y() {
  console.log("this is y method");
});

setTimeout(function () {
  console.log("Timer");
}, 5000);

function countButtonClickEvent() {
  var count = 0;
  document.getElementById("clickMe").addEventListener("click", function () {
    count++;
    console.log("Count " + count);
  });
}

countButtonClickEvent();
