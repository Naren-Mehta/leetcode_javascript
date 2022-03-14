const firstPerson = {
  firstName: "Naren",
  lastName: "Mehta",
};

const secondPerson = {
  firstName: "Megha",
  lastName: "Mehta",
};

function getFullName(hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " is from " + hometown + " " + state
  );
}

function getFullName1(a, b, c) {
  console.log(
    this.firstName + " " + this.lastName + " is from " + a + " " + b + " " + c
  );
}

getFullName.call(firstPerson, "Bengaluru", "Karnataka");
getFullName.call(secondPerson, "haridwar", "Uttarakhand");

getFullName1.apply(secondPerson, ["pithoragarh", "Uttarakhand", "India"]);

