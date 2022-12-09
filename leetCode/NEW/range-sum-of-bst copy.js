function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function insert(root, val){
    const node = new TreeNode(val);
    if(root === null){
        root = node;
    } else if(root.val >= val){
        root.left = insert(root.left, val)
    } else {
        root.right = insert(root.right, val);
    }

    return root;
}

function print(root) {
  if (!root) return;

  print(root.left);
  console.log(root.val);
  print(root.right);
}

let root = null;
root = insert(root, 10);
root = insert(root, 5);
root = insert(root, 15);
root = insert(root, 3);
root = insert(root, 7);
root = insert(root, 18);


// print(root);


var rangeSumBST = function(root, low, high) {
    if(!root) return 0;
    
    const leftSum = rangeSumBST(root.left, low, high);
    const rightSum = rangeSumBST(root.right, low, high);

    let sum = leftSum + rightSum;

    if(root.val >= low && root.val <= high){
        sum += root.val;
    }

    return sum;
};


const result = rangeSumBST(root, 7, 15);
console.log("=result=",result);