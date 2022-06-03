// First round was React assignment - Budget app

// Second round:

const students = [
  {
    name: `Arjun`,
    class: 1,
    mark: 60
  },
  {
    name: `Anu`,
    class: 2,
    mark: 50
  },
  {
    name: `Manoj`,
    class: 1,
    mark: 55
  },
  {
    name: `Ram`,
    class: 2,
    mark: 70
  },
  {
    name: `Reshma`,
    class: 3,
    mark: 80
  },
  
]

const newStu = students. reduce((acc, curr)=>{
    var id = curr.class;
    if(acc[id]){
        acc[id] = [...acc[id], curr];
    }else{
        acc[id]= [curr];
    }
  return acc;
  
}, {});

console.log(newStu);


// Where should not use arrow function
var name = 'naren';

let obj ={
  name: 'sri',
  getName: function(){
    return this.name;
  },
   getNameByArrow: () =>{
    return this.name;
  }
}
obj.getName();
obj.getNameByArrow();

//  FInd vs Filter method


// Find: return first element (single element) that satisfied the condition
var arr = [10, 20, 5, 6, 25];
var greaterThan10 = arr.find(i=>i >10);
console.log(greaterThan10)

var greaterThan10Index = arr.findIndex(i=>i >10);
console.log(greaterThan10Index)

console.log(arr.indexOf(10));



//// Filter: return all element (array of elements) that satisfied the condition
var arr = [10, 20, 5, 6, 25];
var greaterThan10Arr = arr.filter(i => i>10);
console.log(greaterThan10Arr);

// React vs Vue vs Angular
// React hooks etc

// HTML & CSS

// make inner div to center of the outer div
