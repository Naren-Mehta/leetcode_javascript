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
        if(current.element == key){
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
// obj.add(1)
// obj.add(2)
// console.log(obj.contains(1));
// console.log(obj.contains(3));
// // obj.print();
// obj.add(2)
// obj.print();
// console.log(obj.contains(2));
// obj.remove(2)
// console.log(obj.contains(2));

var methods = ["add","contains","add","contains","remove","add","contains","add","add","add","add","add","add","contains","add","add","add","contains","remove","contains","contains","add","remove","add","remove","add","remove","add","contains","add","add","contains","add","add","add","add","remove","contains","add","contains","add","add","add","remove","remove","add","contains","add","add","contains","remove","add","contains","add","remove","remove","add","contains","add","contains","contains","add","add","remove","remove","add","remove","add","add","add","add","add","add","remove","remove","add","remove","add","add","add","add","contains","add","remove","remove","remove","remove","add","add","add","add","contains","add","add","add","add","add","add","add","add"]
var nums1= [[58],[0],[14],[58],[91],[6],[58],[66],[51],[16],[40],[52],[48],[40],[42],[85],[36],[16],[0],[43],[6],[3],[25],[99],[66],[60],[58],[97],[3],[35],[65],[40],[41],[10],[37],[65],[37],[40],[28],[60],[30],[63],[76],[90],[3],[43],[81],[61],[39],[75],[10],[55],[92],[71],[2],[20],[7],[55],[88],[39],[97],[44],[1],[51],[89],[37],[19],[3],[13],[11],[68],[18],[17],[41],[87],[48],[43],[68],[80],[35],[2],[17],[71],[90],[83],[42],[88],[16],[37],[33],[66],[59],[6],[79],[77],[14],[69],[36],[21],[40]]
var nums = nums1.flat()
for(var i=0;i<methods.length;i++){
  if(methods[i] === "contains"){
    obj.print();
    console.log("contains ",nums[i], " ", obj[methods[i]](nums[i]))
  }else{
    // console.log(methods[i], nums[i]);
    obj[methods[i]](nums[i]);
    // obj.print();
  }
}

// obj.print();

