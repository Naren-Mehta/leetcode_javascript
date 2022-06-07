function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var e1 = new ListNode(9);
var e2 = new ListNode(7, e1);
var head1 = new ListNode(5, e2);

var e11 = new ListNode(10);
var e22 = new ListNode(8, e11);
var e33 = new ListNode(4, e22);
var head2 = new ListNode(3, e33);

// var head1 = new ListNode(1);
// var head2 = new ListNode(2);

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
  if (list1 == null) return list2;
  if (list2 == null) return list1;

  if (list1.val > list2.val) {
    var temp = list2;
    list2 = list1;
    list1 = temp;
  }

  var res = list1;
  var prev = null;
  while (list1 && list2) {
    while (list1 && list1.val <= list2.val) {
      prev = list1;
      list1 = list1.next;
    }

    prev.next = list2;

    var temp = list2;
    list2 = list1;
    list1 = temp;
  }

  return res;
};

var node = mergeTwoLists(head1, head2);
print(node);
