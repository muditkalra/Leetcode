// https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/?envType=daily-question&envId=2026-03-19

function numberOfSubmatrices(grid: string[][]): number {
    let m = grid.length; // row 
    let n = grid[0].length; // col 
    let col = Array.from({ length: n }, () => [0, 0]); // [X,Y];
    let res = 0;

    for (let i = 0; i < m; i++) {
        let rowX = 0;
        let rowY = 0;
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == "X") {
                rowX += 1;
            }
            if (grid[i][j] == "Y") {
                rowY += 1;
            }

            col[j][0] += rowX;
            col[j][1] += rowY;

            if (col[j][0] == col[j][1] && col[j][0] >= 1) {
                res += 1;
            }
        }
    }
    return res;
};
