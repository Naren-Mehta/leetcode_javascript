// Debouncing example 1

let count = 0;
const getData = function (data) {
  console.log(" get data api count  " + count++ + " Search text= " + data);
};

const debounce = function (fn, time) {
  let timer,
    oldText = "";
  return function (event) {
    clearTimeout(timer);
    if (oldText !== event.value) {
      timer = setTimeout(() => {
        fn.apply(this, [event.value]);
      }, time);
    }
    oldText = event.value;
  };
};

const getDataCorrctly = debounce(getData, 300);

// =========================================================================================
// Debouncing example 2

const handleClickEvent = function (fn, delay) {
  let timeoutId;
  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn();
    }, delay);
  };
};

const callingApiMethod = function () {
  console.log("Storing data to data base");
};

document
  .getElementById("testButton")
  .addEventListener("click", handleClickEvent(callingApiMethod, 2000));
