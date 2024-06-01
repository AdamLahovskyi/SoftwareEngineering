const Money = require("./Money.cjs");

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    reducePrice(amount) {
        if (amount > (this.price.dollars * 100 + this.price.cents)) {
            console.log(`Cannot reduce price by ${amount}`);
        } else {
            const newPriceInCents = (this.price.dollars * 100 + this.price.cents) - amount;
            this.price.setDollars(Math.floor(newPriceInCents / 100));
            this.price.setCents(newPriceInCents % 100);
        }
    }

    display() {
        console.log(`Product: ${this.name}`);
        this.price.display();
    }
}
module.exports = Product;

const price = new Money(10, 50); // $10.50
