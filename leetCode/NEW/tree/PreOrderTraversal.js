function TreeNode(val, left, right){
    this.val = val;
    this.left = left;
    this.right = right;
}

var preorderTraversalWithRecursion = function(root) {
    
    if(!root){
        return;
    }

    console.log(root.val);
    preorderTraversal(root.left);
    preorderTraversal(root.right);
};

var preorderTraversalUsingLoop = function(root) {
    const stack = [];

    stack.push(root);

    while(stack.length > 0){
        const current = stack.pop();
        console.log(current.val);

        if(current.right){
            stack.push(current.right);
        }

        if(current.left){
            stack.push(current.left);
        }
    }
};


const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

// preorderTraversalWithRecursion(root);

preorderTraversalUsingLoop(root);
