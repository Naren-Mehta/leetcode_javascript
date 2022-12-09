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

const rangeSum = function (root, low, high, sum){

    if(!root) return sum;
    
    if(root.val >= low && root.val <= high){
        sum += root.val;
    }

    sum = rangeSum(root.left, low, high, sum);
    sum = rangeSum(root.right, low, high, sum);
    return sum;
}

var rangeSumBST = function(root, low, high) {
    return rangeSum(root, low, high, 0)
};


const result = rangeSumBST(root, 7, 15);
console.log("=result=",result);