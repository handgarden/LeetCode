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

function bSearch(stack: number[], node: TreeNode){
    if(node.right){
        bSearch(stack, node.right);
    }
    stack.push(node.val);
    if(node.left){
        bSearch(stack, node.left);
    }
}

function kthSmallest(root: TreeNode | null, k: number): number {
    const stack:number[] = [];
    bSearch(stack, root);
    
    return stack[stack.length - k];
};