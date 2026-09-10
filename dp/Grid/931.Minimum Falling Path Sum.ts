function minFallingPathSum(matrix: number[][]): number {
    let n = matrix.length;
    // let dp = Array.from({ length: n }, () => new Array(n).fill(-1));

    // top down
    // function solve(i: number, j: number) {
    //     if (j < 0 || j >= n) {
    //         return Infinity;
    //     }

    //     if (i == 0) {
    //         return matrix[i][j];
    //     }

    //     if (dp[i][j] !== -1) {
    //         return dp[i][j];
    //     }

    //     let up = matrix[i][j] + solve(i - 1, j);
    //     let dl = matrix[i][j] + solve(i - 1, j - 1);
    //     let dr = matrix[i][j] + solve(i - 1, j + 1);
    //     dp[i][j] = Math.min(up, dl, dr);
    //     return dp[i][j];
    // }


    // bottom up
    // let dp = Array.from({ length: n }, () => new Array(n).fill(0))

    // for (let j = 0; j < n; j++) {
    //     dp[0][j] = matrix[0][j];
    // }

    let prev = new Array(n).fill(0);

    for (let j = 0; j < n; j++) {
        prev[j] = matrix[0][j];
    }

    for (let i = 1; i < n; i++) {
        let cur = new Array(n).fill(0);
        for (let j = 0; j < n; j++) {
            let up = matrix[i][j] + prev[j];
            let dl = matrix[i][j] + (j - 1 >= 0 ? prev[j - 1] : Infinity);
            let dr = matrix[i][j] + (j + 1 < n ? prev[j + 1] : Infinity);
            cur[j] = Math.min(up, dl, dr);
        }
        prev = cur;
    }

    let min = Infinity;
    for (let j = 0; j < n; j++) {
        min = Math.min(min, prev[j]);
    }
    return min;
};