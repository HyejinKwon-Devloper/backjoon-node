// https://school.programmers.co.kr/learn/courses/30/lessons/43163

function notInclude(target, words){
    if(!words.find((res) => {
        return res === target;
    })){
        return false;
    }
   
    return true;
}

function findSimilarWords(visited, begin, target, words, result){
    console.log(visited)
    if(begin === target){
        return result;
    }
    const target_spells = target.split('');
    const queue = new Array();
 
    // 단어 일치도 세기
    for(var i = 0; i < words.length; i++){
        if(words[i] === target) continue;
        if(visited.find((res) => {  
           return res == words[i];
        })){
            console.log('visited');
            continue;
        }
        const spells = words[i].split('');
        let count = 0;
        for(var a = 0; a < target.length; a++){
            for(var j = 0; j < spells.length; j++){
                if(target_spells[a] === spells[j]){
                    count++;
                }
            }    
        }
        console.log(words[i], count);
        // 두 글자 이상 일치한 글자 queue에 넣기
        if(count >= 2){
            queue.push(words[i]);
        }      
        
    }
    // queue에 넣은 글자대로 또 일치하는 글자 찾기
    if(queue.length > 0){
        while(queue.length > 0 ){
            const word = queue.shift();
            console.log('word : ', word);
            visited.push(word);
            result = findSimilarWords(visited, begin, word, words, result++);
        }
    }
    return result;
}

function solution(begin, target, words) {
    var answer = 0;

    let visited = new Array(words.length);
    if(!notInclude(target, words)){
        return answer;
    }
   answer = findSimilarWords(visited, target, begin, words, 0);

    console.log(answer);
    return answer;
}

solution("hit",	"cog",	["hot", "dot", "dog", "lot", "log", "cog"]);