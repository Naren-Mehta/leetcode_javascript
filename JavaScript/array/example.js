const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
    age: 16
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
    age: 34
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
    age: 28
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
    age: 39
  },
];

const nameWithHeight = characters.map((a) => a.name + "_" + a.height);
console.log(nameWithHeight);

const heightMoreThan80 = characters.filter((a) => a.height > 180);
console.log(heightMoreThan80);

const checkMaleAndFemale = characters.reduce((accumulator, current) => {
    console.log(accumulator, current);

  if (accumulator[current.gender]) {
    accumulator[current.gender] += 1;
  } else {
    accumulator[current.gender] = 1;
  }
  return accumulator;
}, {});
console.log(checkMaleAndFemale);


const eyeColorCount = characters.reduce((accumulator, current) => {
    if(accumulator[current.eye_color]){
        accumulator[current.eye_color] += 1;
    }
    else{
        accumulator[current.eye_color] = 1;
    }
    return accumulator;
}, {});
console.log(eyeColorCount);

const nameWithAgeLessThan30 = characters.filter(a => a.age < 30).map(a => a.name);
console.log('via filter and map', nameWithAgeLessThan30);

const nameWithAgeLessThan30UsingReduce = characters.reduce((accumulator, current) => {
    if(current.age < 30){
        accumulator.push(current.name);
    }
    return accumulator;
}, []);
console.log('via reduce ', nameWithAgeLessThan30UsingReduce);