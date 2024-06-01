class Warehouse {
    constructor(name, unit, pricePerUnit, quantity, lastDeliveryDate) {
        this.name = name;
        this.unit = unit;
        this.pricePerUnit = pricePerUnit;
        this.quantity = quantity;
        this.lastDeliveryDate = new Date(lastDeliveryDate);
    }

    display() {
        console.log(`Product: ${this.name}`);
        console.log(`Unit: ${this.unit}`);
        console.log(`Price per Unit: $${this.pricePerUnit.toFixed(2)}`);
        console.log(`Quantity: ${this.quantity}`);
        console.log(`Last Delivery Date: ${this.lastDeliveryDate.toDateString()}`);
    }

    changeQuantity(amount) {
        this.quantity += amount;
    }
}

module.exports = Warehouse;
