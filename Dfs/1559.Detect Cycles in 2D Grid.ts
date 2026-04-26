function containsCycle(grid: string[][]): boolean {
    let m = grid.length;
    let n = grid[0].length;
    let visited: number[][] = Array.from({ length: m }, () => new Array(n).fill(0));
    let dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    function dfs(i: number, j: number, pI: number, pJ: number): boolean {
        visited[i][j] = 1;

        for (let [dx, dy] of dir) {
            let newX = dx + i;
            let newY = dy + j;

            if (newX >= m || newX < 0 || newY >= n || newY < 0) continue;
            if (grid[newX][newY] != grid[i][j]) continue;
            if (newX == pI && newY == pJ) continue;

            if (visited[newX][newY]) return true;
            if (dfs(newX, newY, i, j)) return true;
        }
        return false
    }


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j]) {
                if (dfs(i, j, -1, -1)) {
                    return true;
                }
            }
        }
    }
    return false;
};