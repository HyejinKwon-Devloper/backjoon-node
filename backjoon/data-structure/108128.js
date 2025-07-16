// https://www.acmicpc.net/problem/10828


function push(stack, item){
    stack.push(item);
}

function pop(stack){
    const item = stack.pop();
    return item ? item : -1;
}

function size(stack){
    return stack.length != undefined ? stack.length : 0;
}

function empty(stack){
    const isEmpty = stack.length != undefined ? stack.length > 0 ? false : true : true;
    return isEmpty ? 1:0;
}

function top(stack){
    const length = stack.length;
    const item = length ? stack[length-1] : -1;
    return item;
}

function solution(){
    const lines = require('fs').readFileSync('./backjoon/data-structure/index.txt').toString().split('\n');

    const N = lines[0];
    const stack = new Array();
    const result = [];

    for(let i = 1; i <= N; i++){
        const row = lines[i].trim();;
        const keyval = row.split(' '); // push의 경우 1번째에 val이 있음
        switch(keyval[0]){
            case 'push': 
                push(stack, keyval[1]);
                break;
            case 'pop':
                result.push(pop(stack));
                break;
            case 'size':
                result.push(size(stack));
                break;
            case 'empty':
                result.push(empty(stack));
                break;
            case 'top':
                result.push(top(stack));
                break;
            default:
                console.log('keyval', keyval[0]);
                break;
        }
        
    }
    console.log(result.join('\n'));

}

solution();