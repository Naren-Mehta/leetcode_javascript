function Stack() {
  this.arr = [];
  this.top = -1;

  this.push = function (val) {
    this.top++;
    this.arr[this.top] = val;
  };

  this.pop = function(){
      this.top--;
  }

  this.print = function(){
      var top = this.top;
      while(top>-1){
        console.log(this.arr[top]);
        top--;
      }
  }
  this.size = function(){
      return this.top+1;
  }
}

var stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.print();
stack.pop();
console.log("after pop")
stack.print();

console.log(stack.size());
