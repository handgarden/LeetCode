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

function sortList(head: ListNode | null): ListNode | null {
    if(!head){
        return head;
    }
    
    const list = makeList(head);
    const merged = mergeSort(list);
    
    const newHead = merged[0];
    let cur = newHead;
    for(let i = 1; i<merged.length; i++){
        cur.next = merged[i];
        cur = cur.next;
    }
    return newHead;
};

function mergeSort(list: ListNode[]){
    console.log(list);
    if(list.length < 2){
        return list;
    }
    
    const pivot = Math.floor((0 + list.length) / 2);
    
    const left = mergeSort(list.slice(0, pivot));
    const right = mergeSort(list.slice(pivot));
    
    const merged = merge(left, right);
    return merged;
}

function makeList(head: ListNode){
    const arr:ListNode[] = [];
    let cur: ListNode = head;
    while(cur){
        const next = cur.next;
        cur.next = null;
        arr.push(cur);
        cur = next;
    }
    return arr;
}

function merge(left: ListNode[], right: ListNode[]){
    const merged: ListNode[] = [];
    
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex].val < right[rightIndex].val){
            merged.push(left[leftIndex++]);
        }else{
            merged.push(right[rightIndex++]);
        }
    }
    
    while(leftIndex < left.length){
        merged.push(left[leftIndex++]);
    }
    while(rightIndex < right.length){
        merged.push(right[rightIndex++]);
    }
    
    return merged;
}