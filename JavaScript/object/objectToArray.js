
const person = {
    firstName: 'John',
    lastName: 'Doe'
};


for(const key of Object.keys(person)){
    console.log(key, person[key])
}

for(const value of Object.values(person)){
    console.log(value)
}


for(const entry of Object.entries(person)){
        console.log(entry)
}