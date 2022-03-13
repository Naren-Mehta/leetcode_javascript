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

  const fullName1 = getFullName.bind(firstPerson);
  fullName1('haridwar', 'Uttarakhand');

  const fullName2 = getFullName.bind(secondPerson, 'bengaluru');
  fullName2('karnataka');