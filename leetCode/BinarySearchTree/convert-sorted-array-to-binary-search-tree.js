function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var arrayToBST = function (l, r , nums) {
    if(l>r) return;

    let m = parseInt((l+r)/2);
    var root = new TreeNode(nums[m]);
    root.left = arrayToBST(l, m-1, nums);
    root.right = arrayToBST(m+1, r, nums);
    return root;
};

var sortedArrayToBST = function (nums) {
  return arrayToBST(0, nums.length-1, nums);
};

const root = sortedArrayToBST([-10, -3, 0, 5, 9]);
console.log(root.right.right.val)