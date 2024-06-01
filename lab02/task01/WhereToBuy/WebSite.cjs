const SubscriptionFactory = require('../SubscriptionFactory.cjs');

class WebSite {
    static purchaseSubscription(type) {
        console.log(`Purchasing ${type} subscription via Website...`);
        return SubscriptionFactory.createSubscription(type);
    }
}

module.exports = WebSite;
