class DSU {
    private parent: number[];
    private rank: number[];
    constructor(n: number) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(1);
    }

    find(x: number): number {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x: number, y: number) {
        let xParent = this.find(x);
        let yParent = this.find(y);

        if (xParent == yParent) return;

        if (this.rank[xParent] < this.rank[yParent]) {
            this.parent[xParent] = yParent;
        } else if (this.rank[xParent] > this.rank[yParent]) {
            this.parent[yParent] = xParent;
        } else {
            this.parent[yParent] = xParent;
            this.rank[xParent]++;
        }
    }
}


function minimumHammingDistance(source: number[], target: number[], allowedSwaps: number[][]): number {
    let n = source.length;
    let dsu = new DSU(n);

    for (let i = 0; i < allowedSwaps.length; i++) {
        let [u, v] = allowedSwaps[i];
        dsu.union(u, v);
    }

    let groups = new Map<number, Map<number, number>>();

    for (let i = 0; i < n; i++) {
        let parent = dsu.find(i);
        if (!groups.has(parent)) {
            groups.set(parent, new Map());
        }
        const group = groups.get(parent);
        group?.set(source[i], (group.get(source[i]) || 0) + 1);
    }
    let res = 0;

    for (let i = 0; i < n; i++) {
        const parent = dsu.find(i);
        const group = groups.get(parent);
        const freq = group?.get(target[i]) || 0;
        if (freq > 0) {
            group?.set(target[i], freq - 1);
        } else {
            res += 1;
        }
    }
    return res;
};