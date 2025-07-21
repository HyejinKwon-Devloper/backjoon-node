// https://www.acmicpc.net/problem/11725

function solution(){
    const lines = require("fs").readFileSync("./backjoon/data-structure/index.txt").toString().split('\n');

    const N = Number(lines[0].trim());
   
    const dp = [];
    const visited = new Array(N+1).fill(0);//parent

    for(let a = 1; a < N; a++){
        const [v1, v2] = lines[a].trim().split(' ').map(Number);
        if(dp[v1] === undefined){
            dp[v1] = [v2];
        }else  dp[v1].push(v2);
        if(dp[v2] === undefined){
            dp[v2] = [v1];
        }else dp[v2].push(v1);
    }
    function dfs(index){
        for(let j = 0; j < dp[index].length; j++){
            if(!dp[index][j] || visited[dp[index][j]] !=0 ){
                continue;
            }
            visited[dp[index][j]] = index;
            dfs(dp[index][j]);
        }       
    }
    visited[1]=1
    dfs(1);
    
    console.log(visited.filter((item, index) => index > 1).join('\n'));
    
}
solution();