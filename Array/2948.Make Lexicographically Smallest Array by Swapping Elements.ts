function lexicographicallySmallestArray(nums: number[], limit: number): number[] {
    let groups: Deque<number>[] = [];
    let numToGrp: Record<number, number> = {};
    let sortedNums: number[] = [...nums].sort((a, b) => a - b);

    for (let i = 0; i < sortedNums.length; i++) {
        if (!groups.length || Math.abs(sortedNums[i] - groups[groups.length - 1].back()) > limit) {
            groups.push(new Deque());
        }
        groups[groups.length - 1].pushBack(sortedNums[i]);
        numToGrp[sortedNums[i]] = groups.length - 1;
    }
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let idx = numToGrp[nums[i]];
        res.push(groups[idx].popFront());
    }
    return res;
};