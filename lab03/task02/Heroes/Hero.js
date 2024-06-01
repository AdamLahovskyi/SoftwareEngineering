class Hero {
    constructor(name) {
        this.name = name;
        this.inventory = [];
    }

    addInventory(item) {
        this.inventory.push(item);
    }

    showInventory() {
        console.log(`${this.name}'s Inventory:`);
        this.inventory.forEach(item => console.log(`- ${item.name}`));
    }
}
module.exports=Hero;