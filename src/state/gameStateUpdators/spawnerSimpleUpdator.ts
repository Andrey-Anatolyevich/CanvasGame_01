class SpawnerSimpleUpdator implements IStateUpdator {
    itemType: ItemType = ItemType.SpawnerSimple;

    update(gameState: GameState, inputState: InputState, theItem: SpawnerSimple, controlledByInput: boolean): void {
        let now = new Date();
        if (now.getTime() > (theItem.lastSpawnDate.getTime() + theItem.spawnDelayMs)) {
            let monstersAlive = gameState.monsters.filter(x => x.itemType == ItemType.MonsterDummy).length;
            if (theItem.monstersMaxAlive > monstersAlive) {
                let newMonsterAngle = Angle.random();
                let newMonster = new MonsterDummy(theItem.position.x, theItem.position.y, newMonsterAngle);
                newMonster.speedPerSec += theItem.monstersSpawned * 10
                gameState.monsters.push(newMonster)

                theItem.monstersSpawned += 1;
                theItem.lastSpawnDate = now;
            }
        }
    }
}