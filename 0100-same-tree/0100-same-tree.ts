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

function level(que: (TreeNode|null)[], arr:(number|null)[]){
    while(que.length){
        const n = que.pop();
        arr.push(n ? n.val : n as null);
        if(!n){
            continue;
        }
        que.push(n.left);

        que.push(n.right);    
    }
    
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const pArr: (number | null)[] = [0];
    const qArr: (number | null)[] = [0];
    
    const pQue = [];
    pQue.push(p);
    const qQue = [];
    qQue.push(q);
    
    level(pQue,pArr);
    level(qQue,qArr);
    
    console.log(pArr,qArr)
    
    if(pArr.length != qArr.length){
        return false;
    }
    
    for(let i =0; i <pArr.length; i++){
        if(pArr[i] != qArr[i]){
            return false;
        }
    }
    
    return true;
};