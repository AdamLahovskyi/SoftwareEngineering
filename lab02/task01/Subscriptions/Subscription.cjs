class Subscription{
    constructor(monthlyFee, minPeriod, channels, features) {
        this.monthlyFee = monthlyFee;
        this.minPeriod = minPeriod;
        this.channels = channels;
        this.features = features;
    }
    getDetails() {
        return `Monthly Fee: ${this.monthlyFee}, Minimal subscription period: ${this.minPeriod} months, Channels: ${this.channels.join(', ')}, Other Features: ${this.features.join(', ')}`;
    }
}

module.exports = {Subscription};