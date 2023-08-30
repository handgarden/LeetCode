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

function rightSideView(root: TreeNode | null): number[] {
    const result = [];
    if(!root){
        return result;
    }
    

    const que = [];
    que.push(root);
    let size = 1;
    while(que.length){
        let newSize = 0;
        for(let i = 0; i<size;i++){
            const cur = que.shift();
            if(i==size-1){
                result.push(cur.val);
            }
            if(cur.left){
                que.push(cur.left);
                newSize++;
            }
            if(cur.right){
                que.push(cur.right);
                newSize++;
            }
        }
        size = newSize;
    }
    return result;
};