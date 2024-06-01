let Warrior = require('./Heroes/Warrior');
const Mage = require('./Heroes/Mage');
const Paladin = require('./Heroes/Paladin');
const Weapon = require(('./Inventory/Weapon'))
const Armor = require(('./Inventory/Armor'))

let hero1 = new Warrior("Conan");
let hero2 = new Mage("Gandalf");
let hero3 = new Paladin("Arthur");

let sword = new Weapon("Sword", 10);
let staff = new Weapon("Staff", 8);
let helmet = new Armor("Helmet", 5);

hero1.addInventory(sword);
hero1.addInventory(helmet);
hero2.addInventory(staff);
hero3.addInventory(helmet);

hero1.showInventory();
hero2.showInventory();
hero3.showInventory();