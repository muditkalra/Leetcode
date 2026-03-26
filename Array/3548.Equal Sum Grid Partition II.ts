function canPartitionGrid1(grid: number[][]): boolean {
    let m = grid.length;
    let n = grid[0].length;
    let total = 0;


    function check(mat: number[][]): boolean {
        let set = new Set<number>();
        let topSum = 0;
        let r = mat.length;
        let c = mat[0].length;

        for (let i = 0; i < r - 1; i++) {
            for (let j = 0; j < c; j++) {
                set.add(mat[i][j]);
                topSum += mat[i][j];
            }
            let bottomSum = total - topSum;
            let diff = topSum - bottomSum;


            if (diff == 0) return true;

            if (diff == mat[0][0]) return true;

            if (diff == mat[0][c - 1]) return true;

            if (diff == mat[i][0]) return true


            if (i > 0 && c > 1 && set.has(diff)) return true;

        }

        return false;
    }


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            total += grid[i][j];
        }
    }



    if (check(grid)) { // check horizontal
        return true;
    }

    grid.reverse();

    if (check(grid)) { // check for reverse of horizontal
        return true
    }

    grid.reverse(); // returning back to original

    // tranpose mat

    let transposeMat = Array.from({ length: n }, () => new Array(m).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            transposeMat[j][i] = grid[i][j]
        }
    }

    if (check(transposeMat)) {
        return true;
    } // cols are now rows , again check for horizontal

    transposeMat.reverse();

    if (check(transposeMat)) { // reverse col horizontal
        return true;
    }

    return false;
};
