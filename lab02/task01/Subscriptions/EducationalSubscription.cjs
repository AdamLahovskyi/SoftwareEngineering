const {Subscription} = require("./Subscription.cjs");

class EducationalSubscription extends Subscription{
    constructor() {
        super(4.99,6, ['Discovery', 'BBC', 'History of USA'], ['HD', 'Access to recordings.']);
    }
}
module.exports = {EducationalSubscription};