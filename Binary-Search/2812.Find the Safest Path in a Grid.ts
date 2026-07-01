function maximumSafenessFactor(grid: number[][]): number {
    let n = grid.length;
    let q: number[][] = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                q.push([i, j, 0]);
                grid[i][j] = 0;
            } else {
                grid[i][j] = -1;
            }
        }
    }

    let dir: number[][] = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    let cur = 0;

    function isValidCell(x: number, y: number): boolean {
        return x < n && x >= 0 && y < n && y >= 0;
    }

    while (cur < q.length) {
        let [i, j, d] = q[cur];

        for (const [dx, dy] of dir) {
            let newX = dx + i;
            let newY = dy + j;
            if (isValidCell(newX, newY) && grid[newX][newY] == -1) {
                grid[newX][newY] = d + 1
                q.push([newX, newY, d + 1]);
            }
        }
        cur++;
    }

    let low = 0;
    let high = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            high = Math.max(high, grid[i][j]);
        }
    }

    function bfs(mid: number): boolean {
        if (grid[0][0] < mid || grid[n - 1][n - 1] < mid) {
            return false;
        }

        let q = [[0, 0]];
        let cur = 0;
        let visited = Array.from({ length: n }, () => new Array(n).fill(false));
        visited[0][0] = true;

        while (cur < q.length) {
            let [i, j] = q[cur];

            if (i == n - 1 && j == n - 1) {
                return true;
            }

            for (const [dx, dy] of dir) {
                let newX = dx + i;
                let newY = dy + j;
                if (isValidCell(newX, newY) && grid[newX][newY] >= mid && !visited[newX][newY]) {
                    visited[newX][newY] = true;
                    q.push([newX, newY]);
                }
            }
            cur++;
        }
        return false;
    }


    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (bfs(mid)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return high;

    //? Binary search + dfs

    // function dfs(i: number, j: number, mid: number, visited: boolean[][]): boolean {
    //     if (i == n - 1 && j == n - 1) {
    //         return true;
    //     }

    //     let res = false;
    //     for (const [dx, dy] of dir) {
    //         let newX = dx + i;
    //         let newY = dy + j;

    //         if (isValidCell(newX, newY) && grid[newX][newY] >= mid && !visited[newX][newY]) {
    //             visited[newX][newY] = true;
    //             if (dfs(newX, newY, mid, visited)) {
    //                 return true;
    //             };
    //         }
    //     }
    //     return false;
    // }


    // while (low <= high) {
    //     let mid = Math.floor((low + high) / 2);
    //     let visited = Array.from({ length: n }, () => new Array(n).fill(false));
    //     visited[0][0] = true;

    //     if (dfs(0, 0, mid, visited) && grid[0][0] >= mid) {
    //         low = mid + 1;
    //     } else {
    //         high = mid - 1;
    //     }
    // }
    // return high;
};