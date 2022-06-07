class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(val) {
    var node = new Node(val);
    var head = this.head;
    if (!head) {
      this.head = node;
    } else {
      while (head.next) {
        head = head.next;
      }
      head.next = node;
    }
  }
  print() {
    var head = this.head;
    var str = " ";
    while (head) {
      str += head.val + " ";
      head = head.next;
    }
    console.log(str.trim());
  }

  printReverseOrder() {
    var head = this.head;
    var str = " ";
    while (head) {
      str = head.val + " "+str;
      head = head.next;
    }
    console.log(str.trim());
  }
}
var printRecursively = function (head) {
  if (!head) {
    return;
  }
  console.log(head.val);
  printRecursively(head.next);
};

var printRecursivelyReverseOrder = function (head) {
    if (!head) {
      return;
    }
    printRecursivelyReverseOrder(head.next);
    console.log(head.val);
  };
var list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.add(50);

// list.print();
list.printReverseOrder();
// printRecursively(list.head);
// console.log("reverse order=================>")
// printRecursivelyReverseOrder(list.head);

