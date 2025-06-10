let memo = new Map();
function checker(info, j, n, markA, m, markB) {
  // 탈출조건

  let resultA = Number.MAX_VALUE;
  let resultB = Number.MAX_VALUE;

  if (j && j >= info.length) {
    //끝 도달시, markA 리턴
    return markA;
  }
  console.log("j", j, info[j][0], info[j][1]);

  if (info[j][0] + markA > n && info[j][1] + markB > m) {
    // 어디가는거든 막혔을때, 못간다 리턴
    return Number.MAX_VALUE;
  }

  if (memo.get(`${j}-${markA}-${markB}`)) {
    return memo.get(`${j}-${markA}-${markB}`);
  }

  // A가 훔친 경우
  if (n > info[j][0] + markA) {
    console.log("A ", info[j][0] + markA, markB);
    resultA = checker(info, j + 1, n, info[j][0] + markA, m, markB);
  }

  // B가 훔친 경우
  if (m > info[j][1] + markB) {
    console.log("B", markA, info[j][1] + markB);
    resultB = checker(info, j + 1, n, markA, m, info[j][1] + markB);
  }
  memo.set(`${j}-${markA}-${markB}`, resultA > resultB ? resultB : resultA);
  return resultA > resultB ? resultB : resultA;
}

function solution(info, n, m) {
  const answer = checker(info, 0, n, 0, m, 0);
  if (answer >= Number.MAX_VALUE) {
    console.log("-1");
    return -1;
  }
  console.log("ANS", answer);
  return answer;
}

solution(
  [
    [3, 3],
    [3, 3],
  ],
  6,
  1
);
