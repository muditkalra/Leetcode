function checkOverlap(radius: number, xCenter: number, yCenter: number, x1: number, y1: number, x2: number, y2: number): boolean {
    let dist = 0;
    if (xCenter < x1 || xCenter > x2) {
        dist += Math.min((xCenter - x1) ** 2, (xCenter - x2) ** 2);
    }

    if (yCenter < y1 || yCenter > y2) {
        dist += Math.min((yCenter - y1) ** 2, (yCenter - y2) ** 2);
    }

    return dist <= radius ** 2;
}; 