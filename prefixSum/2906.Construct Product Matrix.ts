// https://leetcode.com/problems/construct-product-matrix/description/?envType=daily-question&envId=2026-03-24

function constructProductMatrix(grid: number[][]): number[][] {
    let n = grid.length;
    let m = grid[0].length;
    let mod = 12345;
    let prod = 1;
    let prefixArray: number[] = new Array(n * m).fill(1);

    let cur = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            prefixArray[cur] = (prefixArray[cur - 1] * grid[i][j]) % mod;
            cur++;
        }
    }

    cur = (n * m) - 1
    prod = 1;
    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            let prev = grid[i][j];
            grid[i][j] = (prod * prefixArray[cur]) % mod;
            prod = (prod * prev) % mod;
            cur--;
        }
    }

    return grid;
};