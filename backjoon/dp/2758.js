// https://www.acmicpc.net/problem/2758

function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

function solution(){
    const lines  = require("fs").readFileSync("./backjoon/data-structure/index.txt").toString().split('\n');

    const N = Number(lines[0]);

    for(let i = 1; i <= N; i++){ 
        // M개의 숫자 중에 n개를 꼽아 1세트
        const [n , m] = lines[i].split(' ').map(Number);

        const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
        
        for(let i = 1; i <= n; i++ ){
            for(let j = 1; j <= m; j++){
                if(i === 1){
                    dp[i][j] = 1;
                    continue;
                }
                let sum = 0;
                for(let a = Math.floor(j/2); a> 0; a--){
                    sum += dp[i-1][a];
                }
                dp[i][j] = sum;
                
            }
            
        }
        let sum = 0;
        for(let a = m; a> 0; a--){
            sum += dp[n][a];
        }
                
        console.log(sum);

    }
}

solution();