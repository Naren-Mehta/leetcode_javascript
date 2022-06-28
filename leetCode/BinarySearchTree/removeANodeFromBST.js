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

function print(root){
    if(!root){
        return;
    }
    print(root.left);
    console.log(root.data)
    print(root.right);

}

let root = null;
root = insert(root, 12);
root = insert(root, 5);
root = insert(root, 3);
root = insert(root, 7);
root = insert(root, 1);
root = insert(root, 9);
root = insert(root, 15);
root = insert(root, 13);
root = insert(root, 17);

function findMin(root) {
    while(root.left !=null){
        root= root.left;
    }
    return root;
}
function remove(root, value) {
  if (root == null) return root;
  if (value < root.data) {
    root.left = remove(root.left, value);
  } else if (value > root.data) {
    root.right = remove(root.right, value);
  } else {
    if (root.left == null && root.right == null) {
      root = null;
    } else if (root.left == null) {
      root = root.right;
    } else if (root.right == null) {
      root = root.left;
    } else {
      var temp = findMin(root.right);
      root.data = temp.data;
      root.right = remove(root.right, temp.data);
    }
  }
  return root;
}

print(root);
root = remove(root, 12);
console.log("==============after remove=================")
print(root);
