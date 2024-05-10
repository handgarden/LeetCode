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


function sum(target: number, total: number, curNode: TreeNode){
    if(!curNode){
        return false;
    }

    const curVal = total + curNode.val;
    if(!curNode.left && !curNode.right && curVal == target){
        return true;        
    }    
    
    
    return sum(target, curVal, curNode.left) || sum(target, curVal, curNode.right); 
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    return sum(targetSum, 0, root);
};