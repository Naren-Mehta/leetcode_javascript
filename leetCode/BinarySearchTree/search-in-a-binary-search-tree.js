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


var searchBST = function(root, val) {
    if(root == null) return root;

   if(val == root.val){
       return root;
   }else{
       return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);
   }
}

let root = null;
root = insert(root, 4);
root = insert(root, 7);
root = insert(root, 2);
root = insert(root, 1);
root = insert(root, 3);

const result = searchBST(root, 2);
console.log(result);
