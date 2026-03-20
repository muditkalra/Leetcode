// https://leetcode.com/problems/minimum-absolute-difference-in-sliding-submatrix/description/?envType=daily-question&envId=2026-03-20

function minAbsDiff(grid: number[][], k: number): number[][] {
    //brute force
    let m = grid.length;
    let n = grid[0].length;
    let res = Array.from({ length: m - k + 1 }, () => new Array(n - k + 1).fill(0));

    for (let i = 0; i < (m - k + 1); i++) {
        for (let j = 0; j < (n - k + 1); j++) {
            let ele = [];
            for (let r = i; r < (i + k); r++) {
                for (let c = j; c < (j + k); c++) {
                    ele.push(grid[r][c]);
                }
            }
            ele.sort((a, b) => a - b);
            let min = Infinity;
            for (let e = 1; e < ele.length; e++) {
                if (ele[e] == ele[e - 1]) {
                    continue;
                }
                min = Math.min(min, ele[e] - ele[e - 1]);
            }
            if (min !== Infinity) {
                res[i][j] = min;
            }
        }
    }
    return res
};
