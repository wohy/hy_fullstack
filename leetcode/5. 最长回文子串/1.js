/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。
示例 1：
输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：
输入：s = "cbbd"
输出："bb"
*/

// 方法一 动态规划
var longestPalindrome1 = function(s) {
    let len = s.length, res = '';
    let dp = Array.from(new Array(len), ()=>(new Array(len).fill(0)))
    for(let i = 0; i < len; i++) {
        for(let j = i; j >= 0; j--) {
            // dp[j][i] 为 true 则 说明 从 j -> i 满足回文条件
            // dp[j][i] 要为 true 就需要 s[i] == s[j] 当前的 i 位置上的字符 与 当前 j 位置上的字符相等 且 i 和 j 相邻 或者 j 和 i 之前的子串也满足回文
            dp[j][i] = s[i] == s[j] && (i-j < 2 || dp[j+1][i-1])

            if(dp[j][i] && i - j + 1 > res.length) {
                res = s.substring(j, i+1);
            }
        }
    }
    return res
}


var longestPalindrome = function(s) {

    let palindrome = function(target, l, r) {
        let arr1 = target.split('').slice(l, r), arr2 = arr1.reverse()
        if(arr == arr2) {
            return arr1.join('');
        }
    }
    let i = 0, j = s.length - 1, res = '';
    

};