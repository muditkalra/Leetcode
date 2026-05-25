// dp + sliding-window

function canReach(s: string, minJump: number, maxJump: number): boolean {
    let n = s.length;
    let dp = new Array(n).fill(false);
    dp[0] = true;
    let count = 0;

    for (let i = minJump; i < n; i++) {
        let outgoingIndex = i - maxJump - 1;
        let incomingIndex = i - minJump;

        if (outgoingIndex >= 0 && dp[outgoingIndex] == 1) {
            count--;
        }

        if (incomingIndex >= 0 && dp[incomingIndex] == 1) {
            count++;
        }

        if (count > 0 && s[i] == "0") {
            dp[i] = true;
        }
    }

    return dp[n - 1];
};