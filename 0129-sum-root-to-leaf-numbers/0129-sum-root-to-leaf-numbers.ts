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

function midSearch(aggregate: string[], prev:string, node: TreeNode){
    const cur =  prev + node.val.toString();
    if(!node.left && !node.right){
        aggregate.push(cur);
        return;
    }
    if(node.left){
        midSearch(aggregate, cur, node.left);        
    }
    if(node.right){
        midSearch(aggregate, cur, node.right);
    }
}

function sumNumbers(root: TreeNode | null): number {
    const aggregate: string[] = [];
    midSearch(aggregate, '', root);
    console.log(aggregate);
    return aggregate.reduce((total, val) => total+Number(val), 0);
};