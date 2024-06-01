class HeroBuilder {
    constructor() {
        this.hero = {};
    }

    setHeight(height) {
        this.hero.height = height;
        return this;
    }

    setBuild(build) {
        this.hero.build = build;
        return this;
    }

    setHairColor(hairColor) {
        this.hero.hairColor = hairColor;
        return this;
    }

    setEyeColor(eyeColor) {
        this.hero.eyeColor = eyeColor;
        return this;
    }

    setClothing(clothing) {
        this.hero.clothing = clothing;
        return this;
    }

    setInventory(inventory) {
        this.hero.inventory = inventory;
        return this;
    }

    build() {
        return this.hero;
    }
}

module.exports = HeroBuilder;