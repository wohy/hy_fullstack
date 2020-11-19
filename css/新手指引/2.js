// 斐波那契数列
function fib(n) {
    let arr = [0n, 1n];
    if (n <= 1) return arr[n];
    for ( let i = 2; i < n + 1; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    console.log(arr[n]);
}
fib(10000) //Number类型时打印Infinity
// Number.MAX_SAFE_INTEGER 最大安全整数 需要有bigint类型 则在0,1后加n