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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const stack = [];
    let cur = head;
    while(cur){
        stack.push(cur);
        cur = cur.next;
    }
    let prev = null;
    let i = 1;
    while(stack.length){
        const node = stack.pop();
        if(i==n){
            i++;
            continue;
        }
        node.next = prev;
        prev = node;
        i++;
    }
    head = prev;
    return head;
};