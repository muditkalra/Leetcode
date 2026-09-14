interface node {
    score: number,
    idx: number[]
}

function maximumWeight(intervals: number[][]): number[] {
    let n = intervals.length;
    intervals.map((interval, i) => interval.push(i)); // included index;

    intervals.sort((a, b) => a[0] - b[0]); // sorted based on l;

    let nextIdx = new Array(n).fill(-1);

    function findNextIdx(r: number) {
        let low = 0;
        let high = n - 1;

        while (low <= high) {
            let mid = (low + high) >> 1;

            if (intervals[mid][0] > r) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return low;
    }


    for (let i = 0; i < n; i++) {
        let r = intervals[i][1];
        nextIdx[i] = findNextIdx(r);
    }

    function compareArray(a1: number[], a2: number[]) {
        let minLen = Math.min(a1.length, a2.length);

        for (let i = 0; i < minLen; i++) {
            if (a1[i] !== a2[i]) {
                return a1[i] - a2[i];
            }
        }
        return a1.length - a1.length;
    }

    // let dp = Array.from({ length: n }, () => new Array(5).fill(-1));

    // function solve(i: number, k: number): node {
    //     if (i >= n || k == 0) return { score: 0, idx: [] };

    //     if (dp[i][k] !== -1) {
    //         return dp[i][k];
    //     }

    //     let skip = solve(i + 1, k);

    //     let nI = nextIdx[i]; // next index which can be taken after taking this interval
    //     let temp = solve(nI, k - 1);

    //     let currentIdx = intervals[i][3]; // actual i
    //     let w = intervals[i][2]; // weight
    //     let take: node;
    //     let takenIdx = temp.idx;
    //     let takeScore = w + temp.score;
    //     let takeIndices = [...takenIdx, currentIdx].sort((a, b) => a - b);
    //     take = { score: takeScore, idx: takeIndices };

    //     let result: node;

    //     if (skip.score > take.score) {
    //         result = skip;
    //     } else if (skip.score < take.score) {
    //         result = take;
    //     } else {
    //         result = compareArray(take.idx, skip.idx) < 0 ? take : skip;
    //     }
    //     dp[i][k] = { ...result };
    //     return { ...result };
    // }

    // return solve(0, 4).idx;

    let dp: node[][] = Array.from({ length: n + 1 }, () => Array.from({ length: 5 }, () => { return { score: 0, idx: [] } }));

    for (let i = n - 1; i >= 0; i--) {
        let nI = nextIdx[i]; // next index which can be taken after taking this interval
        let w = intervals[i][2];
        let actualIdx = intervals[i][3];
        for (let k = 4; k >= 1; k--) {
            let skip = dp[i + 1][k];
            let temp = dp[nI][k - 1];
            let score = w + temp.score;
            let idx = [...temp.idx, actualIdx].sort((a, b) => a - b);

            let take: node = { score, idx };

            if (skip.score > take.score) {
                dp[i][k] = skip;
            } else if (take.score > skip.score) {
                dp[i][k] = take;
            } else {
                dp[i][k] = compareArray(take.idx, skip.idx) < 0 ? take : skip;
            }
        }
    }
    return dp[0][4].idx;
};