interface SegTreeNode {
    prod: number;
    count: number[];
}

class SegTree {
    private n: number;
    private k: number;
    private segTree: SegTreeNode[];
    private nums: number[];
    constructor(n: number, k: number, nums: number[]) {
        this.k = k;
        this.n = n;
        this.nums = nums;
        this.segTree = new Array(4 * n);
        this.build(0, 0, n - 1);
    }

    private build(i: number, l: number, r: number): void {
        if (l == r) {
            this.leafNode(i, this.nums[l]);
            return;
        }

        let mid = (l + r) >> 1;

        this.build(2 * i + 1, l, mid);
        this.build(2 * i + 2, mid + 1, r);
        this.segTree[i] = this.mergeNodes(this.segTree[2 * i + 1], this.segTree[2 * i + 2]);
    }

    private leafNode(i: number, val: number): void {
        let result: SegTreeNode;
        let count = new Array(this.k).fill(0);

        let rem = val % this.k;
        count[rem] = 1;
        result = { prod: rem, count };
        this.segTree[i] = result;
        return;
    }

    private mergeNodes(left: SegTreeNode, right: SegTreeNode): SegTreeNode {
        let result: SegTreeNode;
        let count = new Array(this.k).fill(0);
        let prod = (left.prod * right.prod) % this.k;

        for (let x = 0; x < this.k; x++) {
            count[x] = left.count[x];
        }

        for (let x = 0; x < this.k; x++) {
            let newRem = (left.prod * x) % this.k;
            count[newRem] += right.count[x];
        }

        result = { prod, count };
        return result;
    }


    private segTreeQuery(start: number, end: number, i: number, l: number, r: number): SegTreeNode {
        if (l >= start && r <= end) {
            return this.segTree[i];
        }

        let mid = (l + r) >> 1;

        if (end <= mid) { // entirely on the left side
            return this.segTreeQuery(start, end, 2 * i + 2, mid + 1, r);
        }

        if (start > mid) {// entirely on the right side
            return this.segTreeQuery(start, end, 2 * i + 2, mid + 1, r);
        }

        let leftNode: SegTreeNode = this.segTreeQuery(start, end, 2 * i + 1, l, mid);
        let rightNode: SegTreeNode = this.segTreeQuery(start, end, 2 * i + 2, mid + 1, r);

        return this.mergeNodes(leftNode, rightNode);
    }

    public query(start: number, end: number) {
        return this.segTreeQuery(start, end, 0, 0, this.n - 1);
    }

    private segTreeUpdate(i: number, l: number, r: number, idx: number, val: number) {
        if (l == r) {
            this.leafNode(i, val);
            return;
        }

        let mid = (l + r) >> 1;

        if (idx <= mid) {
            this.segTreeUpdate(2 * i + 1, l, mid, idx, val);
        } else {
            this.segTreeUpdate(2 * i + 2, mid + 1, r, idx, val);
        }
        this.segTree[i] = this.mergeNodes(this.segTree[2 * i + 1], this.segTree[2 * i + 2]);
    }

    public update(idx: number, val: number) {
        return this.segTreeUpdate(0, 0, this.n - 1, idx, val);
    }
}


function resultArray(nums: number[], k: number, queries: number[][]): number[] {
    let n = nums.length;
    let result = [];

    const segTree = new SegTree(n, k, nums);

    for (let q of queries) {
        let [idx, val, start, x] = q;
        segTree.update(idx, val);

        const node = segTree.query(start, n - 1);
        result.push(node.count[x]);
    }
    return result;
};