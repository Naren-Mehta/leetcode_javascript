var counter = (function () {
  var privateValue = 0;
  function changeBy(value){
    privateValue += value;
  }

  return {
      increment: function(){
          changeBy(1);
      },
      decrement: function(){
          changeBy(-1);
      },
      value: function(){
          return privateValue;
      }
  }
})();


counter.increment();
counter.increment();
counter.increment();
counter.increment();

counter.decrement();
console.log(counter.value());
