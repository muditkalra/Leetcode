function canPartitionGrid(grid: number[][]): boolean {
    const m = grid.length;
    const n = grid[0].length;

    const rowWiseSum = new Array(m).fill(0);
    const colWiseSum = new Array(n).fill(0);

    // Step 1: Compute row and column sums
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            rowWiseSum[i] += grid[i][j];
            colWiseSum[j] += grid[i][j];
        }
    }

    // Step 2: Build prefix sums
    for (let i = 1; i < m; i++) {
        rowWiseSum[i] += rowWiseSum[i - 1];
    }

    for (let j = 1; j < n; j++) {
        colWiseSum[j] += colWiseSum[j - 1];
    }

    // Helper to check partition
    function checkSum(till: number, type: "row" | "col"): boolean {
        let arr = rowWiseSum;
        let len = m;

        if (type === "col") {
            arr = colWiseSum;
            len = n;
        }

        const total = arr[len - 1];
        return arr[till] === total - arr[till];
    }

    // Check horizontal cuts
    for (let i = 0; i < m - 1; i++) {
        if (checkSum(i, "row")) return true;
    }

    // Check vertical cuts
    for (let j = 0; j < n - 1; j++) {
        if (checkSum(j, "col")) return true;
    }

    return false;
}