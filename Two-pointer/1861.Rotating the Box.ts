function rotateTheBox(boxGrid: string[][]): string[][] {
    let m = boxGrid.length;
    let n = boxGrid[0].length;

    for (let i = 0; i < m; i++) {
        let last = n - 1;
        for (let j = n - 1; j >= 0; j--) {
            if (boxGrid[i][j] == "#") {
                let temp = boxGrid[i][j];
                boxGrid[i][j] = boxGrid[i][last];
                boxGrid[i][last] = temp;
                last -= 1;
            } else if (boxGrid[i][j] == "*") {
                last = j - 1;
            }
        }
    }

    let res = [];

    for (let c = 0; c < n; c++) {
        let row = [];
        for (let r = m - 1; r >= 0; r--) {
            row.push(boxGrid[r][c]);
        }
        res.push(row);
    }
    return res
};  