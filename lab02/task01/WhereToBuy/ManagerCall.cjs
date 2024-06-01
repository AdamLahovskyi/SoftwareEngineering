const SubscriptionFactory = require('../SubscriptionFactory.cjs');

class ManagerCall {
    static purchaseSubscription(type) {
        console.log(`Purchasing ${type} subscription via Manager Call...`);
        return SubscriptionFactory.createSubscription(type);
    }
}

module.exports = ManagerCall;
