const WebSite = require('./WhereToBuy/WebSite.cjs');
const MobileApp = require('./WhereToBuy/MobileApp.cjs');
const ManagerCall = require('./WhereToBuy/ManagerCall.cjs');

function main() {
    const websiteSub = WebSite.purchaseSubscription('domestic');
    console.log('Website Subscription:', websiteSub.getDetails());

    const mobileAppSub = MobileApp.purchaseSubscription('educational');
    console.log('Mobile App Subscription:', mobileAppSub.getDetails());

    const managerCallSub = ManagerCall.purchaseSubscription('premium');
    console.log('Manager Call Subscription:', managerCallSub.getDetails());
}

main();
