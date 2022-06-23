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
root = insert(root, 5);
root = insert(root, 1);
root = insert(root, 6);
root.right.left = new BSTNode(4);

root = insert(root, 8);

function isBSTUtil(root, min, max) {
  if (root == null) return true;
  if(root.data >= max || root.data <=min) return false;
  return isBSTUtil(root.left, min, root.data) && isBSTUtil(root.right, root.data, max);
}
function isBST(root) {
  return isBSTUtil(root, Number.MIN_VALUE, Number.MAX_VALUE);
}

console.log(isBST(root));
