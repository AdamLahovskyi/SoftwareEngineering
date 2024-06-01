class EnemyBuilder {
    constructor() {
        this.enemy = {};
    }

    setHeight(height) {
        this.enemy.height = height;
        return this;
    }

    setBuild(build) {
        this.enemy.build = build;
        return this;
    }

    setHairColor(hairColor) {
        this.enemy.hairColor = hairColor;
        return this;
    }

    setEyeColor(eyeColor) {
        this.enemy.eyeColor = eyeColor;
        return this;
    }

    setClothing(clothing) {
        this.enemy.clothing = clothing;
        return this;
    }

    setInventory(inventory) {
        this.enemy.inventory = inventory;
        return this;
    }

    setEvilDeeds(evilDeeds) {
        this.enemy.evilDeeds = evilDeeds;
        return this;
    }

    setGoodDeeds(goodDeeds) {
        this.enemy.goodDeeds = goodDeeds;
        return this;
    }

    build() {
        return this.enemy;
    }
}

module.exports = EnemyBuilder;