function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}


// const root = new TreeNode(3);
// root.left = new TreeNode(5);
// root.right = new TreeNode(1);

// root.left.left = new TreeNode(6);
// root.left.right = new TreeNode(2);

// root.right.left = new TreeNode(9);
// root.right.right = new TreeNode(8);


// root.left.right.left = new TreeNode(7);
// root.left.right.right = new TreeNode(4);


// const root2 = new TreeNode(3);
// root2.left = new TreeNode(5);
// root2.right = new TreeNode(1);

// root2.left.left = new TreeNode(6);
// root2.left.right = new TreeNode(7);

// root2.right.left = new TreeNode(4);
// root2.right.right = new TreeNode(2);


// root2.right.right.left = new TreeNode(9);
// root2.right.right.right = new TreeNode(8);


//Example 2 :
const root = new TreeNode(1);
const root2 = new TreeNode(1);


function print(root){
    if(!root) return;

    console.log(root.val);
    print(root.left);
    print(root.right);
}


// print(root);

function getLeaf(root, arr){
    if(!root){
        return;
    }

    if(!root.left && !root.right){
        arr.push(root.val);
        return;
    }

    getLeaf(root.left, arr);
    getLeaf(root.right, arr);

    return arr;
}
var leafSimilar = function (root1, root2) {

    let arr1 = [];
    let arr2 = [];

    getLeaf(root1, arr1);
    getLeaf(root2, arr2);

    if(arr1.length !== arr2.length){
        return false;
    }

    return arr1.join(",") === arr2.join(",");
};

const result = leafSimilar(root, root2);
console.log(result);