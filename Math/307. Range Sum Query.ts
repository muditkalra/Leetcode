// This uses square root decomposition, we could have usd segment tree but that was overkill and 
// also updates are single value and range updates, so this technique can work

class NumArray {
    private nums: number[];
    private blocks: number[];
    private nLen: number;
    private bLen: number;
    constructor(nums: number[]) {
        this.nums = nums;
        this.nLen = nums.length
        this.bLen = Math.ceil(Math.sqrt(nums.length));
        this.blocks = new Array(this.bLen).fill(0);

        for (let i = 0; i < this.nLen; i++) {
            let blockIndex = Math.floor(i / this.bLen);
            this.blocks[blockIndex] += nums[i];
        }
    }

    update(index: number, val: number): void {
        let blockIndex = Math.floor(index / this.bLen);
        this.blocks[blockIndex] -= this.nums[index];
        this.blocks[blockIndex] += val;
        this.nums[index] = val;
    }

    sumRange(left: number, right: number): number {
        let sum = 0;
        // two possible types
        let startBlock = Math.floor(left / this.bLen);
        let endBlock = Math.floor(right / this.bLen);

        // 1. both l and r in the same block
        if (startBlock == endBlock) {
            for (let i = left; i <= right; i++) {
                sum += this.nums[i];
            }
            return sum;
        }

        // 2. both in the different blocks
        let endofStartBlock = ((startBlock + 1) * this.bLen) - 1;
        let startofEndBlock = endBlock * this.bLen;

        for (let i = left; i <= endofStartBlock; i++) {
            sum += this.nums[i];
        }

        for (let b = startBlock + 1; b <= endBlock - 1; b++) {
            sum += this.blocks[b];
        }

        for (let i = startofEndBlock; i <= right; i++) {
            sum += this.nums[i];
        }
        return sum;
    }
}
