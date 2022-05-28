class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    var node = new Node(element);
    if (this.head == null) {
      this.head = node;
    } else {
      var current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  print() {
    var head = this.head;
    while (head) {
      console.log(head.element);
      head = head.next;
    }
  }

  length() {
    return this.size;
  }

  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      return console.log("Please add the valid index");
    }
    var node = new Node(element);
    var current = this.head,
      prev = null;
    var count = 0;

    if (index === 0) {
      node.next = current;
      this.head = node;
    } else {
      var count = 0;
      while (count < index) {
        count++;
        prev = current;
        current = current.next;
      }

      node.next = current;
      prev.next = node;
    }
    this.size++;
  }
}

var list = new LinkedList();

list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.insertAt(35, 3);

console.log("===size===" + list.length());
list.print();
