const InventoryItem = require("./InventoryItem");

class Armor extends InventoryItem {
    constructor(name, defense) {
        super(name);
        this.defense = defense;
    }
}
module.exports = Armor;