const Money = require('./Money.cjs');
class Euro extends Money {
    constructor(euros, cents) {
        let dollars = euros * 1.18;
        super(dollars, cents);
    }
}

module.exports = Euro;
