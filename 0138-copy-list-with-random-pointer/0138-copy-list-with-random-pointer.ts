/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

//링크드 리스트 복사
//기존 노드를 새 노드로 생성
//기존 노드의 랜덤 포인터도 새로 잡아줘야함
//새 노드가 모두 만들어지지 않으면
//랜덤 포인터를 잡아줄 수 없음 -> 노드를 일단 다 생성해야함
//몇번째 노드였는지 알 수 없음
//노드를 맵에 저장
//일단 다 만들고 순차 연결할 때 새로 연결도 해주면 되지 않을까?

function copyRandomList(head: Node | null): Node | null {
    const oldAndNew = new Map<Node, Node>();
    
    let cur = head;
    while(cur!=null){
        const newNode = new Node(cur.val,null,null);
        oldAndNew.set(cur,newNode);
        cur = cur.next;
    }
    
    const newHead = oldAndNew.get(head);
    let newCur = newHead;
    cur = head;
    while(cur!=null){
        newCur.next = oldAndNew.get(cur.next) || null;
        newCur.random = oldAndNew.get(cur.random) || null;
        cur = cur.next;
        newCur = newCur.next;
    }
    
    return newHead;
    
};