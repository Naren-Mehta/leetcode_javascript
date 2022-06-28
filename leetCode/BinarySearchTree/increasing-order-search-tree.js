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

var prev = null;
var ascendingOrderBST = function (root) {
  if (!root) return;
  ascendingOrderBST(root.left);
  prev.left = null;
  prev.right = root;
  prev = root;
  ascendingOrderBST(root.right);
};

var increasingBST = function (root) {
  let dummyRoot = new BSTNode(-1);
  prev = dummyRoot;
  ascendingOrderBST(root);
  prev.left = null;
  prev.right = null;
  return dummyRoot.right;
};

let root = null;
root = insert(root, 5);
root = insert(root, 3);
root = insert(root, 2);
root = insert(root, 4);
root = insert(root, 1);
root = insert(root, 6);
root = insert(root, 8);
root = insert(root, 7);
root = insert(root, 9);

root = increasingBST(root);
console.log("============");
console.log(root.right.right.data);
