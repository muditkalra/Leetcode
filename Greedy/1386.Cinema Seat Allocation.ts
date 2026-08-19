function maxNumberOfFamilies(n: number, reservedSeats: number[][]): number {
    let map = new Map<number, number[]>(); // O()
    let m = reservedSeats.length;

    for (let i = 0; i < m; i++) {  // O(m)
        let [row, seat] = reservedSeats[i];
        if (!map.get(row)) map.set(row, []);
        map.get(row)?.push(seat);
    }
    let totalGroups = (n - map.size) * 2;

    for (const [row, seats] of map.entries()) { // O(k) k is distinct rows
        let g1 = true;
        let g2 = true;
        let g3 = true;

        for (let seat of seats) { // O(10)
            if (seat >= 2 && seat <= 3) {
                g1 = false;
            } else if (seat >= 4 && seat <= 5) {
                g1 = false;
                g2 = false;
            } else if (seat >= 6 && seat <= 7) {
                g2 = false;
                g3 = false;
            } else if (seat >= 8 && seat <= 9) {
                g3 = false;
            }
        }

        if (g1 && g3) {
            totalGroups += 2;
        } else if (g1 || g2 || g3) {
            totalGroups += 1;
        }
    }
    return totalGroups;
};