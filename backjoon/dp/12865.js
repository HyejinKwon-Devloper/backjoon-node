// https://www.acmicpc.net/problem/12865

function solution(){
    const lines = require("fs").readFileSync("./backjoon/data-structure/index.txt").toString().split('\n');
    const info = lines[0].split(" ");
    const itemCount = Number(info[0]);
    const maxWeight = Number(info[1]);


    const items = new Array(itemCount + 1);
    for(let i = 0; i <= itemCount; i++){
        items[i] = new Array(maxWeight + 1).fill(0);
    }

    for(let index = 1 ; index <= itemCount; index++){
        for(let weight = 1; weight <= maxWeight; weight++){
            const [itemWeight, itemValue] = lines[index].split(' ').map(Number);

            if(itemWeight > weight) {
                items[index][weight] = items[index-1][weight];
            }else {
                items[index][weight] = Math.max(items[index-1][weight], items[index-1][weight-itemWeight] + itemValue);
                }
        }

    }
    console.log(items[itemCount][maxWeight]);
}
solution();