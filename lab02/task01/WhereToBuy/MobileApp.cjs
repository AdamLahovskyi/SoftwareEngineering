const SubscriptionFactory = require('../SubscriptionFactory.cjs');

class MobileApp {
    static purchaseSubscription(type) {
        console.log(`Purchasing ${type} subscription via Mobile App...`);
        return SubscriptionFactory.createSubscription(type);
    }
}

module.exports = MobileApp;
