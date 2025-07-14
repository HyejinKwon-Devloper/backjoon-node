// https://www.acmicpc.net/problem/9012

function solution(){
 
    const fs = require('fs');
    const input = fs.readFileSync('./backjoon/data-structure/index.txt').toString().trim().split('\n');
    let number = input[0];
    
  
    for(let l = 1; l <= number; l++){
        let flag = false;
        let a = input[l].split('');
        const stack = [];
        for(let i = 0; i < a.length; i++){
            if(i === 0 && a[i] === ')') {
                flag = true;
                break;
            }
            if(a[i] === '('){
                stack.push('(');
            }else if(a[i] === ')'){
                if(!stack.pop()){
                    flag = true;
                    break;
                }
            }
        }
        
        if(!flag && stack.length <= 0){
           console.log('YES');
        }else console.log('NO');

    }

}

solution();