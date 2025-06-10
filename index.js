// import doFibonacci from "./dp/fibonacci";
// import readline from "node:readline";

// let fs = require("fs");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // const filePath =
// //   process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

// (() => {
//   const input = new Array<number>();
//   let numbers = [];
//   rl.on("line", (n) => {
//     input.push(parseInt(n));
//   }).on("close", function () {
//     for (let i = 1; i < input.length; i++) {
//       if (input[i]) {
//         const current = input[i];
//         numbers.push(current);
//         doFibonacci(current);
//       }
//     }
//     process.exit();
//   });
// })();

let fs = require("fs");
let readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function fibonacci(n, output) {
  if (n === 0) {
    output[0][0]++;
    return 0;
  } else if (n === 1) {
    output[1][1]++;
    return 1;
  } else {
    const result = fibonacci(n - 1, output) + fibonacci(n - 2, output);
    console.log("n : : ", n);
    const zero = output[n - 1][0] + output[n - 2][0];
    const one = output[n - 1][1] + output[n - 2][1];

    console.log(
      output[n - 1][0],
      output[n - 1][1],
      output[n - 2][0],
      output[n - 2][1]
    );
    output[n] = [zero, one];
    return result;
  }
}

function doFibonacci(n) {
  const output = new Array(n + 1).fill(0).map(() => new Array(2).fill(0));
  fibonacci(n, output);
  console.log(n, " : ", output[n][0], output[n][1]);
}

(() => {
  const input = new Array();
  rl.on("line", (n) => {
    input.push(n);
  }).on("close", function () {
    for (let i = 1; i < input.length; i++) {
      if (input[i]) {
        const current = parseInt(input[i]);
        console.log("current", current);
        // doFibonacci(current);
      }
    }
    process.exit();
  });
})();
