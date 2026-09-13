function largestOverlap(img1: number[][], img2: number[][]): number {
    let n = img1.length;

    function countOverlap(dr: number, dc: number) {
        let count = 0;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (!img1[i][j]) continue;
                let newI = i + dr;
                let newJ = j + dc;
                if (newI < 0 || newJ < 0 || newI >= n || newJ >= n) continue;
                count += (img1[i][j] == img2[newI][newJ]) ? 1 : 0;
            }
        }
        return count;
    }


    let max = 0;
    for (let rowOffset = (-n + 1); rowOffset < n; rowOffset++) {
        for (let colOffset = -n + 1; colOffset < n; colOffset++) {
            max = Math.max(max, countOverlap(rowOffset, colOffset));
        }
    }
    return max;
};