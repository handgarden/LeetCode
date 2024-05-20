/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// function printNode(head: ListNode){
//     let cur = head;
//     while(cur){
//         console.log(cur.val);
//         cur = cur.next;
//     }
// }

function partition(head: ListNode | null, x: number): ListNode | null {
    let left =  new ListNode();
    let right = new ListNode();
    
    let leftCur = left;
    let rightCur = right;
    let cur = head;
    while(cur){        
        const next = cur.next;
        cur.next = null;
        if(cur.val < x){
            leftCur.next = cur;
            leftCur = leftCur.next;
        }else{
            rightCur.next = cur;
            rightCur = rightCur.next;
        }
        cur = next;
        // console.log('left');
        // printNode(left)
        // console.log('right');
        // printNode(right);
        // console.log('==========')
    }
    
    leftCur.next = right.next;
    
    return left.next
};