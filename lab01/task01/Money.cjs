class Money {
    constructor(dollars, cents) {
        this.dollars = dollars;
        this.cents = cents;
    }

    setDollars(dollars) {
        this.dollars = dollars;
    }

    setCents(cents) {
        if (cents >= 100) {
            this.dollars += Math.floor(cents / 100);
            this.cents = cents % 100;
        } else {
            this.cents = cents;
        }
    }

    display() {
        console.log(`$${this.dollars}.${this.cents}`);
    }
}
module.exports = Money;