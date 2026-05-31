function asteroidsDestroyed(mass: number, asteroids: number[]): boolean {
    asteroids.sort((a, b) => a - b);
    let len = asteroids.length;
    for (let i = 0; i < len; i++) {
        if (mass < asteroids[i]) {
            return false;
        }
        mass += asteroids[i];
    }
    return true;
};