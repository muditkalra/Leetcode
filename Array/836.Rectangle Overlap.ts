function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
    let [x1, y1, x2, y2] = rec1;
    let [x3, y3, x4, y4] = rec2;

    let backBoundaryX = Math.max(x1, x3);
    let frontBoundaryX = Math.min(x2, x4);

    let downBoundaryY = Math.max(y1, y3);
    let topBoundaryY = Math.min(y2, y4);

    return (frontBoundaryX - backBoundaryX > 0) && (topBoundaryY - downBoundaryY > 0);
};