// https://www.acmicpc.net/problem/1463


function solution(){

    const input = require('fs').readFileSync('./backjoon/data-structure/index.txt').toString().split('\n');
    const number = Number.parseInt(input[0]);

    const dp = new Array(number+1).fill(0);

    calc();
    function calc (){
        // 3으로 나눠지면 3으로 나눈다
        // 2로 나눠지면 2로 나눈다
        // 1을 뺀다
        dp[1] = 0;
        for(let i = 2; i <= number; i++){
            dp[i] = dp[i-1] + 1;
            if(i%2 === 0) {
                dp[i] = Math.min(dp[i/2] + 1, dp[i]);
            }
            if(i%3 === 0){
                dp[i] = Math.min(dp[i/3] + 1, dp[i]);
            }
        }
      
    }
    console.log(dp[number]);

}solution();