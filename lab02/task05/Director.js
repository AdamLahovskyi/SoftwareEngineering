class Director {
    constructHero(builder) {
        return builder
            .setHeight(180)
            .setBuild('athletic')
            .setHairColor('yellow')
            .setEyeColor('bron')
            .setClothing('pants')
            .setInventory(['p90', 'SWAT-shield'])
            .build();
    }

    constructEnemy(builder) {
        return builder
            .setHeight(170)
            .setBuild('muscular')
            .setHairColor('black')
            .setEyeColor('red')
            .setClothing('dark robe')
            .setInventory(['dark magic'])
            .setEvilDeeds(['kills people', 'destroys cities'])
            .build();
    }
}
module.exports = Director;