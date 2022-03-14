var student = {
    firstName: 'Naren',
    lastName: 'Mehta',
    totalMarks: 10
}

var addMarks = function(marks){
    this.totalMarks += marks;
}

addMarks.call(student, 30);
console.log(student.totalMarks);