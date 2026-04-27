function hasValidPath(grid: number[][]): boolean {
    let dir: { [x: number]: number[][] } = {
        1: [[0, -1], [0, 1]],  //  Street 1: Horizontal(left, right)
        2: [[1, 0], [-1, 0]],  //  Street 2: Vertical(down, up)
        3: [[0, -1], [1, 0]], //  Street 3: Left - Down(left, down)
        4: [[0, 1], [1, 0]],   //  Street 4: Right - Down(right, down)
        5: [[0, -1], [-1, 0]], //  Street 5: Left - Up(left, up)
        6: [[0, 1], [-1, 0]]   //  Street 6: Right - Up(right, up)
    }

    let valid: { [x: number]: number[][] } = {
        1: [[1, 4, 6], [1, 3, 5]],  // Street 1: Valid connections for right and left
        2: [[2, 5, 6], [2, 3, 4]],  // Street 2: Valid connections for down and up
        3: [[1, 4, 6], [2, 5, 6]],  // Street 3: Valid connections for left and down
        4: [[1, 3, 5], [2, 5, 6]],  // Street 4: Valid connections for right and down
        5: [[1, 4, 6], [2, 3, 4]],  // Street 5: Valid connections for left and up
        6: [[1, 3, 5], [2, 3, 4]]   // Street 6: Valid connections for right and up
    }

    let m = grid.length;
    let n = grid[0].length;
    let visited = Array.from({ length: m }, () => new Array(n).fill(0));


    function solve(x: number, y: number) {
        if (x == m - 1 && y == n - 1) return true;
        visited[x][y] = 1

        let curStreet = grid[x][y];

        for (let i = 0; i < 2; i++) {
            const [dx, dy] = dir[curStreet][i]
            let newX = x + dx;
            let newY = y + dy;

            if (newX >= 0 && newX < m && newY >= 0 && newY < n && !visited[newX][newY]) {
                let nextStreet = grid[newX][newY];
                if (valid[curStreet][i].includes(nextStreet) && solve(newX, newY)) {
                    return true;
                }
            }
        }
        return false;
    }

    return solve(0, 0)
};
