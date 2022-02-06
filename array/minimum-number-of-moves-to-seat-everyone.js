var minMovesToSeat = function (seats, students) {


    // Solution 2: not working with [12,14,19,19,12], [19,2,17,20,7]
    // var seatsTotal = 0,
    //     studentsTotal = 0;

    // for (var i = 0; i < students.length; i++) {
    //     seatsTotal += seats[i];
    //     studentsTotal += students[i];
    // }
    // return Math.abs(seatsTotal - studentsTotal);



    // #Solution 1 
    seats = seats.sort(function (a, b){
        return a-b;
    });
    students = students.sort(function (a, b){
        return a-b;
    });
    var total = 0;

    for(var i=0; i<students.length; i++){
        total+= Math.abs(seats[i]-students[i]);
    }
    return total;
};

// console.log(minMovesToSeat([3, 20, 17, 2, 12, 15, 17, 4, 15, 20], [10, 13, 14, 15, 5, 2, 3, 14, 3, 18]));
console.log(minMovesToSeat([12,14,19,19,12], [19,2,17,20,7]));