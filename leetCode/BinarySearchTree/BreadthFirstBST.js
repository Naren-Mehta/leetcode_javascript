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

let root = null;
root = insert(root, 15);
root = insert(root, 10);
root = insert(root, 20);
root = insert(root, 5);
root = insert(root, 12);
root = insert(root, 18);
root = insert(root, 25);
printBreadthFirstBST(root);
