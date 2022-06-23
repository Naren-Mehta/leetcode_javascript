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

function insertWithoutRecursion(root, data) {
  let newNode = new BSTNode(data);
  if (root == null) {
    root = newNode;
  } else {
    var current = root,
      prev = null;
    while (current) {
      prev = current;
      if (data < current.data) {
        console.log("Left ", current.data);
        current = current.left;
      } else {
        console.log("Right ", current.data);
        current = current.right;
      }
    }

    if (prev == null) {
      prev = newNode;
    } else if (data < prev.data) {
      prev.left = newNode;
    } else {
      prev.right = newNode;
    }
    current = newNode;
  }
  return root;
}

function search(root, value) {
  while (root) {
    if (root.data == value) {
      return true;
    }

    if (value < root.data) {
      root = root.left;
    } else {
      root = root.right;
    }
  }
  return false;
}

function searchRecurssively(root, value) {
  if (root == null) {
    return false;
  }
  if (root.data == value) {
    return true;
  } else if (value < root.data) {
    return searchRecurssively(root.left, value);
  } else {
    return searchRecurssively(root.right, value);
  }
}

function findMinimum(root) {
  if (!root) {
    return -1;
  }
  while (root.left) {
    root = root.left;
  }
  return root.data;
}

function findMaximum(root) {
  if (!root) {
    return -1;
  }
  while (root.right) {
    root = root.right;
  }
  return root.data;
}

function height(root) {
  if (!root) return -1;
  return Math.max(height(root.left), height(root.right)) + 1;
}

function printPreOrder(root) {
  if (!root) return;

  console.log(root.data);
  printPreOrder(root.left);
  printPreOrder(root.right);
}

function printInOrder(root) {
  if (!root) return;
  printInOrder(root.left);
  console.log(root.data);
  printInOrder(root.right);
}

function printPostOrder(root) {
  if (!root) return;
  printPostOrder(root.left);
  printPostOrder(root.right);
  console.log(root.data);
}

function printLevelOrderTraversal() {
  if (!root) return;
}

var sumOfBST = (root, sum) => {
  if (!root) return 0;
  sum += root.data + sumOfBST(root.left, sum) + sumOfBST(root.right, sum);
  return sum;
};

// var getSum = function (root, low, high, sum) {
//   if (!root) return 0;
//   sum += (root.data >= low && root.data <= high ? root.data : 0 ) + getSum(root.left, low, high, sum) + getSum(root.right, low, high, sum);
//   return sum;
// };

var rangeSumBST = function (root, low, high) {
  var sum = 0;
  if (!root) return 0;
  if (root.data < low) return rangeSumBST(root.right, low, high);
  if (root.data > high) return rangeSumBST(root.left, low, high);
  sum +=
    root.data +
    rangeSumBST(root.left, low, high) +
    rangeSumBST(root.right, low, high);
  return sum;
};

// var increasingBST2 = function (root, newRoot) {
//   if (!root) return null;
//   var leftNode = increasingBST2(root.left, newRoot);

//   if(!newRoot){
//     newRoot = leftNode;
//   }else{
//     leftNode.right = node;
//   }
// };

var newRoot = null;
var increasingBST = function (root) {
  if (!root) return null;
  increasingBST(root.left);
  if(!newRoot){
    root.left =null;
    root.right =null;
    newRoot = root;
  }else{
    while(newRoot.right){
      newRoot = newRoot.right;
    }
    newRoot.right = root;
  }
  return newRoot;
};

let root = null;
root = insert(root, 15);
root = insert(root, 10);
root = insert(root, 20);

root = insert(root, 5);
root = insert(root, 6);

// root = insert(root, 7);
// root = insert(root, 2);
// root = insert(root, 1);

// root = insert(root, 16);
// root = insert(root, 25);
// root = insert(root, 17);

// console.log(root.data);
// console.log(root.left.data);
// console.log(root.right.data);

// print(root);

// root = insertWithoutRecursion(root, 18);
// root = insertWithoutRecursion(root, 19);
// console.log("===search=======");
// console.log(search(root, 19));
// console.log(search(root, 123));
// console.log("===searchRecurssively=======");

// console.log(searchRecurssively(root, 19));
// console.log(searchRecurssively(root, 123));

// console.log(findMinimum(root));
// console.log(findMaximum(root));
// console.log(height(root));

// printPreOrder(root);
printInOrder(root);
// printPostOrder(root);

// printLevelOrderTraversal(root);

// const result = rangeSumBST(root, 6, 10);
// console.log("==", result);

// console.log("=sum of bst==", sumOfBST(root, 0));

// console.log("=rangeSumBST of bst==", rangeSumBST(root, 6, 15));

root = increasingBST(root);

// printInOrder(root);
