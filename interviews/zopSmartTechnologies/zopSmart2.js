const obj = {
  key: "abc",
  printName: function () {
    console.log(this.key);
  },
};

const printName = obj.printName;

obj.printName();
printName();
console.log("========")
printName.call(obj);
