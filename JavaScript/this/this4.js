'use strict';

console.log('1st ', this);

this.table  = 'Window Table';

const cleanTable = function(){
    console.log('Clean table ', table);
}

cleanTable();

this.garage = {
    table: 'Garage Table',
    cleanTable: function(){
        console.log('Clean Table ', this.table )
    }
}


let johnsRoom = {
    table: 'Johan Table',
    cleanTable: function(){
        console.log('Clean Table ', this.table )
    }
}

garage.cleanTable();
johnsRoom.cleanTable();