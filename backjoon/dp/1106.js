// https://www.acmicpc.net/problem/1106

function solution(){
    const lines = require("fs").readFileSync("./backjoon/data-structure/index.txt").toString().split('\n');

    const [C, N] = lines[0].split(' ').map(Number);
    const dp = Array.from({length: N+1}, () => new Array(C+1).fill(Number.MAX_VALUE));
        
    for(let i = 1; i <= N; i++){
        
        const [cost, people] = lines[i].split(' ').map(Number);
        for(let j = 1; j <= C; j++){
            
            let prevMinCost = Number.MAX_VALUE;
            
            for(let a = 0; a <= Math.floor(j  / 2); a++){
                // 현재 cost 정수배 비용과 이전 값들 조합의 합 중 min값
                prevMinCost = Math.min(prevMinCost, dp[i-1][j]);
                prevMinCost = Math.min( prevMinCost, dp[i][a] + dp[i][j-a]);
            }


            let totalCost = 0;
            let marketingPeople = 0;
            while(marketingPeople < j){
                marketingPeople += people;
                totalCost += cost;
            }

            dp[i][j] = Math.min(prevMinCost, totalCost);
            
        }
                
    }
    console.log(dp[N][C]);
}solution();