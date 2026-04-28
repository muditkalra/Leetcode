function minOperations(grid: number[][], x: number): number {
    let newGrid = grid.flat();
    newGrid.sort((a, b) => a - b);

    let medianIdx = Math.floor(newGrid.length / 2);
    let medianValue = newGrid[medianIdx];
    let ops = 0;

    for (let ele of newGrid) {
        let diff = Math.abs(ele - medianValue);
        if (diff % x == 0) {
            ops += diff / x;
        } else {
            return -1;
        }
    }
    return ops
};