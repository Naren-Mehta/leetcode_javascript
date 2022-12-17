var MyQueue = function() {
    this.queue=[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.queue.shift();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.queue[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.queue.length === 0;
};


 var obj = new MyQueue()
 obj.push(1);
 obj.push(2);

 var param_2 = obj.pop()
 var param_3 = obj.peek()
 var param_4 = obj.empty()

 console.log(param_2, param_3, param_4);
 