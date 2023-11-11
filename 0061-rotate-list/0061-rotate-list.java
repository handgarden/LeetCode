import java.util.*;

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode rotateRight(ListNode head, int k) {
        if(head == null){
            return head;
        }
        
        // (back) / (front = k) -> (front = k) / (back)
        
        // cur(0) ~ cur_end(0 ~ ?) / back ~ back_end(? ~ end)
        // end - ? = k
        // ? = end - k
        
        //head ~ size - k까지를 tail로 이동 
        //tail 정보가 필요 -> next  설정
        //size-k의 next = null
        //head를 size-k로 변경
        
        //tail 정보 찾기 + size 찾기
        int size = 1;
        ListNode cur = head;
        while(cur.next != null){
            cur = cur.next;
            size++;
        }
        
        k %= size;
        if(k == 0){
            return head;
        }
        
        //size-k이면 next null로 변경 = 이걸 size 없이 못 구함
        //size-k+1 = newHead
        cur = head;
        int i = 1;
        ListNode newHead = null;
        while(cur.next!=null){
            if(i == size - k){
                newHead = cur.next;
                cur.next = null;
                cur = newHead;
                i++;
                continue;
            }
            cur = cur.next;
            i++;
        }
        
        //tail에 head를 next로 설정
        cur.next = head;
        
        return newHead;
    }
}