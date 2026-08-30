function minimumDeletions(nums: number[]): number {
    let min = Infinity;
    let max = -Infinity;
    let minIndex = -1;
    let maxIndex = -1;
    let n = nums.length;
    if (n == 1) return 1;

    for (let i = 0; i < n; i++) {
        if (nums[i] < min) {
            minIndex = i;
            min = nums[i];
        }

        if (nums[i] > max) {
            maxIndex = i;
            max = nums[i];
        }
    }

    // front case 
    let minFrontIdx = minIndex + 1;
    let maxFrontIdx = maxIndex + 1;
    let frontRemove = Math.max(minFrontIdx, maxFrontIdx);

    // back case

    let minBackIdx = n - minIndex;
    let maxBackIdx = n - maxIndex;
    let backRemove = Math.max(maxBackIdx, minBackIdx);

    // one front and one back;
    let minFrontBack = Math.min(minFrontIdx, minBackIdx);
    let maxFrontBack = Math.min(maxFrontIdx, maxBackIdx);
    let frontBackRemove = minFrontBack + maxFrontBack;

    return Math.min(frontRemove, backRemove, frontBackRemove);
};