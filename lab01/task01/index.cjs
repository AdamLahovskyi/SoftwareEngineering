const Money = require('./Money.cjs');
const Product = require('./Product.cjs');
const Warehouse = require('./Warehouse.cjs');
const Reporting = require('./Reporting.cjs');
const Euro = require('./Euro.cjs');

const price = new Money(10, 50); // $10.50
const laptop = new Product("Laptop", price);

const warehouseItem = new Warehouse("Laptop", "piece", 1000, 10, "2024-06-01");

const euroPrice = new Euro(10, 50);
const euroLaptop = new Product("Euro Laptop", euroPrice);

const reporting = new Reporting();
reporting.addWarehouseItem(warehouseItem);

reporting.registerArrival("Laptop", 5);

laptop.reducePrice(5);

reporting.generateInventoryReport();

laptop.display();
euroLaptop.display();
