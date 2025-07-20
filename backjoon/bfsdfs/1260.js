// https://www.acmicpc.net/problem/1260
const bfs_arr = [];
const dfs_arr = [];

function bfs(nodes, visited, start, queue){
    
    const visitNodes = nodes[start];
    for(let a = 0; a < visitNodes.length; a++){
        if(visited[a] || visitNodes[a] === 0) {
            continue;
        }else {
            visited[a] = true;
            queue.push(a);      
            bfs_arr.push(a);
        }
    }
    while(queue.length > 0){
        bfs(nodes, visited, queue.shift(), queue);
    }
    
}
function dfs(nodes, visited, start){
     
    const visitNodes = nodes[start];
  
    dfs_arr.push(start);
    visited[start] = true;
    for(let i = 0; i < visitNodes.length; i++){
        if(visited[i] || visitNodes[i] === 0){
            continue;
        }else {
            dfs(nodes, visited, i);
        };
    }
   
}

function solution(){
    const lines = require("fs").readFileSync("./backjoon/data-structure/index.txt").toString().split('\n');
    
    const [N, M, V] = lines[0].trim().split(' ').map(Number);
    const visited = new Array(N+1).fill(false);

    const tb = Array.from({length: N+1}, () => new Array(N+1).fill(0));

    for(let i = 1; i < lines.length; i++){
        const [v1, v2] = lines[i].trim().split(' ').map(Number);
        tb[v1][v2] = 1;
        tb[v2][v1] = 1;
    }

    visited[V] = true;
    dfs(tb,visited, V);
    visited.fill(false);
    visited[V] = true;
    bfs_arr.push(V);
    const queue = [];
    bfs(tb, visited, V, queue);

    console.log(dfs_arr.join(' '));
    console.log(bfs_arr.join(' '));
    
}
solution();