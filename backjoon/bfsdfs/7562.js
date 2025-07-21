// https://www.acmicpc.net/problem/7562

function move(mSize, start, end) {
    const map = Array.from({length: mSize}, () => new Array(mSize).fill(0));
    const direction = [[-2,-1], [-1,-2], [+1, -2], [+2, -1], [-2, +1], [-1, +2], [+1, +2], [+2, +1]];
    let minVal = Number.MAX_VALUE;
    const queue = [[start[0], start[1], 0]];

    while(queue.length > 0){
        const [x, y, count] = queue.shift();
        if(x === end[0] && y === end[1]) {
            break;
        }
    
        for(let d = 0; d < direction.length; d++){
            if(x + direction[d][0] >= 0 && y + direction[d][1] >= 0 && 
                x + direction[d][0] < mSize && y + direction[d][1] < mSize 
                && map[x + direction[d][0]][y + direction[d][1]] === 0){
                map[x + direction[d][0]][y + direction[d][1]] = count + 1;
                queue.push([x + direction[d][0], y + direction[d][1], count+1]);
            }            
        }
    }
    console.log(map[end[0]][end[1]]);
}
function solution(){
    const lines = require("fs").readFileSync("./backjoon/data-structure/index.txt").toString().split('\n');
    const tc = Number(lines[0].trim());

    for(let i = 0; i < tc*3; i+=3){
        
            const map = Number(lines[i+1].trim());
        
            const start = lines[i+2].trim().split(' ').map(Number);
            const end = lines[i+3].trim().split(' ').map(Number);
            if(start === end) {
                continue;
            }
            move(map, start, end);
        
    }

}solution();