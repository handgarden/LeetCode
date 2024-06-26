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
    let cur = head;
    let i = 0;
    while(cur){
        i++;
        cur = cur.next;
    }
    const find = i - n - 1;
    i = 0;
    if(find < i){
        return head.next;
    }
    cur = head;
    while(i < find){
        cur = cur.next;
        i++;
    }
    if(cur && cur.next){
        cur.next = cur.next.next;    
    }
    return head;
};