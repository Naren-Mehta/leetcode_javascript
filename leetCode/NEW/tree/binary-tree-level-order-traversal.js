function TreeNode(val, left, right){
    this.val = val;
    this.left = left;
    this.right = right;
}

// function insert(root, val){
//     const node = new TreeNode(val);

//     if(root){
//         const current = node;
//         while(current.next != null){

//         }
//     }
// }

var levelOrder = function(root) {
    const results = [];
    const queue = [];

    if(!root){
        return results;
    }

    queue.push(root);

    while(queue.length > 0) {
        const levelNodes = [];
        const queueLength = queue.length;

        for(let i=0; i<queueLength; i++){
            const node = queue[0];

            if(node && node.left){
                queue.push(node.left)
            }
    
            if(node && node.right){
                queue.push(node.right)
            }

            levelNodes.push(queue.shift().val);
        };

        results.push(levelNodes);
    }

    return results;
};

const root = new TreeNode(3);

root.left = new TreeNode(9);
root.right = new TreeNode(20);

root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

const results = levelOrder(root);

console.log("===", results);