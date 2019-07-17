class BulletsCleaner implements ICleaner {
    clean(gameState: GameState): void {
        this.retireRemoteBullets(gameState);
    }

    private retireRemoteBullets(state: GameState) {
        state.bullets = state.bullets.filter(x => {
            let blt = (x as BulletSimple);
            var result = (blt.distanceTraveled < blt.distanceMax)
                && (-1000 < blt.position.x
                    && blt.position.x < 1000
                    && -1000 < blt.position.y
                    && blt.position.y < 1000);
            return result;
        });
    }
}