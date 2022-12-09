function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// function insert(root, val){
//     const node = new TreeNode(val);
//     if(root === null){
//         root = node;
//     } else if(root.val >= val){
//         root.left = insert(root.left, val)
//     } else {
//         root.right = insert(root.right, val);
//     }

//     return root;
// }

function print(root) {
  if (!root) return;

  print(root.left);
  console.log(root.val);
  print(root.right);
}

// let root = null;
// root = insert(root, 8);
// root = insert(root, 3);
// root = insert(root, 10);
// root = insert(root, 1);
// root = insert(root, 6);
// root = insert(root, 4);
// root = insert(root, 7);
// root = insert(root, 14);
// root = insert(root, 13);


// let root = null;
// root = insert(root, 1);
// root = insert(root, 2);
// root = insert(root, 0);
// root = insert(root, 3);

const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.right = new TreeNode(0);
root.right.right.left = new TreeNode(3);

// print(root);


const findMin = (root, min, max) => {

    if(!root){
        return Math.abs(min - max);
    }

    const minLeft = findMin(root.left, Math.min(root.val, min), Math.max(root.val, max));
    const minRight = findMin(root.right, Math.min(root.val, min), Math.max(root.val, max));

    return Math.max(minLeft, minRight);;
}
var maxAncestorDiff = function(root) {

    if(!root){
        return;
    }

    return findMin(root, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
};


const result = maxAncestorDiff(root);
console.log("=result=",result);