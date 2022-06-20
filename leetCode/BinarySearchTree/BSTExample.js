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

function insertWithoutRecursion(root, data){
    let newNode = new BSTNode(data);
  if (root == null) {
    root = newNode;
  } else{
    var current = root;
    while(current){
        if(data<current.data){
            console.log("Left ", current.data);
            current = current.left;
        }else{
            console.log("Right ", current.data);
            current = current.right;
        }
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
