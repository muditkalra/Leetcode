function minimumEffortPath(heights: number[][]): number {
    let low = 0;
    let high = 10 ** 6;
    let m = heights.length;
    let n = heights[0].length;

    let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    function isValid(x: number, y: number) {
        return x >= 0 && y >= 0 && x < m && y < n;
    }

    function bfs(dist: number): boolean {
        let visited = Array.from({ length: m }, () => new Array(n).fill(false));
        let q: number[][] = [];
        q.push([0, 0]);
        visited[0][0] = true;
        let cur = 0;

        while (cur < q.length) {
            let [x, y] = q[cur];

            if (x == m - 1 && y == n - 1) {
                return true;
            }

            for (let [dx, dy] of dir) {
                let newX = dx + x;
                let newY = dy + y;

                if (isValid(newX, newY) && !visited[newX][newY]) {
                    let absDist = Math.abs(heights[x][y] - heights[newX][newY]);
                    if (absDist <= dist) {
                        q.push([newX, newY]);
                        visited[newX][newY] = true;
                    }
                }
            }
            cur++;
        }
        return false;
    }


    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (bfs(mid)) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
};