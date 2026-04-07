class Robot {
    private curPos: number = 0;
    private moved: boolean = false;
    private points: [number, number, string][] = [];
    constructor(width: number, height: number) {

        // bottom row -> east;
        for (let i = 0; i < width; i++) {
            this.points.push([i, 0, "East"]);
        }

        // right col -> North;
        for (let i = 1; i < height; i++) {
            this.points.push([width - 1, i, "North"]);
        }

        // top row -> west
        for (let i = width - 2; i >= 0; i--) {
            this.points.push([i, height - 1, "West"]);
        }

        // left col -> south
        for (let i = height - 2; i > 0; i--) {
            this.points.push([0, i, "South"]);
        }
    }

    step(num: number): void {
        this.moved = true;
        this.curPos = (this.curPos + num) % this.points.length;
    }

    getPos(): number[] {
        const x = this.points[this.curPos][0];
        const y = this.points[this.curPos][1];
        return [x, y];
    }

    getDir(): string {
        if (this.moved && this.curPos == 0) {
            return "South";
        }
        return this.points[this.curPos][2];
    }
}