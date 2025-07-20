// https://www.acmicpc.net/problem/2178

function solution2(){
    const lines = require("fs").readFileSync("/dev/stdin").toString().split('\n');
    const [N,M] = lines[0].trim().split(' ').map(Number);
    const miro = Array.from({length: N}, () => new Array(M));
    const visited = Array.from({length: N}, () => new Array(M).fill(false));
    
    let minVal = Number.MAX_VALUE;

    const dp = [];
    
    for(let i = 1; i <= N; i++){
        miro[i-1] = lines[i].trim().split('').map(Number);
    }

    function bfs(i , j, count){
        if(i < 0 || j < 0) {
            return false;
        }
        if(visited[i][j]){
            return false;
        }
       
        if(miro[i][j] === 0){
            return false;
        }
        if(i === N-1 && j === M-1){
            count++;
    
            minVal = Math.min(minVal, count);
            // console.log(minVal);
            return true;
        }

        visited[i][j] = true;
    
        count++;
        // 왼쪽
        // if(j-1 >= 0 && !visited[i][j-1]) dfs(i, j-1);
        if(j-1 >= 0 && !visited[i][j-1]) dp.push([i, j-1, count]);
        // 아래
        // if(i+1 < N && !visited[i+1][j]) dfs(i+1, j);
        if(i+1 < N && !visited[i+1][j]) dp.push([i+1, j, count]);
        // 오른쪽
        // if(j+1 < M && !visited[i][j+1]) dfs(i, j+1);
        if(j+1 < M && !visited[i][j+1]) dp.push([i, j+1, count]);
        // 위
        // if(i-1 >= 0 && !visited[i-1][j]) dfs(i-1, j);
        if(i-1 >= 0 && !visited[i-1][j]) dp.push([i-1, j, count]);
      
        //console.log(dp);
        while(dp.length > 0){
            const [x, y, c] = dp.shift();
            // visited[x][y] = true;
            
            
            //console.log('체크', x, y, count);
            if(!bfs(x, y, c)){
                count--;
            }
            //console.log(count)
        }   
      
   
        return true;

    }
    bfs(0 , 0, 0);
    console.log(minVal);
}
solution2();
function solution(){
    const lines = require("fs").readFileSync("./backjoon/data-structure/index.txt").toString().split('\n');
    const [N,M] = lines[0].trim().split(' ').map(Number);
    const miro = Array.from({length: N}, () => new Array(M));
    
    let minVal = Number.MAX_VALUE;

    const dp = [];
    
    for(let i = 1; i <= N; i++){
        miro[i-1] = lines[i].trim().split('').map(Number);
    }

    function bfs(){
        const [i, j, c] = dp.shift();
        if(i < 0 || j < 0) {
            return false;
        }
        if(i === N-1 && j === M-1){
            minVal = Math.min(minVal, c+1);
            return true;
        }    
        // 왼쪽
        if(j-1 >= 0 && miro[i][j-1]!=0 )
            { 
                dp.push([i, j-1, c+1]);
                miro[i][j-1]=0;
            }
        // 아래
        if(i+1 < N && miro[i+1][j]!=0)
            { 
                dp.push([i+1, j, c+1]);
                miro[i+1][j]=0;
            }
        // 오른쪽
        if(j+1 < M && miro[i][j+1]!=0)
            {
                dp.push([i, j+1, c+1]);
                miro[i][j+1]=0;
            }
        // 위
        if(i-1 >= 0 && miro[i-1][j]!=0)
            {
                 dp.push([i-1, j, c+1]);
                 miro[i-1][j]=0;
            }
        bfs()
   
        return true;

    }
    dp.push([0,0,0]);
    bfs();
    console.log();
}
solution();