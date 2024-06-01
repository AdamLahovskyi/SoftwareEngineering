const InventoryItem = require("./InventoryItem");

class Weapon extends InventoryItem {
    constructor(name, damage) {
        super(name);
        this.damage = damage;
    }
}
module.exports = Weapon;