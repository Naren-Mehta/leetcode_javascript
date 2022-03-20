//1:
var output = (function (x) {
    delete x;
    return x;
})(0);
console.log(output);

// ========================================================================================
//2:
var a = { Foo : 1}; 
var output1 = (function() 
{ 
delete a.foo; 
return a.foo; 
} 
)(); 
console.log(output1);

// ========================================================================================
//3:

var Employee = {
    company: 'xyz'
};
var emp1 = Object.create(Employee); // setting a proto type of an object
delete emp1.company; // Delete can't delete the property from prototype. Only objects own property can be deleted
console.log(emp1.company);