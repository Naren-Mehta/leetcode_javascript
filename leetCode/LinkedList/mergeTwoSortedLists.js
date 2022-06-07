function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// var e1 = new ListNode(4);
// var e2 = new ListNode(2, e1);
// var head1 = new ListNode(1, e2);

// var e11 = new ListNode(4);
// var e22 = new ListNode(3, e11);
// var head2 = new ListNode(1, e22);

var head1 = new ListNode(1);
var head2 = new ListNode(2);

var print = function (head) {
  var str = " ";
  while (head) {
    str += head.val + " ";
    head = head.next;
  }
  console.log(str.trim());
};

print(head1);
print(head2);

var mergeTwoLists = function (list1, list2) {
  var head1 = list1;
  var head2 = list2;
  var dummy = new ListNode();
  var tail = dummy;

  while (head1 && head2) {
    if (head1.val < head2.val) {
      tail.next = head1;
      head1 = head1.next;
    } else {
      tail.next = head2;
      head2 = head2.next;
    }
    tail = tail.next;
  }

  if (head1) {
    tail.next = head1;
    head1 = head1.next;
  } else if (head2) {
    tail.next = head2;
    head2 = head2.next;
  }

  return dummy.next;
};

var node = mergeTwoLists(head1, head2);
print(node);
