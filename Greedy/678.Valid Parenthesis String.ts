// This can also be solved using dp as asterisk * can be used '() or  ')' or '' 


function checkValidString(s: string): boolean {
    let n = s.length;

    let min = 0;
    let max = 0;

    for (let i = 0; i < n; i++) {
        if (s[i] == "(") {
            max += 1;
            min += 1;
        } else if (s[i] == ")") {
            max -= 1;
            min -= 1;
        } else {
            max += 1;
            min -= 1;
        }

        if (min < 0) {
            min = 0;
        }

        if (max < 0) {
            return false;
        }
    }
    return min == 0;
}

// dp top down
// time complexity : O(n^2)
// space : O(n^2)

// function checkValidString(s: string): boolean {
//     let n = s.length;
//     let dp = Array.from({ length: n }, () => new Array(n).fill(-1));

//     function solve(index: number, count: number) {
//         if (count < 0) return false;
//         if (index == n) return count == 0;

//         if (dp[index][count] !== -1) {
//             return dp[index][count];
//         }

//         let check = false;

//         if (s[index] == "(") {
//             check = check || solve(index + 1, count + 1);
//         }

//         if (s[index] == ")") {
//             check = check || solve(index + 1, count - 1);
//         }

//         if (s[index] == "*") {
//             let leftBracket = solve(index + 1, count + 1);
//             let rightBracket = solve(index + 1, count - 1);
//             let emptyString = solve(index + 1, count);
//             check = leftBracket || rightBracket || emptyString || check;
//         }

//         dp[index][count] = check;
//         return dp[index][count];
//     }
//     return solve(0, 0);
// };