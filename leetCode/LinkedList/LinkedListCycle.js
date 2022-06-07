function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// var e1 = new ListNode(-4);
// var e2 = new ListNode(0, e1);
// var e3 = new ListNode(2, e2);
// var head1 = new ListNode(3, e3);

// e1.next = e3;

var e1 = new ListNode(1);
var e2 = new ListNode(1, e1);
var e3 = new ListNode(1, e2);
var head1 = new ListNode(1, e3);

var print = function (head) {
  var str = " ";
  while (head) {
    str += head.val + " ";
    head = head.next;
  }
  console.log(str.trim());
};

//   print(head1);

var hasCycle = function (head) {
  if (!head || !head.next) {
    return false;
  }
  var slow = head;
  var fast = head.next.next;
  while (fast && fast.next) {
    if (slow.val === fast.val) {
      return true;
    }
    fast = fast.next.next;
    slow = slow.next;
  }
  return false;
};

console.log(hasCycle(head1));
