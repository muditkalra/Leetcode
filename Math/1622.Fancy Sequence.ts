class Fancy {
    private sequence: Array<number>;
    private mod: bigint;
    private add: bigint;
    private multi: bigint;
    constructor() {
        this.sequence = [];
        this.mod = BigInt(10 ** 9 + 7);
        this.add = 0n;
        this.multi = 1n;
    }

    private power(a: bigint, b: bigint): bigint {
        if (b == 0n) return 1n;

        let half = this.power(a, b / 2n);
        let result = (half * half) % this.mod;

        if (b % 2n == 1n) {
            result = (result * a) % this.mod;
        }

        return result;
    }

    append(val: number): void {
        let modifiedVal = ((BigInt(val) - BigInt(this.add)) % this.mod + this.mod) * this.power(this.multi, this.mod - 2n) % this.mod;
        this.sequence.push(Number(modifiedVal));
    }

    addAll(inc: number): void {
        this.add = (this.add + BigInt(inc)) % this.mod;
    }

    multAll(m: number): void {
        this.multi = (this.multi * BigInt(m)) % this.mod;
        this.add = (this.add * BigInt(m)) % this.mod;
    }

    getIndex(idx: number): number {
        if (idx >= this.sequence.length) {
            return -1;
        }
        const val = (BigInt(this.sequence[idx]) * this.multi) % this.mod + this.add;
        return Number(val % this.mod);
    }
}