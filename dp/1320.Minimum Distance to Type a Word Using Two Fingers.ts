function minimumDistance(word: string): number {

    function getDistance(char1: number, char2: number) {
        let char1X = Math.floor(char1 / 6);
        let char1Y = char1 % 6;
        let char2X = Math.floor(char2 / 6);
        let char2Y = char2 % 6;

        return Math.abs(char1X - char2X) + Math.abs(char1Y - char2Y);
    }

    const dp = Array.from({ length: word.length }, () => Array.from({ length: 27 }, () => new Array(27).fill(-1)));


    // f1: f1 on the char, f2: f2 on the char;
    function solve(i: number, f1: number, f2: number): number {
        if (i == word.length) {
            return 0;
        }

        const cur = word.charCodeAt(i) - 65;

        if (dp[i][f1][f2] !== -1) {
            return dp[i][f1][f2];
        }

        // both not used;
        if (f1 == 26 && f2 == 26) {
            dp[i][f1][f2] = solve(i + 1, cur, f2);
            return dp[i][f1][f2];
        }


        // f2 not used;
        if (f2 == 26) {
            let useF2 = 0 + solve(i + 1, f1, cur);
            let useF1 = getDistance(f1, cur) + solve(i + 1, cur, f2);
            dp[i][f1][f2] = Math.min(useF1, useF2);
            return dp[i][f1][f2];
        }

        // both used 
        let useF1 = getDistance(f1, cur) + solve(i + 1, cur, f2);
        let useF2 = getDistance(f2, cur) + solve(i + 1, f1, cur);
        dp[i][f1][f2] = Math.min(useF1, useF2);
        return dp[i][f1][f2];
    }
    return solve(0, 26, 26);
};
