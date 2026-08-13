
interface StNode {
    maxLen: number;
    preffix: string;
    suffix: string;
    prefLen: number;
    suffLen: number;
}

class SegmentTree {
    st: StNode[] = [];
    s: string;
    constructor(n: number, s: string) {
        this.st = new Array(4 * n);
        this.s = s;
        this.build(0, 0, n - 1);
    }

    build(i: number, l: number, r: number) {
        if (l == r) {
            this.st[i] = { maxLen: 1, preffix: this.s[l], suffix: this.s[l], prefLen: 1, suffLen: 1 };
            return;
        }

        let mid = (l + r) >> 1;
        this.build(2 * i + 1, l, mid);
        this.build(2 * i + 2, mid + 1, r);
        this.st[i] = this.merge(this.st[2 * i + 1], this.st[2 * i + 2], mid - l + 1, r - mid);
    }

    merge(left: StNode, right: StNode, leftLen: number, rightLen: number): StNode {
        let result: StNode = {
            maxLen: Math.max(left.maxLen, right.maxLen),
            preffix: left.preffix,
            suffix: right.suffix,
            prefLen: left.prefLen,
            suffLen: right.suffLen
        };

        if (left.prefLen == leftLen && left.suffix == right.preffix) {
            result.prefLen = left.prefLen + right.prefLen;
        }

        if (right.suffLen == rightLen && right.preffix == left.suffix) {
            result.suffLen = right.suffLen + left.suffLen;
        }

        if (left.suffix == right.preffix) {
            result.maxLen = Math.max(result.maxLen, left.suffLen + right.prefLen);
        }

        return result;
    }

    update(i: number, l: number, r: number, pos: number, ch: string) {
        if (l == r) {
            this.st[i] = { maxLen: 1, preffix: ch, suffix: ch, prefLen: 1, suffLen: 1 };
            return;
        }
        let mid = (l + r) >> 1;
        if (pos <= mid) {
            this.update(2 * i + 1, l, mid, pos, ch);
        } else {
            this.update(2 * i + 2, mid + 1, r, pos, ch);
        }
        this.st[i] = this.merge(this.st[2 * i + 1], this.st[2 * i + 2], mid - l + 1, r - mid);
    }
}


function longestRepeating(s: string, queryCharacters: string, queryIndices: number[]): number[] {
    let n = s.length;
    const segmentTree = new SegmentTree(n, s);
    let k = queryIndices.length;
    let result = new Array(k).fill(-1);

    for (let i = 0; i < k; i++) {
        const pos = queryIndices[i];
        const char = queryCharacters[i];
        segmentTree.update(0, 0, n - 1, pos, char);
        result[i] = segmentTree.st[0].maxLen;
    }
    return result;
};