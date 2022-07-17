// Problem Statement:
// There is a only one Traffic Signal Light
// Default Color is Green
// After 3 seconds it should turned to Yellow
// After 2 Seconds it should turned to Red
// After 5 Second it should again turned to Green
// This process should repeat again and again

// Refer index.html file for UI

function printLight(color) {
    console.log(color);
    let lightEle = document.getElementById("light");
    lightEle.className = color;
  }
  
  function manageLights() {
    let color = "green";
    printLight(color);
    setTimeout(() => {
      color = "yellow";
      printLight(color);
    }, 3000);
  
    setTimeout(() => {
      color = "red";
      printLight(color);
      setTimeout(() => {
        manageLights();
      }, 5000);
    }, 5000);
  }
  
  manageLights();