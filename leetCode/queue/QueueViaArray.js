function MyQueue() {
  this.arr = new Array(5);
  this.front = -1;
  this.rear = -1;

  this.updateArraySize = function () {
    let newArr = new Array(this.arr.length * 2);

    for (let i = 0; i < this.arr.length; i++) {
      newArr[i] = this.arr[i];
    }

    this.arr = newArr;
  };

  this.empty = function () {
    if (this.rear == -1 && this.front == -1) {
      return true;
    }
    return false;
  };

  this.add = function (value) {
    if (this.empty()) {
      this.front = 0;
      this.rear = 0;
    }else{
        this.rear++;
    }
    if (this.rear == this.arr.length - 1) {
      this.updateArraySize();
    }
    this.arr[this.rear] = value;
  };

  this.poll = function () {
    console.log(this.front > this.rear);
    if (this.front > this.rear) {
      return "Queue is empty";
    }
    return this.arr[this.front++];
  };

  this.print = function () {
    let front = this.front;
    while (front <= this.rear) {
      console.log(this.arr[front++]);
    }
  };
  this.size = function () {
    return this.rear + 1 - this.front;
  };
}

let queue = new MyQueue();
queue.add(10);
queue.add(20);
queue.add(30);
queue.add(40);
queue.add(50);
queue.add(60);
queue.add(70);
queue.print();

// console.log("===================="+ queue.size())
// console.log(queue.poll());
// queue.print();
// queue.add(10);
// console.log("===================="+ queue.size())
// console.log(queue.poll());
// console.log("===================="+ queue.size())

// queue.print();

// console.log(queue.poll());

// queue.print();

// queue.poll();
// queue.print();

// queue.poll();
// queue.print();

// queue.poll();
// queue.print();

// queue.poll();
// queue.poll();
// queue.poll();
// queue.poll();
// queue.poll();
// queue.print();
