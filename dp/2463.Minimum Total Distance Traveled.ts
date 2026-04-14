
/** Thoughts while solving
 *  1. Each robot should reach the nearest factory only
 *  2. So need to sort both factory and robot so both reaches the nearest
 *  3. Robot have two choices to use factory on the left or the factory on the right, so we have two options, take the current factory or skip the current factory
 */

function minimumTotalDistance(robot: number[], factory: number[][]): number {
    robot.sort((a, b) => a - b);
    factory.sort((a, b) => a[0] - b[0]);

    let factories: number[] = [];
    for (const [pos, limit] of factory) {
        for (let i = 0; i < limit; i++) {
            factories.push(pos);
        }
    }

    let dp = Array.from({ length: robot.length }, () => new Array(factories.length).fill(-1));

    function solve(i: number, j: number) { // i:current robot pos, j:current fatories pos
        if (i >= robot.length) return 0; // exceeded all robots
        if (j >= factories.length) return Infinity; // used all without repairing all robots;

        if (dp[i][j] !== -1) {
            return dp[i][j];
        }

        let take = Math.abs(robot[i] - factories[j]) + solve(i + 1, j + 1); // taking the current factory and proceeding to next robot and factory
        let skip = solve(i, j + 1); // taking the next factory 

        dp[i][j] = Math.min(skip, take);
        return dp[i][j];
    }
    return solve(0, 0);
};

// bottom up
function minimumTotalDistance2(robot: number[], factory: number[][]): number {
    robot.sort((a, b) => a - b);
    factory.sort((a, b) => a[0] - b[0]);

    let factories: number[] = [];
    for (const [pos, limit] of factory) {
        for (let i = 0; i < limit; i++) {
            factories.push(pos);
        }
    }

    let dp = Array.from({ length: robot.length + 1 }, () => new Array(factories.length + 1).fill(0));

    for (let i = 0; i < robot.length; i++) {
        dp[i][factories.length] = Infinity;
    }

    for (let i = robot.length - 1; i >= 0; i--) {
        for (let j = factories.length - 1; j >= 0; j--) {
            let take = Math.abs(robot[i] - factories[j]) + dp[i + 1][j + 1];
            let skip = dp[i][j + 1];
            dp[i][j] = Math.min(take, skip);
        }
    }

    return dp[0][0];
};
