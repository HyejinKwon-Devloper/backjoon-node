// https://school.programmers.co.kr/learn/courses/30/lessons/43162
function solution(n, computers){
    var answer = 0;
    var visited = new Array(n);
    function graph(idx){
       
        var queue = new Array();
        for(var j = 0; j < n; j++){
           if(computers[j][idx] && !visited[j]){
             queue.push(j);
             visited[j] = 1;
           }
        }
        for(var k = 0; k < queue.length; k++){
            console.log('queue',queue[k]);
            graph(queue[k]);
        }
    }
   
    // 시작
    for(var i = 0; i < n; i++){
        if(!visited[i]){
            visited[i] = 1;
            graph(i);
            answer++;
        }
    }
    console.log(answer);
    return answer;
}
solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]);