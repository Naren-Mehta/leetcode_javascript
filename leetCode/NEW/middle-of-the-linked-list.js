function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var e01 = new ListNode(5);
var e1 = new ListNode(5, e01);
var e2 = new ListNode(4, e1);
var e3 = new ListNode(3, e2);
var e4 = new ListNode(2, e3);
var head = new ListNode(1, e4);

let print = (head) =>{
    while(head != null){
        console.log(head.val);
        head = head.next;
    }
}
// print(head);

var middleNode = function(head) {
    let fast = head;
    let slow = head;

    while(fast && fast.next!=null){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};

const midNode = middleNode(head);
console.log(midNode.val);