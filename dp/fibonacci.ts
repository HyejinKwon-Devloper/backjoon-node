function fibonacci(n: number, zerone: Array<number>): number {
  if (n === 0) {
    zerone[n]++;
    return 0;
  } else if (n === 1) {
    zerone[n]++;
    return 1;
  } else {
    const prev = fibonacci(n - 1, zerone);
    const pprev = fibonacci(n - 2, zerone);
    return prev + pprev;
  }
}

export default function doFibonacci(n: number) {
  const zerone = new Array<number>(2);
  zerone[0] = 0;
  zerone[1] = 0;
  fibonacci(n, zerone);
  console.log("zero", zerone[0], "  one ", zerone[1]);
}
