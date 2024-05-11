/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class BSTTraversaler{
    private readonly result:number[] = [];
    constructor(root: TreeNode | null){
        if(root){
            this.traversal(root);
        }
    }
    
    private traversal(node: TreeNode){
        if(node.left){
            this.traversal(node.left);
        }
        this.result.push(node.val);
        if(node.right){
            this.traversal(node.right);
        }
    }

    getResult(){
        return [...this.result];
    }
}

class BSTIterator {
    private readonly result: number[]
    constructor(root: TreeNode | null) {
        const traversaler = new BSTTraversaler(root);
        const result = traversaler.getResult();
        this.result = result;
    }

    next(): number {
        return this.result.shift();
    }

    hasNext(): boolean {
        return !!this.result.length;
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */