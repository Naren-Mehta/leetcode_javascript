function BSTNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function insert(root, data) {
  let newNode = new BSTNode(data);
  if (root == null) {
    root = newNode;
  } else if (data <= root.data) {
    root.left = insert(root.left, data);
  } else {
    root.right = insert(root.right, data);
  }

  return root;
}

function printBreadthFirstBST(root) {
  var queue = [root];

  while (queue.length > 0) {
    let current = queue.shift();
    console.log(current.data);
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
}

var levelOrder = function (root) {
  if (!root) return [];

  let queue = [root];
  let result = [[root.data]];
  while (queue.length > 0) {
    let current = queue.shift();
    let newArr = [];
    if (current.left) {
      newArr.push(current.left.data);
      queue.push(current.left);
    }

    if (current.right) {
      newArr.push(current.right.data);
      queue.push(current.right);
    }

    if (newArr.length > 0) result.push(newArr);
  }

  return result;
};

var nodesInHeight = function(root){

    var queue =[root];
    var result =[];
    while(queue.length>0){
        
    }
}

let root = null;
root = insert(root, 3);
root = insert(root, 9);
root = insert(root, 20);
root = insert(root, 15);
root = insert(root, 7);

const result = levelOrder(root);
console.log(result);
