// https://school.programmers.co.kr/learn/courses/30/lessons/1844



function solution(maps){
    var answer = -1;
    var m = maps[0].length;
    var n = maps.length;
    var visited = new Array(n);
    var queue = [[0,0,1]]; // 처음 시작 점
    
    for(var j = 0; j < n; j++){
        visited[j] = new Array(m);
    }
    visited[0][0]=1;

    
    function checkMove(n, m, x, y){//비지티드, 갈수없는길
        if(x < 0 || y < 0) {
            return false;
        }
        if(x >= n || y >= m){
            return false;
        }
            if(maps[x][y]==0){
            return false;
        }
    
        if(visited[x][y]){
            return false;
        }
        return true;
    }

    const dx = [1, 0, -1, 0]; // 오른쪽 아래 왼쪽 위
    const dy = [0, 1, 0, -1];

   
    // stack.pop -> 뒤에서부터 빼는거 -> dfs / 후입선출/pop
    // queue.pop -> 앞에서부터 뺴는거 -> bfs / 선입선출/shift 
    
    while(queue.length > 0) {
        const [x, y , distance] = queue.shift();
        if(x==n-1 && y==m-1){
            answer=distance;
            break;
        }
        for(var i = 0; i < 4; i++) {
            if(checkMove(n, m, x + dx[i], y + dy[i])){
                queue.push([x+dx[i], y+dy[i], distance+1]);
                visited[x+dx[i]][y+dy[i]] = 1;
            }
        }
          
    }
    return answer;
}

solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]);