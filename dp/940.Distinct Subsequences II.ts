// Here we are not actually creating subsequence but just counting by calculating how many subseqence ending on previous character
// this way we get count of all subsequence we can create using all the previously created subsequence
// but it may also contain duplicate if the current char is duplicate, now to count how many duplicate will be created is 
// to reduce the count of subsequence created by that same char previously, as those count of seq can be created again if we skip that char
// so that will become the same subsequence which will be created if we do total+ 1 
// example "abcab"
// a = 1 , "a"
// b = 2, "b","ab",
// c = 4, "c","ac","bc","abc"
// a = 7, "aa", "ba", "aba","ca","aca","bca","abca" , you can see we did not create another "a" , because if we had skip prev a, then all subseq which are = "" (1)
// can become duplicate if we take into consideration, notice we did not eliminate "aa" as that can be created, we eliminated "" which will be created previous to a
// b = 13, "bb","abb","cb","acb","bcb","abcb","aab","bab","abab","cab","acab","bcab","abcab", notice something we did not create "b","ab" as those will be duplicate
// and how we get that those 2 will be duplicate, as you see value at prev b is 2, and those strings are ["","a"] adding b to them will become same each time


function distinctSubseqII(s: string): number {
    // const MOD = 10 ** 9 + 7;
    // let n = s.length;
    // let end = new Array(26).fill(0);
    // let total = 0;

    // for (let c of s) {
    //     let idx = c.charCodeAt(0) - 97;
    //     let newSq = (total + 1 - end[idx] + MOD) % MOD; // new sequences that can be created using all the previous seq
    //     total = (total + newSq) % MOD;
    //     end[idx] = (end[idx] + newSq) % MOD;
    // }
    // return total;

    const M = 10 ** 9 + 7;
    let len = s.length;
    let dp = new Array(len + 1).fill(-1);

    let lastSeen = new Array(26).fill(0);
    let prev = new Array(len + 1).fill(0);

    for (let i = 1; i <= len; i++) {
        let idx = s.charCodeAt(i - 1) - 97;
        prev[i] = lastSeen[idx];
        lastSeen[idx] = i;
    }


    function solve(n: number): number {
        if (n == 0) {
            return 1;
        }

        if (dp[n] !== -1) {
            return dp[n];
        }

        let total = (2 * solve(n - 1) + M) % M;
        if (prev[n] !== 0) {
            let duplicates = solve(prev[n] - 1);
            total = (total - duplicates + M) % M;
        }
        dp[n] = total;
        return total;
    }
    return (solve(len) - 1 + M) % M;
};  