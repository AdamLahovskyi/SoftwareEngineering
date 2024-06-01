const {Subscription} = require("./Subscription.cjs");

class PremiumSubscription extends Subscription{
    constructor() {
        super(19.99,12, ['HBO', 'Sports', 'Netflix'], ['4K', 'Access to recordings.', 'Multi-users']);
    }
}
module.exports = {PremiumSubscription};