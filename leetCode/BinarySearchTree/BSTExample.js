function BSTNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function insert(root, data) {
  let newNode = new BSTNode(data);
  if (root == null) {
    root = newNode;
  } else if (data < root.data) {
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

function print(root) {
  while (root != null) {
    console.log(root.data);
    print(root.left);
    // print(root.right);
    // root = root.right;
  }
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

function searchRecurssively(root, value){
  console.log("==",root ? root.data : root)
  if(root == null){
    return false;
  }
  if(root.data == value){
    return true;
  }else if(value < root.data){
    return searchRecurssively(root.left, value);
  }else{
    return searchRecurssively(root.right, value);
  }
}
let root = null;
root = insert(root, 15);
root = insert(root, 10);
root = insert(root, 20);

root = insert(root, 5);
root = insert(root, 7);
root = insert(root, 2);

root = insert(root, 16);
root = insert(root, 25);
root = insert(root, 17);

// console.log(root.data);
// console.log(root.left.data);
// console.log(root.right.data);

// print(root);

root = insertWithoutRecursion(root, 18);
console.log("===");
root = insertWithoutRecursion(root, 19);
console.log("===search=======");

console.log(search(root, 19));
console.log(search(root, 123));
console.log("===searchRecurssively=======");

console.log(searchRecurssively(root, 19));
console.log(searchRecurssively(root, 123));
