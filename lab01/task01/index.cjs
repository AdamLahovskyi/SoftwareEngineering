const Money = require('./Money.cjs');
const Product = require('./Product.cjs');
const Warehouse = require('./Warehouse.cjs');
const Reporting = require('./Reporting.cjs');
const Euro = require('./Euro.cjs');

let price = new Money(10, 50); // $10.50
let laptop = new Product("Laptop", price);

let warehouseItem = new Warehouse("Laptop", "piece", 1000, 10, "2024-06-01");

let euroPrice = new Euro(10, 50);
let euroLaptop = new Product("Euro Laptop", euroPrice);

let reporting = new Reporting();
reporting.addWarehouseItem(warehouseItem);

reporting.registerArrival("Laptop", 5);

laptop.reducePrice(5);

reporting.generateInventoryReport();

laptop.display();
euroLaptop.display();
