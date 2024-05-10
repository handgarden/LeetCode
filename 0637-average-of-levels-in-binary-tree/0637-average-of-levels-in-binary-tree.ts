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

function levelSearch(que: TreeNode[]){
    const levelQue = [];
    let total = 0;
    const count = que.length;
    
    while(que.length){
        const curNode = que.pop();
        
        total += curNode.val;
        
        const left = curNode.left;
        const right = curNode.right;
        
        if(left){
            levelQue.push(left);
        }
        if(right){
            levelQue.push(right);
        }
    }

    return {
        levelQue,
        avg: total / count
    }
}


function averageOfLevels(root: TreeNode | null): number[] {
    let que: TreeNode[] = [];
    const result:number[] = [];
    que.push(root);
    while(que.length){
        const {levelQue, avg} = levelSearch(que);
        result.push(avg);
        que = levelQue;
    }
    return result;
};