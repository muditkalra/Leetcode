function pathsWithMaxScore(board: string[]): number[] {
    let mod = 10 ** 9 + 7;
    let n = board.length;
    let dir = [[0, -1], [-1, 0], [-1, -1]];
    let dp = Array.from({ length: n }, () => Array.from({ length: n }, () => [0, 0]));
    dp[0][0] = [0, 1];

    function isValid(i: number, j: number) {
        return i < n && j < n && i >= 0 && j >= 0;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == "E") continue;
            if (board[i][j] == "X") continue;

            let max = 0;
            let totalPath = 0;
            for (let [dx, dy] of dir) {
                let newX = i + dx;
                let newY = j + dy;
                if (isValid(newX, newY)) {
                    let [score, path] = dp[newX][newY];
                    if (score == max) {
                        totalPath = (totalPath + path) % mod;
                    } else if (score > max) {
                        totalPath = path % mod;
                        max = score;
                    }
                }
            }
            max += board[i][j] !== "S" ? Number(board[i][j]) : 0;
            max = totalPath == 0 ? 0 : max;
            dp[i][j] = [max, totalPath];
        }
    }



    // function solve(i: number, j: number): number[] {
    //     if (i == 0 && j == 0) {
    //         return [0, 1];
    //     }

    //     if (board[i][j] == "X") {
    //         return [0, 0];
    //     }

    //     if (dp[i][j]) {
    //         return dp[i][j];
    //     }

    //     let max = 0;
    //     let totalPath = 0;
    //     for (let [dx, dy] of dir) {
    //         let newX = i + dx;
    //         let newY = j + dy;
    //         if (isValid(newX, newY)) {
    //             let [score, path] = solve(newX, newY);
    //             if (score == max) {
    //                 totalPath = (totalPath + path) % mod;
    //             } else if (score > max) {
    //                 totalPath = path % mod;
    //                 max = score;
    //             }
    //         }
    //     }

    //     max += board[i][j] !== "S" ? Number(board[i][j]) : 0;
    //     max = totalPath == 0 ? 0 : max;
    //     dp[i][j] = [max, totalPath];
    //     return [max, totalPath];
    // }

    return dp[n - 1][n - 1];
};