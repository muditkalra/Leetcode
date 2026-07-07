function sumAndMultiply(n: number): number {
    let sum = 0;
    let num = 0;
    let cur = 0;

    while (n) {
        let digit = n % 10;
        sum += digit;
        num += digit ? (digit * (10 ** cur)) : 0;
        cur += digit ? 1 : 0
        n = Math.floor(n / 10);
    }
    return sum * num
};