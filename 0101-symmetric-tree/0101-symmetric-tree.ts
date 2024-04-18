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

function isEqual(left: TreeNode, right: TreeNode){
    if(left && !right){
        return false;
    }
    if(right && !left){
        return false;
    }
    
    if(!right && !left){
        return true;
    }
    
    if(left.val === right.val){
        return true && isEqual(left.left, right.right) && isEqual(left.right, right.left);
    }
    
    return false;
}

function isSymmetric(root: TreeNode | null): boolean {
    return isEqual(root.left, root.right);
};