function maxNumberOfBalloons(text: string): number {
    let map: Record<string, number> = {
        b: 0,
        a: 0,
        l: 0,
        o: 0,
        n: 0
    }

    for (const char of text) {
        if (char in map) {
            map[char] += 1;
        }
    }

    return Math.min(map["b"], map["a"], Math.floor(map["l"] / 2), Math.floor(map["o"] / 2), map["n"]);
};