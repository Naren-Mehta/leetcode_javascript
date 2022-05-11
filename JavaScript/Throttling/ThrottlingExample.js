const expensive = (args) => {
  console.log("==expensive===" + args);
};

const betterExpensive = (fun, timitLimit) => {
  let flag = true;
  return function () {
    let context = this,
      args = arguments;
    if (flag) {
      fun.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, timitLimit);
    }
  };
};

document
  .getElementById("testButton")
  .addEventListener("click", betterExpensive(expensive, 1000));
