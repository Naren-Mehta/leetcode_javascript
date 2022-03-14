
console.log("start");

setTimeout(function cbT (){
  console.log("timer");
}, 5000);


var startDate = new Date().getTime();
var endDate = startDate;
console.log(startDate);
while(endDate < startDate + 15000){
  endDate = new Date().getTime();
}

console.log(endDate);

console.log("end");

