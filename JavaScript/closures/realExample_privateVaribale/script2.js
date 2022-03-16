let counter = function () {
  let privateValue = 0;
  function changeBy(value) {
    privateValue += value;
  }

  return {
    increament: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    getValue: function () {
      return privateValue;
    }
  };
};

var counter1 = counter();
var counter2 = counter();

counter1.increament();
counter1.increament();
counter1.increament();
counter1.increament();
counter1.decrement();

console.log(counter1.getValue()); // 3
console.log(counter2.getValue()); //0



