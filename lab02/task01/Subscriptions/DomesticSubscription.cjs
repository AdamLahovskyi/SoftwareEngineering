const {Subscription} = require("./Subscription.cjs");

class DomesticSubscription extends Subscription{
    constructor() {
        super(9.99,12, ['News', 'Sports', 'E-Sports'], ['HD']);
    }
}
module.exports = {DomesticSubscription};