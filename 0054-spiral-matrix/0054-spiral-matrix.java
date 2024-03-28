class Solution {
    class Index {
        int x;
        int y;
        public Index(int x, int y){
            this.x = x;
            this.y = y;
        }
    }

    class Direction {
        Index[] dir = {new Index(1,0), new Index(0,1), new Index(-1,0), new Index(0,-1)};
        int cur = 0;

        Index getDir(){
            return dir[cur];
        }

        void next(){
            cur +=1;
            cur %=4;
        }
    }

    class Rotater{
        Index index = new Index(0,0);
        Direction dir = new Direction();
        boolean[][] visited;
        int moved = 0;

        public Rotater(int x, int y){
            this.visited = new boolean[y][x];
        }

        Index getIndex(){
            visited[index.y][index.x] = true;
            Index curDir = dir.getDir();
            
            int nextX = index.x + curDir.x;
            int nextY = index.y + curDir.y;

            if(nextX < 0 || nextY < 0 || nextX >= visited[0].length || nextY >= visited.length || visited[nextY][nextX]){
                dir.next();
                curDir = dir.getDir();
                nextX = index.x + curDir.x;
                nextY = index.y + curDir.y;
            }
            index = new Index(nextX, nextY);
            return index;
        }
    }

    public List<Integer> spiralOrder(int[][] matrix) {
        int i = 0;
        Rotater r = new Rotater(matrix[0].length, matrix.length);
        List<Integer> list = new ArrayList();
        list.add(matrix[0][0]);

        while(true){
            if(i >= matrix[0].length * matrix.length - 1){
                break;
            }
            i++;
            Index curIndex = r.getIndex();
            list.add(matrix[curIndex.y][curIndex.x]);
        }

        return list;
    }
}