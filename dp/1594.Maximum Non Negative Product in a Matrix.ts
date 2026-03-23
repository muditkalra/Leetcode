
function maxProductPath(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const mod = 1e9 + 7;

    const memo: ([number, number] | null)[][] = Array.from({ length: m }, () =>
        Array(n).fill(null)
    );

    //top-down dp
    function dfs(i: number, j: number): [number, number] {
        if (i === m - 1 && j === n - 1) {
            return [grid[i][j], grid[i][j]];
        }

        if (memo[i][j]) {
            return memo[i][j]!
        };

        const val = grid[i][j];
        let candidates: number[] = [];

        // go down
        if (i + 1 < m) {
            const [maxD, minD] = dfs(i + 1, j);
            candidates.push(val * maxD, val * minD);
        }

        // go right
        if (j + 1 < n) {
            const [maxR, minR] = dfs(i, j + 1);
            candidates.push(val * maxR, val * minR);
        }

        const maxVal = Math.max(...candidates);
        const minVal = Math.min(...candidates);

        memo[i][j] = [maxVal, minVal];
        return memo[i][j]!;
    }

    const [maxProduct] = dfs(0, 0);
    return maxProduct < 0 ? -1 : maxProduct % mod;
}