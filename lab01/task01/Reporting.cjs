class Reporting {
    constructor() {
        this.warehouseItems = [];
    }

    addWarehouseItem(warehouseItem) {
        this.warehouseItems.push(warehouseItem);
    }

    registerArrival(itemName, quantity) {
        let item = this.warehouseItems.find(i => i.name === itemName);
        if (item) {
            item.changeQuantity(quantity);
            item.lastDeliveryDate = new Date();
            console.log(`Arrival registered: ${quantity} ${item.unit} of ${item.name}`);
        } else {
            console.log(`Item ${itemName} not found in warehouse.`);
        }
    }

    registerShipment(itemName, quantity) {
        let item = this.warehouseItems.find(i => i.name === itemName);
        if (item) {
            if (item.quantity >= quantity) {
                item.changeQuantity(-quantity);
                console.log(`Shipment registered: ${quantity} ${item.unit} of ${item.name}`);
            } else {
                console.log(`Insufficient quantity for ${item.name}.`);
            }
        } else {
            console.log(`Item ${itemName} not found in warehouse.`);
        }
    }

    generateInventoryReport() {
        console.log("Inventory Report:");
        this.warehouseItems.forEach(item => {
            item.display();
            console.log('-------------------------');
        });
    }
}

module.exports = Reporting;
