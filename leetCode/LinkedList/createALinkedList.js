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
    var str = "";
    while (head) {
      str += head.element + " ";
      head = head.next;
    }

    console.log(str);
  }

  length() {
    console.log(this.size);
  }

  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      return console.log("Invalid index!");
    }

    var node = new Node(element);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      var current = this.head,
        prev = null,
        count = 0;
      while (count < index) {
        prev = current;
        current = current.next;
        count++;
      }
      node.next = current;
      prev.next = node;
    }
    this.size++;
  }

  remove() {
    if (!this.head) {
      return console.log("Already empty");
    }
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

  removeFromIndex(index) {
    if (index < 0 || index >= this.size) {
      return console.log("Invalid Index!");
    }
    var current = this.head,
      prev = null;
    if (index === 0) {
      this.head = current.next;
    } else {
      var count = 0;
      while (count < index) {
        prev = current;
        current = current.next;
        count++;
      }
      prev.next = current.next;
      this.size--;

      return current.element;
    }
  }

  removeElement(element) {
    var current = this.head,
      prev = null;

    if (!current) {
      return console.log("List is already empty");
    }

    while (current) {
      if (current.element === element) {
        if (prev) {
          prev.next = current.next;
        } else {
          this.head = current.next;
        }
        this.size--;
        return current.element;
      }
      prev = current;
      current = current.next;
    }

    return -1;
  }

  indexOf(element) {
    var current = this.head,
      count = 0;
    while (current) {
      if (current.element === element) {
        return count;
      }
      current = current.next;
      count++;
    }

    return -1;
  }

  isEmpty() {
    return this.size === 0;
  }

  middleNode() {
    var head = this.head;
    var slow = head,
      fast = head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.element;
  }

  reverse() {
    var head = this.head;
    var nextNode = head;
    var prevNode = null;

    while (nextNode) {
      head = nextNode;
      nextNode = nextNode.next;
      head.next = prevNode;
      prevNode = head;
    }
    this.head = head;
  }

  reverseNew() {
    var current = this.head,
      prev = null,
      next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  getIntersectionNode(headA, headB) {}
}

// var list = new LinkedList();
// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4);
// list.add(5);
// list.add(6);
// list.print();
// list.reverseNew()
// list.remove();
// list.insertAt(35, 4);
// list.print();
// console.log(list.middleNode());

// console.log("After remove");
// list.remove();
// list.removeFromIndex(3);
// list.removeElement(10);
// list.print();

// console.log(list.indexOf(35));
// console.log(list.isEmpty());
// list.length();

// list.reverse();
// list.print();

// ========================================================================
var list1 = new LinkedList();
list1.add(4);
list1.add(1);
list1.add(8);
list1.add(4);
list1.add(5);
list1.print();

var list2 = new LinkedList();
list2.add(5);
list2.add(6);
list2.add(1);
list2.add(8);
list2.add(4);
list2.add(5);

list2.print();


var print = function(head) {
  var str = "";
  while (head) {
    str += head.element + " ";
    head = head.next;
  }
  console.log(str);
}
var length = function (head) {
  var count = 0;
  while (head) {
    count++;
    head = head.next;
  }
  return count;
};

var getIntersectionNode = function (headA, headB) {
  var lengthA = length(headA);
  var lengthB = length(headB);

  while (lengthA > lengthB) {
    headA = headA.next;
    lengthA--;
  }

  while (lengthA < lengthB) {
    headB = headB.next;
    lengthB--;
  }

  console.log(headA, headB)


  while(headA != headB){
    headA = headA.next;
    headB = headB.next;
  }

  console.log(headA, headB)

  return headA;
};

var intersection = getIntersectionNode(list1.head, list2.head);
console.log(intersection);
