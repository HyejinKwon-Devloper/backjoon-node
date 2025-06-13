// https://school.programmers.co.kr/learn/courses/30/lessons/43165?language=javascript
let answer = 0;
function bfs (idx, numbers, target, sum){
    if(idx >= numbers.length ){
        if(sum === target){
            answer+=1;
            return sum;
        }
        else {
            return sum;
        }
    }
    bfs(idx+1, numbers, target, numbers[idx] * 1 + sum);
    bfs(idx+1, numbers, target, numbers[idx] * -1 + sum);

}

function solution (numbers, target){
   
    bfs(0, numbers, target, 0 );
    console.log(answer);
   return answer;
}

solution([4, 1, 2, 1], 4);