/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */

function cloneNode(node: _Node, map: Map<number, _Node>){
    const nNode = new _Node(node.val);
    map.set(node.val, nNode);
    const neighbors = node.neighbors;
    const clonedNeighbors = [];
    for(const neighbor of neighbors){
        if(!map.has(neighbor.val)){
            cloneNode(neighbor, map);
        }
        const val = map.get(neighbor.val);
        clonedNeighbors.push(val);        
    }
    nNode.neighbors = clonedNeighbors;
}


function cloneGraph(node: _Node | null): _Node | null {
    if(!node){
        return node;
    }
    const clonedRoot = new _Node(node.val);
    const map = new Map<number, _Node>();
    
    //DFS
    cloneNode(node, map);
    return map.get(node.val);
};