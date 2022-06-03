var Node = function (element) {
  this.element = element;
  this.next = null;
};
var MyHashSet = function () {
  this.head = null;
  this.size = 0;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  var node = new Node(key);
  if (!this.head) {
    this.head = node;
  } else {
    var current = this.head, prev = null;

    while (current) {
        if(current.element === key){
            return;
        }
        prev = current;
        current = current.next;
    }
    prev.next = node;
  }
  this.size++;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  if (this.head) {
    var current = this.head,
      prev = null;
    if (!current.next) {
      this.head = null;
    } else {
      while (current.next) {
        prev = current;
        current = current.next;
      }
      prev.next = null;
    }
    this.size--;
  }
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {

    var current = this.head;
    while(current){
        if(current.element === key){
            return true;
        }
        current = current.next;
    }
    return false;

};

MyHashSet.prototype.print = function (key) {

    var current = this.head;
    var str=" ";
    while(current){
        str += current.element +" ";
        current = current.next;
    }
    console.log(str);

};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

var obj = new MyHashSet();
obj.add(1)
obj.add(2)
console.log(obj.contains(1));
console.log(obj.contains(3));
// obj.print();
obj.add(2)
obj.print();
console.log(obj.contains(2));
obj.remove(2)
console.log(obj.contains(2));

