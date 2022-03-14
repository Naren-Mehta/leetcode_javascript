// https://dmitripavlutin.com/javascript-closures-interview-questions/
function createStack() {
   var items = [];
   return {
    push(item) {
        items.push(item);
      },
      pop() {
        return items.pop();
      },
      get(){
         return items;
      }
   }
 }
  const stack = createStack();
  stack.push(10);
  stack.push(5);
  stack.pop(); // => 5
  console.log(stack.items); // => undefined
  console.log(stack.get());