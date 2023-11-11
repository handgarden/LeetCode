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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if(!head.next){
        return head;
    }
    
    const stack:ListNode[] = [];
    
    const newList = new ListNode();
    
    left = left-1;
    let curHead = head;
    let newHead = newList;
    for(let i = 0; i<left;i++){
        newHead.next = new ListNode(curHead.val);
            newHead = newHead.next;
        curHead = curHead.next;
    }
    
    for(let i = left; i<right;i++){
        stack.push(curHead);
        curHead = curHead.next;
    }
    
    while(stack.length){
        const node = stack.pop();
        newHead.next = new ListNode(node.val);
        newHead = newHead.next;
    }
    
    while(curHead?.next!=null){
        newHead.next = new ListNode(curHead.val);
        newHead = newHead.next;
        curHead = curHead.next;
    }
    if(curHead){
        newHead.next = new ListNode(curHead.val);    
    }
    
    return newList.next;
};