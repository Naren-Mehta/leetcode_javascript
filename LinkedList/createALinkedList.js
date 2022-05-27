class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head =null;
        this.size = 0;
    }

    add(element){
        var node = new Node(element);
        if(this.head == null){
            this.head = node;
        }else{
            var current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    print(){
        var head = this.head;
        while(head){
            console.log(head.element);
            head= head.next;
        }
    }
}

var list = new LinkedList();

list.add(10);
list.add(20);
list.add(30);
list.add(40);

list.print()