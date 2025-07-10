// https://school.programmers.co.kr/learn/courses/30/lessons/43164


function search(answer, key, tickets, n, visited){

    if(answer.length === n+1) return true;

    // key값을 출발지로 가진 항공편 찾기
    for(var a = 0; a < tickets.length; a++){
        if(visited[a] || tickets[a][0] !== key){continue;}
        visited[a] = true;
        answer.push(tickets[a][1]);
        if(search(answer, tickets[a][1], tickets, n, visited)){
            return true;
        }
        visited[a] = false;
        answer.pop();
    }
    return false;

}   

// step 1. sorting
// step 2. ICN 찾기
function solution(tickets) {
    const n = tickets.length;
    const visited = new Array(n).fill(false);
    const answer = ["ICN"];

    tickets.sort((a, b) => {

        if(a < b){
            return -1;
        }
        if(a > b) {
            return 1;
        }
        if( a === b ){
            if(a[1] < b[1]){
                return -1;
            }
            if(a[1] > b[1]){
                return 1;
            }
            return 0;
        }
    });
   
   for (let i = 0; i < n; i++) {
        
        if(tickets[i][0] === 'ICN'){ 
            visited[i] = true;
           
            answer.push(tickets[i][1]);

            if (search(answer, tickets[i][1], tickets, n, visited)) {
                console.log(answer);
                return answer;
                
            }

            // 백트래킹
            visited[i] = false;
            answer.pop();
        }
        
    }
    
    console.log(answer);
    return answer;
}


solution([["ICN", "BBB"], ["BBB", "ICN"], ["ICN", "AAA"]]);
