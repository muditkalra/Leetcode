function largestSubmatrix(matrix: number[][]): number {
    let m = matrix.length;
    let n = matrix[0].length;
    let prevHeights: number[][] = [];
    let ans = 0;

    for (let row = 0; row < m; row++) {
        let heights: number[][] = [];
        let seen = new Array(n).fill(false);

        for (const [height, col] of prevHeights) {
            if (matrix[row][col] == 1) {
                heights.push([height + 1, col]);
                seen[col] = true;
            }
        }

        for (let col = 0; col < n; col++) {
            if (seen[col] == false && matrix[row][col] == 1) {
                heights.push([1, col]);
            }
        }

        for (let i = 0; i < heights.length; i++) {
            ans = Math.max(ans, heights[i][0] * (i + 1));
        }

        prevHeights = heights;
    }
    return ans;
};

