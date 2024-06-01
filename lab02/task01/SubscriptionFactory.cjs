const {DomesticSubscription} = require("./Subscriptions/DomesticSubscription.cjs");
const {EducationalSubscription} = require("./Subscriptions/EducationalSubscription.cjs");
const {PremiumSubscription} = require("./Subscriptions/PremiumSubscription.cjs");

class SubscriptionFactory {
    static createSubscription(type) {
        switch (type) {
            case 'domestic':
                return new DomesticSubscription();
            case 'educational':
                return new EducationalSubscription();
            case 'premium':
                return new PremiumSubscription();
            default:
                throw new Error('Unknown subscription type');
        }
    }
}

module.exports = SubscriptionFactory;