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
}

var printAgain = function (head) {
  var str = " ";
  while (head) {
    str += head.val + " ";
    head = head.next;
  }
  console.log(str.trim());
};

var reverse = function (head) {
  if (head == null) {
    return head;
  }
  if (head.next == null) {
    return head;
  }

  var newHeadNode = reverse(head.next);
  head.next.next = head;
  head.next = null;

  return newHeadNode;
};

var list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.print();
var newHead = reverse(list.head, null, list.head.next);
printAgain(newHead);
