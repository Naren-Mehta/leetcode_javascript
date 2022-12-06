var RandomizedSet = function() {
    this.mySet = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.mySet && this.mySet.includes(val)){
        return false;
    }

    this.mySet.push(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {

    const index = this.mySet.indexOf(val);

    if(index > -1){
        this.mySet.splice(index, 1);
        return true;
    }

    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const length = this.mySet.length;
    const randomNo = Math.floor(Math.random() * 10) % length;

    return this.mySet[randomNo];
};

 
 var obj = new RandomizedSet()
 var param_1 = obj.insert(1);
 var param_2 = obj.remove(2);
 var param_3 = obj.insert(2);
 var param_4 = obj.getRandom();
 var param_5 = obj.remove(1);
 var param_6 = obj.insert(2);
 var param_7 = obj.getRandom();

 console.log(param_1, param_2, param_3, param_4, param_5, param_6, param_7);