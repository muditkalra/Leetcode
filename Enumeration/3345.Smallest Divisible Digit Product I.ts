function smallestNumber(n: number, t: number): number {
    function digitProduct(num: number) {
        let p = 1;
        while (num > 0) {
            let d = num % 10;
            num = Math.floor(num / 10);
            p *= d;
        }
        return p;
    }

    while (true) {
        let product = digitProduct(n);
        if (product % t == 0) break;
        n += 1;
    }
    return n;
};