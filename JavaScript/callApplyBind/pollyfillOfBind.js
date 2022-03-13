let person = {
  firstName: "Naren",
  lastName: "Mehta",
};

let printName = function (city, state) {
  console.log(
    this.firstName + " " + this.lastName,
    " from " + city,
    " " + state
  );
};

const printMyName = printName.bind(person, "pithoragarh");
printMyName("Uttarakhand");

Function.prototype.myBind = function (...args) {
  let obj = this,
    params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

// printName.__proto__.myBind = myBind; // to add property in only printName function

const printMyName1 = printName.myBind(person, "pithoragarh");
printMyName1("Uttarakhand");
