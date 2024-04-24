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
    let length = 0;
    while(cur){
        length++;
        cur = cur.next;
    }
    const find = length - n - 1;
    let i = 0;
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