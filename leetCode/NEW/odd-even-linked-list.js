function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// var e01 = new ListNode(5);
var e1 = new ListNode(5);
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

var oddEvenList = function(head) {
    if(!head){
        return head;
    }

    let currentOdd = head;
    let evenHead = head.next;
    let currentEven = evenHead;

    while(currentEven && currentEven.next){
        currentOdd.next = currentEven.next;
        currentOdd = currentOdd.next;

        currentEven.next = currentOdd.next;
        currentEven = currentEven.next;
    }

    currentOdd.next = evenHead;

    return head;
};

const result = oddEvenList(head);
print(result);