//https://www.acmicpc.net/problem/1003

function solution(){
    const lines = require("fs").readFileSync('./backjoon/data-structure/index.txt').toString().split('\n');
    const N = lines[0];
    
    for(let i = 1 ; i <= N; i++){
        const dp = new Array(lines[i]+1).fill("");

        for(let a = 0; a <= Number(lines[i]); a++){
            fibonacci(a, dp);    
        }
        console.log(dp[Number(lines[i])]);
    }
    
    function fibonacci(n, dp) {
        if(n < 0) {
            return;
        }
        if (n === 0) {
            dp[0] = "1 0";
            return "1 0";
        } else if (n === 1) {
            dp[1] = "0 1";
            return "0 1";
        } else {
            const prev = dp[n-1].split(' ');
            const pprev = dp[n-2].split(' ');
            const zero =  Number(prev[0]) + Number(pprev[0]);
            const one = Number(prev[1]) + Number(pprev[1]);
            dp[n] = zero + ' ' + one;
            
            return dp[n];
        }
    }

}
solution();
