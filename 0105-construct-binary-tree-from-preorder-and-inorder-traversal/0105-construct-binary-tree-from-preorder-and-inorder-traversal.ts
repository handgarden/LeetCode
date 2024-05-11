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

function build(inorder: number[], preorder: number[]){
    if(!preorder.length){
        return null;
    }
    const curVal = preorder.shift();
    
    const index = inorder.findIndex(i => i === curVal);
    const left = build(inorder.slice(0, index), preorder.slice(0, index));
    const right = build(inorder.slice(index + 1), preorder.slice(index));
    
    const curNode = new TreeNode(curVal);
    curNode.left = left;
    curNode.right = right;
    return curNode;
}

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const root = build(inorder, preorder);
    return root;
};